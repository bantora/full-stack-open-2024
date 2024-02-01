import { useEffect, useState } from "react";

import { getAllCountries, getCountries } from "./services/countries";
import Weather from "./components/Weather";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState();
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [input, setinput] = useState("");
  const [viewState, setViewState] = useState(false);

  const renderCountries = () => {
    if (!!country && viewState) {
      return (
        <div>
          <h1>{country.name.common}</h1>
          <div>capital {country.capital[0]}</div>
          <div>area {country.area}</div>

          <h3>languages:</h3>

          <ul>
            {Object.values(country.languages).map((value) => (
              <li key={value}>{value}</li>
            ))}
          </ul>

          <img src={country.flags.svg} height={300} width={300} />

          <Weather country={country} />
        </div>
      );
    }

    return filteredCountries.map(({ name: { common } }) => (
      <div key={common}>
        {common}
        <button onClick={() => handleView(common)}>show</button>
      </div>
    ));
  };

  const handleView = (name) => {
    getCountries(name).then((res) => {
      setCountry(res);
      setViewState(true);
    });
  };

  const handleInput = (e) => {
    setinput(e.target.value);
    const filtered = countries.filter(({ name: { common } }) =>
      common.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredCountries(filtered);

    if (filtered.length === 1) {
      getCountries(filtered[0].name.common).then((res) => setCountry(res));
      setViewState(true);
    } else {
      setViewState(false);
    }
  };

  useEffect(() => {
    getAllCountries().then((res) => setCountries(res));
  }, []);
  return (
    <div>
      find countries <input value={input} onChange={handleInput} />
      {filteredCountries.length > 10 ? (
        <div>Too many matches specify another filter</div>
      ) : (
        renderCountries()
      )}
    </div>
  );
};

export default App;
