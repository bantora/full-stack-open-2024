import { useState } from "react";

import Filter from "./Filter ";
import PersonForm from "./PersonForm";
import Persons from "./Persons";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [number, setNumber] = useState("");
  const [shownFilter, setShownFilter] = useState("");

  const list = shownFilter
    ? persons
        .filter(({ name }) => name.toLocaleLowerCase().includes(shownFilter))
        .map(({ name, number, id }) => (
          <div key={id}>
            <div>
              {name} {number}
            </div>
          </div>
        ))
    : persons.map(({ name, number, id }) => (
        <div key={id}>
          <div>
            {name} {number}
          </div>
        </div>
      ));

  const handleControlled = (e, setter) => {
    setter(e.target.value);
  };

  const handleForm = (e) => {
    e.preventDefault();

    const checkPhonebook = persons.find(({ name }) => name === newName);

    if (!checkPhonebook)
      setPersons([...persons, { name: newName, number: number }]);

    if (checkPhonebook) alert(`${newName} is already in the phonebook`);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter
        shownFilter={shownFilter}
        handleControlled={handleControlled}
        setShownFilter={setShownFilter}
      />

      <h3>add a new</h3>

      <PersonForm
        handleForm={handleForm}
        handleControlled={handleControlled}
        newName={newName}
        number={number}
        setNewName={setNewName}
        setNumber={setNumber}
      />

      <h3>Numbers</h3>

      <Persons list={list} />
    </div>
  );
};

export default App;
