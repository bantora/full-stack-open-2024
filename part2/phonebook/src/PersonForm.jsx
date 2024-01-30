const PersonForm = ({
  handleForm,
  handleControlled,
  newName,
  number,
  setNewName,
  setNumber,
}) => {
  return (
    <form onSubmit={handleForm}>
      <div>
        name:{" "}
        <input
          value={newName}
          onChange={(e) => handleControlled(e, setNewName)}
        />
      </div>
      <div>
        number:{" "}
        <input
          value={number}
          onChange={(e) => handleControlled(e, setNumber)}
        />
      </div>
      <div>
        <button type='submit'>add</button>
      </div>
    </form>
  );
};

export default PersonForm;
