import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useId } from "react";
import * as Yup from "yup";
import { getContacts } from "../../redux/selectors";
import { addContact } from "../../redux/contactsOps";

const initialValues = {
  name: "",
  number: "",
};

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

export default function ContactForm() {
  const nameFieldId = useId();
  const numberFieldId = useId();

  const contacts = useSelector(getContacts);
  const disptch = useDispatch();

  const handleSubmitForm = (values, actions) => {
    const newContact = {
      name: values.name,
      number: values.number,
    };
    disptch(addContact(newContact));
    actions.resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmitForm}
        validationSchema={FeedbackSchema}
      >
        <Form>
          <label htmlFor={nameFieldId}>Name</label>
          <Field type="text" name="name" id={nameFieldId} />
          <ErrorMessage name="name" component="span" />

          <label htmlFor={numberFieldId}>Number</label>
          <Field type="number" name="number" id={numberFieldId}></Field>
          <ErrorMessage name="number" component="span" />

          <button type="submit">Add Contact</button>
        </Form>
      </Formik>
    </div>
  );
}
