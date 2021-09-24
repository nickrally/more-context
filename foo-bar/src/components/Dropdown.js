const Dropdown = ({ options, onOptionChange }) => {
  return (
    <>
      <label htmlFor="dropdown1">Select:</label>
      <select id="dropdown1" onChange={onOptionChange}>
        {options.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </>
  );
};

export default Dropdown;
