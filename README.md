# AMC Good Seats

1. Modify the like `MOVIE_NAME`, `MOVIE_THEATER`, `THEATER_TYPE_CODE`, constants on top of [amc-script](/amc-script.js) (See [amc-constants](/amc-constants.js) for different values).
2. Copy and run script to the DevTools console on the AMC website.
3. See the ouput that contains good seats found.
4. Buy the tickets.
5. Enjoyt the movie!


## Sample output

```
Checking AMC: amc-orpheum-7
Checking AMC: amc-lincoln-square-13
Checking AMC: amc-84th-street-6
Checking AMC: amc-magic-johnson-harlem-9
Checking AMC: amc-empire-25
{
  "2024-03-12": {
    "118568405": {
      "url": "https://www.amctheatres.com/showtimes/all/2024-03-12/amc-empire-25/all/118568405",
      "time": "11:00:00 PM",
      "goodSeats": "G7,G8,G9,G10,G11,G12,H10,H11,H12,H13,J8,J9,J10,J11,J12,J13,J14,J15,K8,K9,K12,K13,K14,K15,M7,M8,M9,M10,M11,M12,N7,N8,N9,N10,N11,N12",
      "dayOfWeek": "Tuesday"
    },
    "118568406": {
      "url": "https://www.amctheatres.com/showtimes/all/2024-03-12/amc-empire-25/all/118568406",
      "time": "12:00:00 PM",
      "goodSeats": "G7,G9,G10,G11,G12,H10,H11,H12,H13,J8,J10,J13,J14,J15,K8,K9,K10,K11,K14,K15,M9,N7,N11,N12",
      "dayOfWeek": "Tuesday"
    },
    "118568407": {
      "url": "https://www.amctheatres.com/showtimes/all/2024-03-12/amc-empire-25/all/118568407",
      "time": "3:40:00 PM",
      "goodSeats": "G7,G9,G10,G11,G12,H7,H10,H13,J8,J9,J13,K8,K9,K10,K14,M7,M8,N7,N8,N9,N12",
      "dayOfWeek": "Tuesday"
    }
  },
  "2024-03-19": {
    "118568429": {
      "url": "https://www.amctheatres.com/showtimes/all/2024-03-19/amc-empire-25/all/118568429",
      "time": "7:15:00 PM",
      "goodSeats": "N9,N12",
      "dayOfWeek": "Tuesday"
    },
    "118568430": {
      "url": "https://www.amctheatres.com/showtimes/all/2024-03-19/amc-empire-25/all/118568430",
      "time": "11:00:00 PM",
      "goodSeats": "G7,G8,G9,G10,G11,G12,H7,H8,H9,H10,H11,H12,H13,J8,J9,J10,J11,J12,J13,J14,J15,K8,K9,K10,K11,K14,K15,M7,M8,M11,M12,N7,N8,N9,N10,N11,N12",
      "dayOfWeek": "Tuesday"
    },
    "118568431": {
      "url": "https://www.amctheatres.com/showtimes/all/2024-03-19/amc-empire-25/all/118568431",
      "time": "3:40:00 PM",
      "goodSeats": "G7,G8,G9,G10,G11,G12,H7,H10,H11,H12,H13,J8,J9,J10,J11,J12,J13,J14,J15,K8,K9,K10,K11,K12,K13,K14,K15,M7,M8,M9,M11,M12,N7,N8,N9,N10,N11,N12",
      "dayOfWeek": "Tuesday"
    },
    "118568432": {
      "url": "https://www.amctheatres.com/showtimes/all/2024-03-19/amc-empire-25/all/118568432",
      "time": "12:00:00 PM",
      "goodSeats": "G7,G8,G9,G10,G11,G12,H7,H8,H9,H10,H11,H12,H13,J8,J9,J10,J11,J12,J13,J14,J15,K8,K9,K10,K11,K12,K13,K14,K15,M7,M8,M9,M10,M11,M12,N7,N8,N9,N10,N11,N12",
      "dayOfWeek": "Tuesday"
    }
  }
}
Checking AMC: amc-kips-bay-15
{
  "2024-03-12": {
    "118614857": {
      "url": "https://www.amctheatres.com/showtimes/all/2024-03-12/amc-kips-bay-15/all/118614857",
      "time": "12:00:00 PM",
      "goodSeats": "F9,F10,F11,F12,F16,F17,G9,G10,G13,G15,G16,G17,H9,H10,H14,H16,H17,J10,J11,J15,J16,K9,K10,K13",
      "dayOfWeek": "Tuesday"
    },
    "118614858": {
      "url": "https://www.amctheatres.com/showtimes/all/2024-03-12/amc-kips-bay-15/all/118614858",
      "time": "3:45:00 PM",
      "goodSeats": "F9,F10,F11,F16,F17,G12,J17,K9,K17",
      "dayOfWeek": "Tuesday"
    },
    "118614860": {
      "url": "https://www.amctheatres.com/showtimes/all/2024-03-12/amc-kips-bay-15/all/118614860",
      "time": "11:00:00 PM",
      "goodSeats": "F9,F10,F11,F12,F13,F14,F15,F16,F17,G9,G10,G11,G12,G15,G16,G17,H9,H10,H11,H12,H13,H14,H15,H16,H17,J9,J10,J11,J12,J15,J16,J17,K9,K10,K11,K12,K13,K14,K15,K16,K17",
      "dayOfWeek": "Tuesday"
    }
  },
  "2024-03-19": {
    "118614884": {
      "url": "https://www.amctheatres.com/showtimes/all/2024-03-19/amc-kips-bay-15/all/118614884",
      "time": "3:15:00 PM",
      "goodSeats": "F9,F10,F11,F12,F13,F14,F15,F16,F17,G9,G10,G11,G12,G13,G15,G16,G17,H9,H10,H11,H12,H13,H14,H15,H16,H17,J9,J10,J11,J16,J17,K9,K10,K11,K12,K13,K14,K15,K16,K17",
      "dayOfWeek": "Tuesday"
    },
    "118614886": {
      "url": "https://www.amctheatres.com/showtimes/all/2024-03-19/amc-kips-bay-15/all/118614886",
      "time": "10:35:00 PM",
      "goodSeats": "F9,F10,F11,F12,F13,F14,F15,F16,F17,G9,G10,G11,G12,G13,G14,G15,G16,G17,H9,H10,H11,H12,H15,H16,H17,J9,J17,K9,K10,K11,K12,K13,K14,K15,K16,K17",
      "dayOfWeek": "Tuesday"
    }
  }
}
Checking AMC: amc-34th-street-14
{
  "2024-03-12": {
    "118589792": {
      "url": "https://www.amctheatres.com/showtimes/all/2024-03-12/amc-34th-street-14/all/118589792",
      "time": "11:45:00 AM",
      "goodSeats": "E7,E8,E11,E12,F7,F8,F10,F12,G12,H9,H11",
      "dayOfWeek": "Tuesday"
    },
    "118589793": {
      "url": "https://www.amctheatres.com/showtimes/all/2024-03-12/amc-34th-street-14/all/118589793",
      "time": "3:20:00 PM",
      "goodSeats": "E7,E8,E11,E12,F8,F12,G7,G11",
      "dayOfWeek": "Tuesday"
    },
    "118589795": {
      "url": "https://www.amctheatres.com/showtimes/all/2024-03-12/amc-34th-street-14/all/118589795",
      "time": "10:35:00 PM",
      "goodSeats": "E7,E8,E11,E12,G11",
      "dayOfWeek": "Tuesday"
    }
  },
  "2024-03-19": {
    "118589732": {
      "url": "https://www.amctheatres.com/showtimes/all/2024-03-19/amc-34th-street-14/all/118589732",
      "time": "2:20:00 PM",
      "goodSeats": "E7,E8,E9,E10,E11,E12,F7,F8,F9,F10,F11,F12,G7,G8,G9,G11,G12,H7,H8,H9,H10,H11,H12",
      "dayOfWeek": "Tuesday"
    },
    "118589733": {
      "url": "https://www.amctheatres.com/showtimes/all/2024-03-19/amc-34th-street-14/all/118589733",
      "time": "6:00:00 PM",
      "goodSeats": "G10",
      "dayOfWeek": "Tuesday"
    },
    "118589734": {
      "url": "https://www.amctheatres.com/showtimes/all/2024-03-19/amc-34th-street-14/all/118589734",
      "time": "9:35:00 PM",
      "goodSeats": "E7,E8,E9,E10,E11,E12,F7,F8,F12,G7,G12,H7,H8",
      "dayOfWeek": "Tuesday"
    }
  }
}
Checking AMC: amc-19th-st-east-6
Checking AMC: amc-village-7
Checking AMC: amc-newport-centre-11
```
