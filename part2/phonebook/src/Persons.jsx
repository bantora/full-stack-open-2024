import { deletePersons } from "./services/Persons";

const Persons = ({ persons, shownFilter, handleRender }) => {
  const handleDelete = (id, name) => {
    if (confirm(`Delete ${name}?`)) {
      deletePersons(id).then((res) => {
        handleRender();
        console.log(res);
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
