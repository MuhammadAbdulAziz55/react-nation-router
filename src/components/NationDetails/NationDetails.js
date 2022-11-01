import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const NationDetails = () => {
  let { nationName } = useParams();
  const [country, setCountry] = useState([]);
  console.log(country[0]);
  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${nationName}`)
      .then((res) => res.json())
      .then((data) => setCountry(data));
  }, []);

  const nationStyle = {
    border: "1px solid lightGray",
    margin: "20px",
    padding: "20px ",
    borderRadius: "5px",
  };

  return (
    <div style={nationStyle}>
      <div>
        <img
          style={{ height: "200px", width: "300px" }}
          src={country[0].flags.png}
          alt=""
        />
      </div>
      <div>
        <h2>Country Details are coming soon...</h2>
        <h2>Name: {country[0].name.common}</h2>
        <p>Capital: {country[0].capital[0]}</p>
        <p>Continents: {country[0].continents[0]}</p>
        <p>Currencies: {country[0].currencies.BBD.name}</p>
        <p>Language: {country[0].languages.eng}</p>
        <p>Population: {country[0].population}</p>
        <p>Area: {country[0].population}</p>
        <p>Timezone: {country[0].timezones[0]}</p>
        <Link>
          <p>Maps: {country[0].maps.googleMaps}</p>
        </Link>
      </div>
    </div>
  );
};

export default NationDetails;
