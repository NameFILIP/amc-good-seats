# AMC Good Seats

1. Modify the like `MOVIE_NAME`, `MOVIE_THEATER`, `THEATER_TYPE_CODE`, constants on top of [amc-script](/amc-script.js) (See [amc-constants](/amc-constants.js) for different values).
2. Copy and run script to the DevTools console on the AMC website.
3. See the ouput that contains good seats found.
4. Buy the tickets.
5. Enjoyt the movie!


## Sample output

```
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
```
