import Contact from "./Contact/Contact";
import { getContacts, getFilters } from "../../redux/selectors";
import { useSelector } from "react-redux";

export default function ContactList() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilters);

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
