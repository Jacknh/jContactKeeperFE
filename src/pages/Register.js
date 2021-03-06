import React, { useState } from "react";
import {useHistory} from 'react-router-dom'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { register, setNotification } from "../redux/actions";

const Register = ({ register, setNotification }) => {
  let history = useHistory();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = user;
    try {
      await register({ name, email, password });
      await setNotification({ msg: "Register succeeded! Automatically go to home page in a second...", type: "success" });
      history.push('/');
    } catch (error) {
      setNotification({ msg: "Register failed", type: "danger" });
    }
  };

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const { name, email, password, password2 } = user;

  return (
    <div className="form-container">
      <h1>
        Account <span className="text-primary">Register</span>
      </h1>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={onChange}
            required
            minLength="6"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password2">Confirm Password</label>
          <input
            type="password"
            id="password2"
            name="password2"
            value={password2}
            onChange={onChange}
            required
            minLength="6"
          />
        </div>
        <input
          type="submit"
          value="Register"
          className="btn btn-primary btn-block"
        />
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ register, setNotification }, dispatch);

export default connect(null, mapDispatchToProps)(Register);
