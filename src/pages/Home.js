import React, {useEffect} from "react";
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {getMe} from '../redux/actions'
import Contacts from "../components/Contacts";
import ContactForm from '../components/ContactForm'

function Home({getMe}) {

  useEffect(() => {
    getMe();

    //eslint-disable-next-line
  }, [])

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

const mapDispatchToProps = dispatch => bindActionCreators({getMe}, dispatch)

export default connect(null, mapDispatchToProps)(Home);
