import React, { Component } from 'react'

class Contacts extends Component {
  constructor(){
    super();
    this.state={
      contacts:[
        {
          id: 1,
          name: 'John Doe',
          email: 'jdoe@gmail.com',
          phone: '555-555-5555'
        },
        {
          id: 2,
          name: 'Karen Williams',
          email: 'karen@gmail.com',
          phone: '555-455-5555'
        },
        {
          id: 1,
          name: 'Henry Johnson',
          email: 'henry@gmail.com',
          phone: '555-545-5555'
        },
      ]
    }
  }
  render() {
    const {contacts} = this.state;

    return (
      <div>
        {
          contacts.map(contact=>(
          <h1>{contact.name}</h1>
          ))
        }
        
      </div>
    )
  }
}

export default Contacts;