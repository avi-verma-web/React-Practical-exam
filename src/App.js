import { DataProvider } from "./GlobalState";
import "./App.css";
import SearchBar from "./Page/SearchBar";

function App() {
  return (
    <DataProvider>
      <SearchBar></SearchBar>
      
    </DataProvider>
  );
}

export default App;
