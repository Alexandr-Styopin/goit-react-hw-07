import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";
import { getContacts } from "../../redux/selectors";

export default function SearchBox() {
  const contacts = useSelector(getContacts);
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
