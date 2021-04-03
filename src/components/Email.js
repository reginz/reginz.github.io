import React, { Component } from 'react';
import './Email.css';
import Mailchimp from 'react-mailchimp-form';

class Email extends Component {
    render() {
        return (
          <div className="wrap-email">
            <h2>Join Our <span>Mailing List</span></h2>
            <p>We'll keep you informed about our products and development.</p>
            <Mailchimp
        action='https://aiforexistence.us1.list-manage.com/subscribe/post?u=dcbf0dfb733d51f91d9084b87&amp;id=5fe2970b32
         method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form'
        fields={[
          {
            name: 'EMAIL',
            placeholder: 'Email',
            type: 'email',
            required: true
          }
        ]}
        messages = {
            {
              sending: "Sending...",
              success: "Thank you for subscribing!",
              error: "An unexpected internal error has occurred. Please try again.",
              empty: "You must write an e-mail.",
              duplicate: "Too many subscribe attempts for this email address",
              button: "Join"
            }
          }
          // Add a personalized class
          className='email'
        
        />
        </div>
        );
    }
}

export default Email;