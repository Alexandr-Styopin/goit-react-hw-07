import React, { Component, useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchContactcs } from "../../redux/contactsOps";

import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContactcs());
  }, [dispatch]);

  return (
    <div>
      <h1>Phone book</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}

export default App;
