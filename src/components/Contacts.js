import React from "react";
import { connect } from "react-redux";
import ContactItem from './ContactItem'

const Contacts = ({ contacts }) => {
  return (
    <div style={{overflowY: 'auto', height: '80vh'}}>
      {contacts.map(contact => {
        return <ContactItem contact={contact} key={contact.id} />;
      })}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    contacts: state.contacts.contacts
  };
};

export default connect(mapStateToProps)(Contacts);
