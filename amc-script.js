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

async function getShowtimes(yyyyMMdd, name) {
  const url = `/showtimes/all/${yyyyMMdd}/amc-lincoln-square-13/all`;
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

  const imaxShowtimes = showtimes.filter((showtime) => {
    const attrubutesId = showtime.attributes.__ref;
    const attributes = apolloData[attrubutesId];
    const edges = attributes.edges.map((edge) => apolloData[edge.__ref]);
    const nodes = edges.map((edge) => apolloData[edge.node.__ref]);
    const imax70mm = nodes.some((node) => node.code === "imax70mm");
    return imax70mm;
  });

  console.log({ yyyyMMdd, name, imaxShowtimes });

  return imaxShowtimes;
}

/*
 *  Good seats are: E-L 10-35
 */
function generateGoodSeats() {
  const goodSeats = new Set();
  ["E", "F", "G", "H", "I", "J", "K", "L"].forEach((row) => {
    for (let i = 10; i <= 35; i++) {
      goodSeats.add(`${row}${i}`);
    }
  });
  return goodSeats;
}

const goodSeats = generateGoodSeats();

async function checkShowtime(yyyyMMdd, showtimeId) {
  const url = `/showtimes/all/${yyyyMMdd}/amc-lincoln-square-13/all/${showtimeId}`;
  const apolloData = await getApolloData(url);
  if (!apolloData) {
    return [];
  }

  const seats = Object.values(apolloData).filter(
    (seat) =>
      seat.__typename === "Seat" &&
      seat.available &&
      seat.shouldDisplay &&
      seat.type === "CanReserve"
  );

  const onlyGood = seats.filter((seat) => goodSeats.has(seat.name));

  console.log(
    "Date:",
    yyyyMMdd,
    "Showtime ID:",
    showtimeId,
    "All Seats #:",
    seats.length,
    "Good Seats #:",
    onlyGood.length,
    "Good Seats Names:",
    onlyGood.map((seat) => seat.name)
  );

  return onlyGood;
}

// Generate date strings from today for the next 30 days in format 'YYYY-MM-DD'
function generateDateStrings() {
  const dateStrings = [];
  for (let i = 0; i < 30; i++) {
    const date = new Date();
    date.setDate(date.getDate() + i);
    const yyyy = date.getFullYear();
    const mm = String(date.getMonth() + 1).padStart(2, "0");
    const dd = String(date.getDate()).padStart(2, "0");
    dateStrings.push(`${yyyy}-${mm}-${dd}`);
  }
  return dateStrings;
}

const MOVIE_NAME = "Dune: Part Two";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function checkShowtimesForDateRange() {
  const dateStrings = generateDateStrings();

  const goodSeatsForShowtimes = {};

  for (let i = 0; i < dateStrings.length; i++) {
    const dateString = dateStrings[i];
    const showtimes = await getShowtimes(dateString, MOVIE_NAME);
    delay(1000);

    for (let j = 0; j < showtimes.length; j++) {
      const showtime = showtimes[j];
      const onlyGood = await checkShowtime(dateString, showtime.showtimeId);
      if (onlyGood.length > 0) {
        goodSeatsForShowtimes[showtime.id] = onlyGood;
      }
      delay(1000);
    }
  }

  console.log({ goodSeatsForShowtimes });
}

checkShowtimesForDateRange();
