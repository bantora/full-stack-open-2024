import { useEffect, useState } from "react";

import { getPersons, postPersons, putPersons } from "./services/Persons";

import Notification from "./Notification";
import Filter from "./Filter ";
import PersonForm from "./PersonForm";
import Persons from "./Persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [number, setNumber] = useState("");
  const [shownFilter, setShownFilter] = useState("");
  const [triggerRender, setTriggerRender] = useState(false);
  const [notifText, setNotifText] = useState("");
  const [notifStyle, setNotifStyle] = useState({
    color: "green",
    visibility: "hidden",
  });

  const handleRender = () => {
    setTriggerRender(!triggerRender);
  };

  const handleControlled = (e, setter) => {
    setter(e.target.value);
  };

  const handleNotification = (color) => {
    setNotifStyle({ color, visibility: "visible" });

    setTimeout(() => setNotifStyle({ color, visibility: "hidden" }), 5000);
  };

  const handleForm = (e) => {
    e.preventDefault();

    const checkPhonebook = persons.find(({ name }) => name === newName);

    if (!checkPhonebook)
      postPersons({ name: newName, number }).then((res) => {
        setNewName("");
        setNumber("");
        handleNotification("green");
        handleRender();
        setNotifText(`Added ${res.name}`);
        console.log(res);
      });

    console.log(!checkPhonebook);

    if (
      checkPhonebook &&
      confirm(
        `${newName} is already added to phonebook, replace the old number with a new one?`
      )
    )
      putPersons({ ...checkPhonebook, number }).then((res) => {
        console.log(res);
        handleNotification("green");
        handleRender();
      });
  };

  useEffect(() => {
    getPersons().then((res) => setPersons(res));
  }, [triggerRender]);

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification notifText={notifText} {...notifStyle} />
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

      <Persons
        persons={persons}
        shownFilter={shownFilter}
        handleRender={handleRender}
        handleNotification={handleNotification}
        setNotifText={setNotifText}
      />
    </div>
  );
};

export default App;
