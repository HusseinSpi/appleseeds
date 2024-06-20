import { CountryListProvider } from "./context/CountryListContext";
import CountryList from "./components/CountryList";

const App = () => {
  return (
    <CountryListProvider>
      <CountryList />
    </CountryListProvider>
  );
};

export default App;
