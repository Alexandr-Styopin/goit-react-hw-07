import { nanoid } from "@reduxjs/toolkit";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";

import { addContact } from "../../redux/contactsSlice";

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

export default function ContactForm({ onFormSubmit }) {
  const nameFieldId = useId();
  const numberFieldId = useId();

  const contacts = useSelector((state) => state.contactsSlice.items);
  const disptch = useDispatch();

  const handleSubmitForm = (values, actions) => {
    disptch(addContact(values.name, values.number));
    // saveContactsToLocalStorage(newContacts);
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
