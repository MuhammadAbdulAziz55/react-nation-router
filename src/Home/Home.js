import React, { useEffect, useState } from "react";

import Nation from "../components/Nation/Nation";

const Home = () => {
  const [nation, setNation] = useState([]);

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/all`)
      .then((res) => res.json())
      .then((data) => setNation(data));
  }, []);
  return (
    <div>
      <h2>Total Country: {nation.length}</h2>
      {nation.map((country) => (
        <Nation countries={country}></Nation>
      ))}
    </div>
  );
};

export default Home;
