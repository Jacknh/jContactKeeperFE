import React, { useState, useEffect } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { addContact, updateContact, setCurrent } from "../redux/actions";
import { getCurrentContact } from "../redux/selectors";

const ContactForm = ({ addContact, current, currentContact, updateContact, setCurrent }) => {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    type: "personal",
  });

  useEffect(() => {
    if (current) {
      setContact(currentContact);
    }
    else {
      setContact({
        name: "",
        email: "",
        phone: "",
        type: "personal",
      });
    }
  }, [current, currentContact]);

  const { name, email, phone, type } = contact;

  const onSubmit = (e) => {
    e.preventDefault();
    if (current) {
      updateContact(current, contact);
    } else {
      addContact(contact);
    }
    setCurrent(null);
  };

  const onChange = (e) => {
    setContact({
      ...contact,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={onSubmit}>
      <h2>{current ? "Edit Contact" : "Add Contact"}</h2>
      <input
        type="text"
        placeholder="Name"
        name="name"
        value={name}
        onChange={onChange}
      />
      <input
        type="email"
        placeholder="Email"
        name="email"
        value={email}
        onChange={onChange}
      />
      <input
        type="text"
        placeholder="Phone"
        name="phone"
        value={phone}
        onChange={onChange}
      />
      <h5>Contact Type</h5>
      <input
        type="radio"
        name="type"
        checked={type === "personal"}
        value="personal"
        onChange={onChange}
      />{" "}
      Personal{" "}
      <input
        type="radio"
        name="type"
        checked={type === "professional"}
        value="professional"
        onChange={onChange}
      />{" "}
      Professional
      <div>
        <input
          type="submit"
          value={current ? "Update Contact" : "Add Contact"}
          className="btn btn-primary btn-block"
        />
      </div>
      {current && (
        <div>
          <button className="btn btn-light btn-block" onClick={() => setCurrent(null)}>
            Clear
          </button>
        </div>
      )}
    </form>
  );
};

const mapStateToProps = (state) => {
  const currentContact = getCurrentContact(state);
  const current = state.contacts.current;

  return { currentContact, current };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ addContact, updateContact, setCurrent }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
