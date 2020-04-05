import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { deleteContact, setCurrent } from "../redux/actions";

const ContactItem = ({ contact, deleteContact, current, setCurrent }) => {
  const { id, name, email, phone, type } = contact;

  const onEdit = () => {
    setCurrent(id);
  };

  const onDelete = () => {
    if (current === id) {
      alert('The current contact is being edited, you can not delete it now!');
      return;
    }
    deleteContact(id);
  };

  return (
    <div className="card bg-light">
      <h3 className="text-primary text-left">
        {name}
        <span
          style={{ float: "right" }}
          className={`badge ${
            type === "professional" ? "badge-success" : "badge-primary"
          }`}
        >
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </span>
      </h3>
      <ul className="list">
        {email && (
          <li>
            <i className="fas fa-envelope-open"></i> {email}
          </li>
        )}
        {phone && (
          <li>
            <i className="fas fa-phone"></i> {phone}
          </li>
        )}
      </ul>
      <p>
        <button className="btn btn-dark btn-sm" onClick={onEdit}>
          Edit
        </button>
        <button className="btn btn-danger btn-sm" onClick={onDelete}>
          Delete
        </button>
      </p>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    current: state.contacts.current
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ deleteContact, setCurrent }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ContactItem);
