import React from 'react'
import firebase from 'firebase'

import { Button } from "react-bootstrap"

import './LogInForm.css'
import FontAwesome from 'react-fontawesome'

const ButtonForm = {
    margin: '5px',
};

    class LogInForm extends React.Component {

    state = {
        email: '',
        password: ''
      }

  handleChange = event => this.setState({
        [event.target.name]: event.target.value
  })

      handleSubmit = event => {
        event.preventDefault()
          firebase.auth().signInWithEmailAndPassword(
                this.state.email,
                this.state.password
                 )
      }


            render() {
              return (
                  <form onSubmit={this.handleSubmit} className="loginform">
                      <h1><FontAwesome name="sign-in" size="2x" />
                          logowanie</h1>
                      <div>
                          <label htmlFor="email">Email</label>
                          <br/>
                          <input
                              className="login"
                              type="text"
                              id="formControlsEmail"
                              name="email"
                              onChange={this.handleChange}
                          />
                      </div>
                      <div>
                          <label htmlFor="password">hasło</label>
                          <br/>
                          <input
                              className="login"
                              type="password"
                              id="formControlsPassword"
                              name="password"
                              onChange={this.handleChange}
                          />
                      </div>
                      <div>
                          <Button type="submit" style={ButtonForm} bsStyle="info">
                              OK&nbsp;&nbsp;&nbsp;
                              <FontAwesome name="check-square-o" />
                          </Button>
                      </div>
                  </form>
              )
          }
      }

export default LogInForm
