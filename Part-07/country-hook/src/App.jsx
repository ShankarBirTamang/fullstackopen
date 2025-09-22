import React, { useState, useEffect } from "react";
import axios from "axios";

const useField = (type) => {
  const [value, setValue] = useState("");

  const onChange = (event) => {
    setValue(event.target.value);
  };

  return {
    type,
    value,
    onChange,
  };
};

const useCountry = (name) => {
  const [country, setCountry] = useState(null);
  console.log("name:", name);

  useEffect(() => {
    if (!name) {
      setCountry(null);
      return;
    }
    fetch(`https://studies.cs.helsinki.fi/restcountries/api/name/${name}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Country not found");
        }
        return res.json();
      })
      .then((data) => {
        setCountry({ found: true, data });
      })
      .catch(() => {
        setCountry({ found: false });
      });
  }, [name]);

  return country;
};

const Country = ({ country }) => {
  console.log("country:", country);
  if (!country) {
    return null;
  }

  if (!country.found) {
    return <div>not found...</div>;
  }

  return (
    <div>
      <h3>Country: {country.data.name.common} </h3>
      <div>Official Country Name: {country.data.name.official}</div>
      <div>Capital: {country.data.capital[0]}</div>
      <div>Population:{country.data.population}</div>
      <img
        src={country.data.flags.png}
        height="100"
        alt={`flag of ${country.data.name.common}`}
      />
    </div>
  );
};

const App = () => {
  const nameInput = useField("text");
  const [name, setName] = useState("");
  const country = useCountry(name);

  const fetch = (e) => {
    e.preventDefault();
    setName(nameInput.value);
  };

  return (
    <div>
      <form onSubmit={fetch}>
        <input {...nameInput} />
        <button>find</button>
      </form>

      <Country country={country} />
    </div>
  );
};

export default App;
