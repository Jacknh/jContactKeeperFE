import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import ContactItem from "./ContactItem";
import { setFilter, getContacts } from "../redux/actions";
import { getFilteredContacts } from "../redux/selectors";
import loadinggif from "../assets/loading.gif";

const Contacts = ({ contacts, setFilter, getContacts, user, loading }) => {
  useEffect(() => {
    getContacts(user);
    //eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      <input
        type="text"
        placeholder="Filter Contacts"
        onChange={(e) => setFilter(e.target.value)}
      />
      {loading ? (
        <div style={{ textAlign: "center", paddingTop: 50 }}>
          <img style={{ width: 100 }} src={loadinggif} alt="loading" />
        </div>
      ) : contacts.length === 0 ? (
        <p style={{ textAlign: "center" }}>No Contacts</p>
      ) : (
        <div style={{ overflowY: "auto", height: "75vh" }}>
          {contacts.map((contact) => {
            return <ContactItem contact={contact} key={contact._id} />;
          })}
        </div>
      )}
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    contacts: getFilteredContacts(state),
    user: state.auth.user,
    loading: state.auth.loading,
  };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ setFilter, getContacts }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
