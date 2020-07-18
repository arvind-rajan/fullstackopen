import React, { useState, useEffect } from "react";
import PersonForm from "./components/PersonForm";
import Filter from "./components/Filter";
import Persons from "./components/Persons";

import axios from "axios";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:3001/persons").then((response) => {
      setPersons(response.data);
      setLoaded(true);
    });
  }, []);

  if (loaded === true) {
    var filterArray = persons.filter((p) =>
      p.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
    );
  }

  return loaded ? (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} setFilter={setFilter} />
      <h3>Add an entry</h3>
      <PersonForm
        newName={newName}
        newNumber={newNumber}
        persons={persons}
        setNewName={setNewName}
        setNewNumber={setNewNumber}
        setPersons={setPersons}
      />
      <h2>Numbers</h2>
      <Persons filteredArray={filterArray} />
    </div>
  ) : (
    <h1> Loading </h1>
  );
};

export default App;
