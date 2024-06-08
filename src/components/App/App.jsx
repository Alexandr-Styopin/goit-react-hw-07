import React, { Component } from "react";
import { useState, useEffect } from "react";

import { nanoid } from "nanoid";
import css from "./App.module.css";

import contactsSlice from "../../redux/contactsSlice";

import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import { useDispatch, useSelector } from "react-redux";

const initialState = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

function App() {
  // useEffect(() => {
  //   const savedContacts = JSON.parse(localStorage.getItem("saveContacts"));
  //   if (savedContacts && savedContacts.length > 0) {
  //     setContacts(savedContacts);
  //   } else {
  //     setContacts(initialState);
  //     localStorage.setItem("saveContacts", JSON.stringify(initialState));
  //   }
  // }, []);

  // const saveContactsToLocalStorage = (contacts) => {
  //   localStorage.setItem("saveContacts", JSON.stringify(contacts));
  // };

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
