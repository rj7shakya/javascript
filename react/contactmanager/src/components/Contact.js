import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Contact extends Component {
  static propTypes = {
      name : PropTypes.string.isRequired,
      email : PropTypes.string.isRequired,
      phone : PropTypes.string.isRequired,
    }
    render() {
    
    const {name,email,phone} = this.props;
    return (
      <div>
        <h4>{name}</h4>
        <ul>
          <li>Email : {email}</li>
          <li>Phone : {phone}</li>
        </ul>
      </div>
    )
  }
}

// Contact.propTypes = {
//   name : PropTypes.string.isRequired,
//   email : PropTypes.string.isRequired,
//   phone : PropTypes.string.isRequired,
// }

export default Contact;