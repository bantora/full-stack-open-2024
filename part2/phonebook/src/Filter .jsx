const Filter = ({ shownFilter, setShownFilter, handleControlled }) => {
  return (
    <div>
      filter shown with{" "}
      <input
        value={shownFilter}
        onChange={(e) => handleControlled(e, setShownFilter)}
      />
    </div>
  );
};

export default Filter;
