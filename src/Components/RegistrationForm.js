import React from 'react'
import firebase from 'firebase'

import {Button} from "react-bootstrap"

import './RegistrationForm.css'
import FontAwesome from 'react-fontawesome'

const ButtonForm = {
  margin: '5px',
};


class RegistrationForm extends React.Component {

  state = {
    email: '',
    password: ''
  }

  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  })

  handleSubmit = event => {
    event.preventDefault()

    firebase.auth().createUserWithEmailAndPassword(
      this.state.email,
      this.state.password
    )}

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="registrationform">
        <h1><FontAwesome name="user-plus" size="2x"/>
          nowe konto</h1>
         <div>
          <label htmlFor="email">email</label>
          <br/>
          <input
            className="signup"
            type="text"
            id="email"
            name="email"
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor="password">hasło</label>
          <br/>
          <input
            className="signup"
            type="password"
            id="password"
            name="password"
            onChange={this.handleChange}
          />
        </div>
        <div>
          <Button type="submit" style={ButtonForm} bsStyle="info">
            OK&nbsp;&nbsp;&nbsp;
            <FontAwesome name="check-square-o"/>
          </Button>

        </div>
      </form>
    )
  }
}

export default RegistrationForm
