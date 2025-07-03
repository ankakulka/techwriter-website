import React from 'react';
import Layout from '@theme/Layout';
import styles from './Contact.module.css';


function Contact() {
  return (
    <Layout title="Contact Us">
      <div className="container margin-vert--lg">
        <h1>Contact Us</h1>
        <form action="https://fabform.io/f/QuwoIpv" method="POST">
          <div>
            <label htmlFor="name">Name:</label><br />
            <input type="text" id="name" name="name" required /><br />
          </div>
          <div>
            <label htmlFor="email">Email:</label><br />
            <input type="email" id="email" name="email" required /><br />
          </div>
          <div>
            <label htmlFor="message">Message:</label><br />
            <textarea id="message" name="message" required></textarea><br />
          </div>
          <div>
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    </Layout>
  );
}

export default Contact;
