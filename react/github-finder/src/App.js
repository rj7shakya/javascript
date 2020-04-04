import React, { Component } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar'
import Users from './components/users/Users'
import Search from './components/users/Search'
import axios from 'axios'

class App extends Component {
  state = {
    users: [],
    loading: false
  }


  // //Search github users
  searchUsers = async (text) => {
    this.setState({ loading: true })
    const res = await axios.get(`https://api.github.com/search/users?q=${text}`)
    // &client_id=${process.env.REACT_APP_GITHUB_ID}&client_secret=${process.env.REACT_APP_GITHUB_SECRET}
    console.log('adsa', res.data)
    this.setState({ users: res.data.items, loading: false })
    console.log(text)
  }

  clearUsers = () => {
    console.log('Clicked')
    // this.setState({ users: [], loading: false })
  }

  render() {
    return (
      <nav className='App' >
        <Navbar />
        <div className="container">
          <Search searchUsers={this.searchUsers} clearUsers={this.clearUsers} />
          <Users loading={this.state.loading} users={this.state.users} />

        </div>
      </nav>
    );
  }
}

export default App;
