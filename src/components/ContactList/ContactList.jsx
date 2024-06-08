import Contact from "./Contact/Contact";
import { getContacts, getFilter } from "../../redux/selectors";
import { useDispatch, useSelector } from "react-redux";
import fiterSlice from "../../redux/filtersSlice";

export default function ContactList() {
  const contacts = useSelector((state) => state.contactsSlice.items);
  const filter = useSelector((state) => state.filtersSlice.name);

  const filtredContacts = () => {
    return contacts.filter((contact) =>
      contact.name.toLocaleLowerCase().includes(filter)
    );
  };

  return (
    <div>
      <ul>
        {filtredContacts().map((contact) => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </ul>
    </div>
  );
}