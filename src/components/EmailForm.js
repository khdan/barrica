import React, { Component } from 'react';

export class EmailForm extends Component {
  constructor() {
    super();
    this.state = { message: '' };
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    e.stopPropagation();
    this.setState({ message: 'Thank you!' });
    setTimeout(() => {
      this.setState({ message: 'Received' });
    }, 1000);
  }

  render() {
    const { message } = this.state;
    return (
      <form name="contact form" id="signup-form" onSubmit={this.onSubmit} method="post"  data-netlify="true">
      <input type="hidden" name="form-name" value="Contact Form" />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email Address"
        />
        <input type="submit" value="Sign Up" />
        <span className={`${message ? 'visible success' : ''} message`}>
          {message}
        </span>
      </form>
    );
  }
}

export default EmailForm;
