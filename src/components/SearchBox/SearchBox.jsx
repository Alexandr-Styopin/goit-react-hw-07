import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";

export default function SearchBox() {
  const contacts = useSelector((state) => state.contactsSlice.items);
  const disptch = useDispatch();

  const handleFilterChange = (e) => {
    e.preventDefault();
    const value = e.target.value.trim().toLowerCase();
    disptch(changeFilter(value !== "" ? value : ""));
  };

  return (
    <label>
      <p>Find contacts by name</p>
      <input type="text" name="filter" onChange={handleFilterChange} />
    </label>
  );
}
