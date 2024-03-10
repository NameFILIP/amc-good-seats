/*
 * Run this script from DevTools console on the AMC website.
 */

const MOVIE_NAME = "Dune: Part Two";

const NYC_AMC_THEATERS = [
  "amc-orpheum-7",
  "amc-lincoln-square-13",
  "amc-84th-street-6",
  "amc-magic-johnson-harlem-9",
  "amc-empire-25",
  "amc-kips-bay-15",
  "amc-34th-street-14",
  "amc-19th-st-east-6",
  "amc-village-7",
  "amc-newport-centre-11",
];
const MOVIE_THEATER = NYC_AMC_THEATERS[1];
const SHOWTIME_ATTRIBUTE = "imax"; // or "dolby", etc. See more values in amc-constants.js

const DAYS = 14;
const AMC_URL = "https://www.amctheatres.com";
const DELAY_MS = 500;

const GOOD_SEAT_BUFFER_RATIO = 0.3;

const INVALID_SEATS = ["NotASeat", "Companion", "Wheelchair"];

// Enable to check only for Tuesdays (discount day for AMC)
const CHECK_ONLY_TUESDAYS = false;

function getShowtimeURL(yyyyMMdd, theaterId, showtimeId) {
  return `/showtimes/all/${yyyyMMdd}/${theaterId}/all/${showtimeId}`;
}

const getDayOfWeek = (dateString) => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return days[new Date(dateString).getDay()];
};

/*
 * Fetch Apollo data from a given URL.
 */
async function getApolloData(url) {
  try {
    const response = await fetch(url);
    const html = await response.text();
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");

    const apolloData = JSON.parse(doc.getElementById("apollo-data").innerHTML);
    return apolloData;
  } catch (error) {
    console.error("Failed to fetch or parse:", url, error);
    return null;
  }
}

/*
 * Get showtimes for a given date and theater.
 */
async function getShowtimes(yyyyMMdd, theaterId, name) {
  const url = `/showtimes/all/${yyyyMMdd}/${theaterId}/all`;
  const apolloData = await getApolloData(url);
  if (!apolloData) {
    return [];
  }
  const movie = Object.values(apolloData).find(
    (obj) => obj.__typename === "Movie" && obj.name === name
  );
  const movieId = movie?.id;
  if (!movieId) {
    console.error("Movie not found. Date:", yyyyMMdd, "Name:", name);
    return [];
  }

  const showtimes = Object.values(apolloData).filter(
    (showtime) =>
      showtime.__typename === "Showtime" && showtime.movie.__ref === movieId
  );

  const filteredShowtimes = showtimes.filter((showtime) => {
    const attrubutesId = showtime.attributes.__ref;
    const attributes = apolloData[attrubutesId];
    const edges = attributes.edges.map((edge) => apolloData[edge.__ref]);
    const nodes = edges.map((edge) => apolloData[edge.node.__ref]);
    const hasAttribute = nodes.some((node) =>
      node.name.toLowerCase().includes(SHOWTIME_ATTRIBUTE)
    );
    return hasAttribute;
  });

  // if (filteredShowtimes.length > 0) {
  //   console.log("Date:", yyyyMMdd, "Showtimes:", filteredShowtimes.length);
  // }

  return filteredShowtimes;
}

/*
 * Sort seats by row (letter) and column (number).
 */
function sortSeats(seats) {
  seats.sort((a, b) => {
    const rowA = getRow(a);
    const rowB = getRow(b);
    if (rowA !== rowB) {
      return rowA.localeCompare(rowB);
    }
    const columnA = getColumn(a);
    const columnB = getColumn(b);
    return columnA - columnB;
  });
}

const getRow = (seat) => seat.name[0];
const getColumn = (seat) => parseInt(seat.name.slice(1), 10);

/*
 * Get seat map from a list of seats.
 */
function getSeatMap(seats) {
  return seats.reduce((map, seat) => {
    const row = getRow(seat);
    const column = getColumn(seat);
    map[row] = map[row] ?? [];
    map[row].push(column);
    return map;
  }, {});
}

const A = "A".charCodeAt(0);
const numberToCharacter = (number) => String.fromCharCode(A + number);
const characterToNumber = (character) => character.charCodeAt(0) - A;

/*
 * Get good rows for a given seat map.
 */
function getGoodRows(seatMap) {
  const allRows = Object.keys(seatMap).sort();
  const minRow = Math.min(...allRows.map(characterToNumber));
  const maxRow = Math.max(...allRows.map(characterToNumber));
  const rowsCount = maxRow - minRow;

  const buffer = rowsCount * GOOD_SEAT_BUFFER_RATIO;
  const goodRows = allRows.filter(
    (row) =>
      characterToNumber(row) >= minRow + buffer &&
      // Central seats in back rowas are good too, so using a smaller buffer
      characterToNumber(row) <= maxRow - buffer / 2
  );
  return goodRows;
}

