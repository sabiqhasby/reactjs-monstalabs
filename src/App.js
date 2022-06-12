import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import "./App.css";
import { useEffect, useState } from "react";

const App = () => {
  const [searchField, setSearchField] = useState("");
  const [monstersData, setMonstersData] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monstersData);
  console.log(searchField);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonstersData(users));
    console.log("monstersData Fetched");
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monstersData.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    setFilteredMonsters(newFilteredMonsters);
  }, [monstersData, searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();

    setSearchField(searchFieldString);
  };

  return (
    <div className="App">
      <h1 className="app-title">The MonstaLabs</h1>
      <SearchBox onChangeHandler={onSearchChange} />

      <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default App;
