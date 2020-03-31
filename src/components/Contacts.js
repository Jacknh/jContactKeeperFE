import React, {Fragment} from "react";
import { connect } from "react-redux";
import ContactItem from './ContactItem'

const Contacts = ({ contacts }) => {
  return (
    <Fragment>
      {contacts.map(contact => {
        return <ContactItem contact={contact} key={contact.id} />;
      })}
    </Fragment>
  );
};

const mapStateToProps = state => {
  return {
    contacts: state.contacts.contacts
  };
};

export default connect(mapStateToProps)(Contacts);
