import React, { useState } from "react";
import { connect } from "react-redux";
import {useHistory} from 'react-router-dom'
import { bindActionCreators } from "redux";
import { login, setNotification } from "../redux/actions";

const Login = ({ login, setNotification }) => {
  let history = useHistory();
  const [user, setUser] = useState({ email: "", password: "" });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await login({ ...user });
      await setNotification({
        msg: "Login succeeded! Automatically go to home page in a second...",
        type: "success",
      });
      history.push('/');
      
    } catch (error) {
      setNotification({ msg: "Login failed", type: "danger" });
    }
  };

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const { email, password } = user;

  return (
    <div className="form-container">
      <h1>
        Account <span className="text-primary">Login</span>
      </h1>
      <form onSubmit={onSubmit}>
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
            minLength="6"
            required
          />
        </div>
        <input
          type="submit"
          value="Login"
          className="btn btn-primary btn-block"
        />
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ login, setNotification }, dispatch);

export default connect(null, mapDispatchToProps)(Login);
