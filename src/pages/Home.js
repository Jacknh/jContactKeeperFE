import React, {useEffect} from "react";
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {getMe} from '../redux/actions'
import Contacts from "../components/Contacts";
import ContactForm from '../components/ContactForm'

function Home({getMe, user}) {

  useEffect(() => {
    getMe();
    //eslint-disable-next-line
  }, [])

  if (!user) {
    return <p style={{textAlign: 'center'}}>Please login or register first!</p>
  }
  return (
    <div className="grid-2">
      <div>
        <ContactForm />
      </div>
      <div>
        <Contacts />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
  };
};

const mapDispatchToProps = dispatch => bindActionCreators({getMe}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Home);
