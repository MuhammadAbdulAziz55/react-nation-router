import React from "react";
import { Link } from "react-router-dom";

const Nation = (props) => {
  const { name, population, region, flags } = props.countries;
  // console.log(props.countries);
  const countryStyle = {
    border: "1px solid lightGray",
    margin: "20px",
    padding: "20px ",
    borderRadius: "5px",
    height: "300px",
    width: "350px",
  };
  return (
    <div style={countryStyle}>
      <div>
        <img
          style={{ height: "100px", width: "200px" }}
          src={flags.png}
          alt=""
        />
      </div>
      <div>
        <h4>Country Name: {name.common}</h4>

        <p>population: {population}</p>
        <p>Region: {region}</p>
        <Link to={`/nation/${name.common}`}>
          <button>Country Details</button>
        </Link>
      </div>
    </div>
  );
};

export default Nation;
