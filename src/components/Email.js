import React, { Component } from 'react';
import './Email.css';
import Mailchimp from 'react-mailchimp-form';

class Email extends Component {
  render() {
    return (
      <div className="wrap-email">
        <h2>Join Our Mailing List</h2>
        <p>We'll keep you informed about our products and development.</p>
        <Mailchimp
        action='https://aiforexistence.us1.list-manage.com/subscribe/post?u=dcbf0dfb733d51f91d9084b87&amp;id=5fe2970b32'
        fields={[
          {
            name: 'EMAIL',
            placeholder: 'Email',
            type: 'email',
            required: true
          }
        ]}
        className="email"
        />
        </div>
    );
    
  }
}
export default Email;
