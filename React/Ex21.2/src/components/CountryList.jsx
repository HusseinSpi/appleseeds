import { useEffect } from "react";
import { Data } from "../api/GetData";
import { useCountryList } from "../context/CountryListContext";

const CountryList = () => {
  const {
    countries,
    setCountries,
    filteredCountries,
    setFilteredCountries,
    filter,
    setFilter,
  } = useCountryList();

  useEffect(() => {
    const getData = async () => {
      const data = await Data();
      setCountries(data);
      setFilteredCountries(data);
    };
    getData();
  }, [setCountries, setFilteredCountries]);

  const handleFilterChange = (event) => {
    const filterValue = event.target.value.toLowerCase();
    const filtered = countries.filter((country) =>
      country.name.toLowerCase().includes(filterValue)
    );
    setFilter(filterValue);
    setFilteredCountries(filtered);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Filter countries"
        value={filter}
        onChange={handleFilterChange}
      />
      <ul>
        {filteredCountries.map((country) => (
          <li key={country.alpha3Code}>{country.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default CountryList;
