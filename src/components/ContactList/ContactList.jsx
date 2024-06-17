import Contact from "./Contact/Contact";
import { useSelector } from "react-redux";
import { getIsLoading, getError } from "../../redux/selectors";
import { getFilteredContacts } from "../../redux/contactsSlice";
import Loader from "../Loader/Loader";

export default function ContactList() {
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const filteredContacts = useSelector(getFilteredContacts);

  return (
    <div>
      <ul>
        {isLoading && !error && <Loader />}
        {filteredContacts.map((contact) => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </ul>
    </div>
  );
}
