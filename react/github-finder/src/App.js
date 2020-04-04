import React, { Fragment, Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Navbar from './components/layout/Navbar'
import Users from './components/users/Users'
import User from './components/users/User'
import Search from './components/users/Search'
import Alert from './components/layout/Alert'
import About from './components/pages/About'
import axios from 'axios'

class App extends Component {
  state = {
    users: [],
    user: {},
    repos:[],
    loading: false,
    alert: null
  }


  // //Search github users
  searchUsers = async (text) => {
    this.setState({ loading: true })
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_ID}&client_secret=${process.env.REACT_APP_GITHUB_SECRET}`)
    this.setState({ users: res.data.items, loading: false })
    // console.log(text)
  }

  //Get user repos
  getUserRepos = async (username) => {
    this.setState({ loading: true })
    const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_ID}&client_secret=${process.env.REACT_APP_GITHUB_SECRET}`)
    this.setState({ repos: res.data, loading: false })
    // console.log(text)
  }

  //Get Single github user
  getUser = async username => {
    this.setState({ loading: true })
    const res = await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_ID}&client_secret=${process.env.REACT_APP_GITHUB_SECRET}`)
    this.setState({ user: res.data, loading: false })

  }

  // clear users from state
  clearUsers = () => {
    this.setState({ users: [], loading: false })
  }

  // set alert
  setAlert = (msg, type) => {
    this.setState({ alert: { msg, type } })
    setTimeout(() => {
      this.setState({ alert: null })
    }, 3000)
  }

  render() {
    const { users, user,repos, loading } = this.state;

    return (
      <Router>
        <div className='App' >
          <Navbar />
          <div className="container">
            <Alert alert={this.state.alert} />
            <Switch>
              <Route exact path='/' render={props => (
                <Fragment>
                  <Search
                    searchUsers={this.searchUsers}
                    clearUsers={this.clearUsers}
                    setAlert={this.setAlert}
                    showClear={users.length > 0 ? true : false} />

                  <Users
                    loading={loading}
                    users={users} />

                </Fragment>
              )} />
              <Route exact path='/about' component={About} />
              <Route exact path='/user/:login' render={props => (
                <User {...props}
                  getUser={this.getUser}
                  getUserRepos={this.getUserRepos}
                  user={user}
                  repos= {repos}
                  loading={loading} />
              )} />
            </Switch>


          </div>
        </div>
      </Router>
    );
  }
}

export default App;
