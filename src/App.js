import './App.css';
import Search from "./components/Search";
import SearchResults from "./components/SearchResults";
import SearchHistory from "./components/SearchHistory";

function App() {
  return (
    <div className="App">
    <h1>Hacker Search</h1>
    <SearchHistory />
    <Search />
    <SearchResults />
    
    
    </div>
  );
}

export default App;