/*
 * Get good columns for a given row.
 */
function getGoodColumns(seatMap, row) {
  const columns = seatMap[row];
  const minColumn = Math.min(...columns);
  const maxColumn = Math.max(...columns);
  const columnsCount = maxColumn - minColumn;
  const buffer = columnsCount * GOOD_SEAT_BUFFER_RATIO;
  const goodColumns = columns.filter(
    (column) => column >= minColumn + buffer && column <= maxColumn - buffer
  );
  return goodColumns;
}

/*
 * Check showtime for good seats.
 */
async function checkShowtime(yyyyMMdd, theaterId, showtime) {
  const url = getShowtimeURL(yyyyMMdd, theaterId, showtime.showtimeId);
  const apolloData = await getApolloData(url);
  if (!apolloData) {
    return [];
  }

  const allSeats = Object.values(apolloData).filter(
    (seat) => seat.__typename === "Seat" && !INVALID_SEATS.includes(seat.type)
  );
  const seatMap = getSeatMap(allSeats);
  const goodRows = getGoodRows(seatMap);

  const availableSeats = Object.values(allSeats).filter(
    (seat) => seat.available && seat.shouldDisplay
  );

  const onlyGood = availableSeats.filter((seat) => {
    const row = getRow(seat);
    const column = getColumn(seat);
    if (!goodRows.includes(row)) {
      return false;
    }
    const goodColumns = getGoodColumns(seatMap, row);
    return goodColumns.includes(column);
  });

  // if (onlyGood.length > 0) {
  //   console.log(
  //     "Date:",
  //     yyyyMMdd,
  //     getDayOfWeek(showtime.when),
  //     new Date(showtime.when).toLocaleTimeString(),
  //     "Showtime ID:",
  //     showtime.showtimeId,
  //     "All Seats #:",
  //     availableSeats.length,
  //     "Good Seats #:",
  //     onlyGood.length,
  //     "Good Seats Names:",
  //     onlyGood.map((seat) => seat.name)
  //   );
  // }

  // Sort by seat name (e.g. E1, E9, E10, E11, E12, ...)
  sortSeats(onlyGood);

  return onlyGood.map((seat) => seat.name);
}

/*
 * Generate date strings from today for the next 30 days in format 'YYYY-MM-DD'
 */
function generateDateStrings() {
  const dateStrings = [];
  for (let i = 0; i < DAYS; i++) {
    const date = new Date();
    date.setDate(date.getDate() + i);
    const yyyy = date.getFullYear();
    const mm = String(date.getMonth() + 1).padStart(2, "0");
    const dd = String(date.getDate()).padStart(2, "0");
    dateStrings.push(`${yyyy}-${mm}-${dd}`);
  }
  return dateStrings;
}

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

/*
 * Main function to check showtimes for a given theater.
 */
async function checkShowtimesForDateRange(theaterId) {
  const goodSeatsForShowtimes = {};

  const dateStrings = generateDateStrings();
  for (let i = 0; i < dateStrings.length; i++) {
    const dateString = dateStrings[i];
    const showtimes = await getShowtimes(dateString, theaterId, MOVIE_NAME);
    showtimes.sort((a, b) => new Date(a.when) - new Date(b.when));

    delay(DELAY_MS);

    for (let j = 0; j < showtimes.length; j++) {
      const showtime = showtimes[j];

      if (CHECK_ONLY_TUESDAYS && getDayOfWeek(showtime.when) !== "Tuesday") {
        continue;
      }

      const onlyGood = await checkShowtime(dateString, theaterId, showtime);
      if (onlyGood.length > 0) {
        const time = new Date(showtime.when).toLocaleTimeString();
        const dayOfWeek = getDayOfWeek(showtime.when);
        const dateAndDay = `${dateString}-${dayOfWeek}`;
        goodSeatsForShowtimes[dateAndDay] =
          goodSeatsForShowtimes[dateAndDay] ?? {};
        goodSeatsForShowtimes[dateAndDay][time] = {
          url:
            AMC_URL +
            getShowtimeURL(dateString, theaterId, showtime.showtimeId),
          goodSeats: onlyGood.join(),
        };
      }
      delay(DELAY_MS);
    }
  }
  if (Object.keys(goodSeatsForShowtimes).length > 0) {
    console.log(JSON.stringify(goodSeatsForShowtimes, null, 2));
  }
}

// checkShowtimesForDateRange(MOVIE_THEATER);

/*
 * Main function to check showtimes for all AMC theaters in NYC.
 */
async function checkShowtimesForAllAMCs() {
  for (let i = 0; i < NYC_AMC_THEATERS.length; i++) {
    console.log("Checking AMC:", NYC_AMC_THEATERS[i]);
    await checkShowtimesForDateRange(NYC_AMC_THEATERS[i]);
  }
}

checkShowtimesForAllAMCs();
