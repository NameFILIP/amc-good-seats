# AMC Good Seats

1. Modify the like `MOVIE_NAME`, `MOVIE_THEATER`, `THEATER_TYPE_CODE`, constants on top of [amc-script](/amc-script.js).
2. Copy and run script to the DevTools console on the AMC website.
3. See the ouput that contains good seats found.
4. Buy the tickets.
5. Enjoyt the movie!


## Sample output

```
{
  "2024-03-09": {
    "118671174": {
      "url": "https://www.amctheatres.com/showtimes/all/2024-03-09/amc-lincoln-square-13/all/118671174",
      "time": "8:30:00 AM",
      "goodSeats": [
        "F28"
      ],
      "dayOfWeek": "Friday"
    }
  },
  "2024-03-19": {
    "118590680": {
      "url": "https://www.amctheatres.com/showtimes/all/2024-03-19/amc-lincoln-square-13/all/118590680",
      "time": "3:00:00 PM",
      "goodSeats": [
        "E33"
      ],
      "dayOfWeek": "Monday"
    }
  },
  "2024-03-21": {
    "119581405": {
      "url": "https://www.amctheatres.com/showtimes/all/2024-03-21/amc-lincoln-square-13/all/119581405",
      "time": "11:15:00 AM",
      "goodSeats": [
        "E10",
        "E34",
        "E35"
      ],
      "dayOfWeek": "Wednesday"
    },
    "119581406": {
      "url": "https://www.amctheatres.com/showtimes/all/2024-03-21/amc-lincoln-square-13/all/119581406",
      "time": "3:00:00 PM",
      "goodSeats": [
        "E34",
        "E35"
      ],
      "dayOfWeek": "Wednesday"
    },
    "119581408": {
      "url": "https://www.amctheatres.com/showtimes/all/2024-03-21/amc-lincoln-square-13/all/119581408",
      "time": "10:30:00 PM",
      "goodSeats": [
        "E34",
        "E35"
      ],
      "dayOfWeek": "Wednesday"
    }
  },
  "2024-03-22": {
    "119581410": {
      "url": "https://www.amctheatres.com/showtimes/all/2024-03-22/amc-lincoln-square-13/all/119581410",
      "time": "12:15:00 PM",
      "goodSeats": [
        "E35"
      ],
      "dayOfWeek": "Thursday"
    },
    "119581412": {
      "url": "https://www.amctheatres.com/showtimes/all/2024-03-22/amc-lincoln-square-13/all/119581412",
      "time": "11:30:00 PM",
      "goodSeats": [
        "E35"
      ],
      "dayOfWeek": "Thursday"
    }
  },
  "2024-03-23": {
    "119581416": {
      "url": "https://www.amctheatres.com/showtimes/all/2024-03-23/amc-lincoln-square-13/all/119581416",
      "time": "11:30:00 PM",
      "goodSeats": [
        "E34",
        "E35"
      ],
      "dayOfWeek": "Friday"
    }
  },
  "2024-03-24": {
    "119581420": {
      "url": "https://www.amctheatres.com/showtimes/all/2024-03-24/amc-lincoln-square-13/all/119581420",
      "time": "11:30:00 PM",
      "goodSeats": [
        "E10",
        "E11",
        "E32",
        "E33",
        "E34",
        "E35",
        "F10",
        "F11",
        "G34",
        "G35",
        "H35",
        "K34",
        "K35",
        "L35"
      ],
      "dayOfWeek": "Saturday"
    }
  },
  "2024-03-25": {
    "119581423": {
      "url": "https://www.amctheatres.com/showtimes/all/2024-03-25/amc-lincoln-square-13/all/119581423",
      "time": "11:15:00 AM",
      "goodSeats": [
        "E10",
        "E11",
        "E12",
        "E14",
        "E31",
        "E32",
        "E33",
        "E34",
        "E35",
        "F34",
        "F35"
      ],
      "dayOfWeek": "Sunday"
    },
    "119581424": {
      "url": "https://www.amctheatres.com/showtimes/all/2024-03-25/amc-lincoln-square-13/all/119581424",
      "time": "3:00:00 PM",
      "goodSeats": [
        "E10",
        "E11",
        "E31",
        "E32",
        "E34",
        "E35",
        "F34",
        "F35"
      ],
      "dayOfWeek": "Sunday"
    },
    "119581426": {
      "url": "https://www.amctheatres.com/showtimes/all/2024-03-25/amc-lincoln-square-13/all/119581426",
      "time": "10:30:00 PM",
      "goodSeats": [
        "E10",
        "E11",
        "E33",
        "E34",
        "E35",
        "F34",
        "F35"
      ],
      "dayOfWeek": "Sunday"
    }
  },
  "2024-03-26": {
    "119581427": {
      "url": "https://www.amctheatres.com/showtimes/all/2024-03-26/amc-lincoln-square-13/all/119581427",
      "time": "3:00:00 PM",
      "goodSeats": [
        "E10",
        "E11",
        "E32",
        "E33",
        "E34",
        "E35",
        "F34",
        "F35"
      ],
      "dayOfWeek": "Monday"
    },
    "119581429": {
      "url": "https://www.amctheatres.com/showtimes/all/2024-03-26/amc-lincoln-square-13/all/119581429",
      "time": "10:30:00 PM",
      "goodSeats": [
        "E10",
        "E11",
        "E12",
        "E33",
        "E34",
        "E35",
        "F10",
        "F33",
        "F34",
        "F35",
        "G35"
      ],
      "dayOfWeek": "Monday"
    }
  },
  "2024-03-27": {
    "119581430": {
      "url": "https://www.amctheatres.com/showtimes/all/2024-03-27/amc-lincoln-square-13/all/119581430",
      "time": "11:15:00 AM",
      "goodSeats": [
        "E10",
        "E11",
        "E32",
        "E33",
        "E34",
        "E35",
        "F34",
        "F35",
        "G35"
      ],
      "dayOfWeek": "Tuesday"
    },
    "119581431": {
      "url": "https://www.amctheatres.com/showtimes/all/2024-03-27/amc-lincoln-square-13/all/119581431",
      "time": "3:00:00 PM",
      "goodSeats": [
        "E32",
        "E33",
        "E34",
        "E35",
        "F34",
        "F35"
      ],
      "dayOfWeek": "Tuesday"
    },
    "119581433": {
      "url": "https://www.amctheatres.com/showtimes/all/2024-03-27/amc-lincoln-square-13/all/119581433",
      "time": "10:30:00 PM",
      "goodSeats": [
        "E10",
        "E32",
        "E33",
        "E34",
        "E35",
        "F35"
      ],
      "dayOfWeek": "Tuesday"
    }
  }
}
```
