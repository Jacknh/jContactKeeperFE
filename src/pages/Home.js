import React from "react";
import Contacts from "../components/Contacts";
import ContactForm from '../components/ContactForm'

function Home() {
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

export default Home;
