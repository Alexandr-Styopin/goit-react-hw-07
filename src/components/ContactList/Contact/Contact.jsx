import { useDispatch } from "react-redux";
import { deleteContact } from "../../../redux/contactsSlice";

export default function Contact({ contact: { id, name, number }, onDelete }) {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(deleteContact(id));
  };

  return (
    <li>
      <p>{name}</p>
      <p>{number}</p>
      <button type="button" onClick={handleRemove}>
        Delete
      </button>
    </li>
  );
}
