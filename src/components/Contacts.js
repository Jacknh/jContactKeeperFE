import React, { Fragment } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import ContactItem from "./ContactItem";
import { setFilter } from "../redux/actions";
import { getFilteredContacts } from "../redux/selectors";

const Contacts = ({ contacts, setFilter }) => {
  return (
    <Fragment>
      <input
        type="text"
        placeholder="Filter Contacts"
        onChange={(e) => setFilter(e.target.value)}
      />
      <div style={{ overflowY: "auto", height: "75vh" }}>
        {contacts.map((contact) => {
          return <ContactItem contact={contact} key={contact.id} />;
        })}
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    contacts: getFilteredContacts(state),
  };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ setFilter }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
