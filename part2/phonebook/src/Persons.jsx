import { deletePersons } from "./services/Persons";

const Persons = ({
  persons,
  shownFilter,
  handleRender,
  handleNotification,
  setNotifText,
}) => {
  const handleDelete = (id, name) => {
    if (confirm(`Delete ${name}?`)) {
      deletePersons(id)
        .then((res) => {
          setNotifText(`Deleted ${res.name} `);
          handleNotification("red");
          handleRender();
          console.log(res);
        })
        .catch(() => {
          setNotifText(
            `Information of ${name} has already been removed from the server`
          );
          handleNotification("red");
          handleRender();
        });
    }
  };

  const list = shownFilter
    ? persons
        .filter(({ name }) => name.toLocaleLowerCase().includes(shownFilter))
        .map(({ name, number, id }) => (
          <div key={id}>
            <div>
              {name} {number}{" "}
              <button onClick={() => handleDelete(id, name)}>delete</button>
            </div>
          </div>
        ))
    : persons.map(({ name, number, id }) => (
        <div key={id}>
          <div>
            {name} {number}{" "}
            <button onClick={() => handleDelete(id, name)}>delete</button>
          </div>
        </div>
      ));

  return <div>{list}</div>;
};

export default Persons;
