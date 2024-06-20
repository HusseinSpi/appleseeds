import { createContext, useState, useContext } from "react";

const CountryListContext = createContext();

export const CountryListProvider = ({ children }) => {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [filter, setFilter] = useState("");

  return (
    <CountryListContext.Provider
      value={{
        countries,
        setCountries,
        filteredCountries,
        setFilteredCountries,
        filter,
        setFilter,
      }}
    >
      {children}
    </CountryListContext.Provider>
  );
};

export const useCountryList = () => {
  return useContext(CountryListContext);
};
