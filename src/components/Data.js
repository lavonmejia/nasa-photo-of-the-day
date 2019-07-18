import React, { useEffect, useState } from "react";
const axios = require('axios');

export default function Data() {
  const [datum, setDatum] = useState({});
    useEffect(() => {
      axios.get(
          "https://api.nasa.gov/planetary/apod?api_key=BEGyKdPRF9Fcy4cBqR4FwTFAniq8f5wUwedcxfZj&date=2019-07-15"

          )
        .then(response => {
          console.log(response.data);
          const image = response.data.url;
          const date = response.data.date;
          const explanation = response.data.explanation;
          const title = response.data.title;
          setDatum({'image':image, 'date':date, 'explanation':explanation, 'title':title});
        });
    },[]);
    return (
      <div>
        <h2>{datum.title}</h2>
        <p>{datum.date}</p>
        < img src={datum.image}/>
        <p>{datum.explanation}</p>
      </div>
    );
  }

