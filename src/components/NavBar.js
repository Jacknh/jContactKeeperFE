import React, {Fragment} from 'react'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {logout} from '../redux/actions'

function NavBar({user, logout}) {

  const onLogout = () => {
    logout();
  }

  return (
    <div className="navbar bg-primary">
      <h1>
        <i className="fas fa-id-card-alt" /> Contact Keeper
      </h1>
      <ul>
        {user ? (
          <Fragment>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <a onClick={onLogout} href="#!">
                <i className="fas fa-sign-out-alt" />{" "}
                <span className="hide-sm">Logout</span>
              </a>
            </li>
          </Fragment>
        ) : (
          <Fragment>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </Fragment>
        )}
      </ul>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    user: state.auth.user
  }
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ logout }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
