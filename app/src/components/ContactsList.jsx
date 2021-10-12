import React, { useContext } from "react";
import PropTypes from "prop-types";
import { ContactsListWrapper } from "../styles/contacts-list-styling";
import { SettingsContext } from "../contexts/SettingsContext";
import Contact from "./Contact";

const ContactsList = (props) => {
  const { language, setLanguage, theme, setTheme } =
    useContext(SettingsContext);
  return (
    <ContactsListWrapper
      style={{
        backgroundColor: theme.contentComponentsColor,
        color: theme.contentTextColor,
      }}
      className="custom_box_shadow"
    >
      <h1>Kontakty</h1>
      <Contact></Contact>
      <Contact></Contact>
      <Contact></Contact>
      <Contact></Contact>
    </ContactsListWrapper>
  );
};

ContactsList.propTypes = {};

export default ContactsList;
