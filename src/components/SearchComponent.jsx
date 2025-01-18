// SearchInput.js
/* eslint-disable react/prop-types */
const SearchComponent = ({ value, onChange }) => {
  return (
    <input
      type="text"
      placeholder="Search for a product..."
      value={value}
      onChange={onChange}
      className="border p-2 flex-1 rounded-md"
    />
  );
};

export default SearchComponent;
