import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { addContact } from "../redux/actions";

const ContactForm = ({ addContact }) => {
  const onSubmit = e => {
    e.preventDefault();
    addContact({
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      type: e.target.type.value
    });
  };

  return (
    <form onSubmit={onSubmit}>
      <h2>Contact Form</h2>
      <input type="text" placeholder="Name" name="name" id="name" />
      <input type="email" placeholder="Email" name="email" id="email" />
      <input type="text" placeholder="Phone" name="phone" />
      <h5>Contact Type</h5>
      <input type="radio" name="type" defaultChecked value="personal" />{" "}
      Personal <input type="radio" name="type" value="professional" />{" "}
      Professional
      <div>
        <input
          type="submit"
          value="Add Contact"
          className="btn btn-primary btn-block"
        />
      </div>
    </form>
  );
};

const mapDispatchToProps = dispatch => bindActionCreators({ addContact }, dispatch);

export default connect(null, mapDispatchToProps)(ContactForm);
