import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Col, Row } from 'react-bootstrap'
import LogInForm from './LogInForm'
import RegistrationForm from './RegistrationForm'
import Footer from './Footer'
import LogoImg from './img/logo.png'
import './Auth.css'



const Forms = {
    textAlign: "center"
};

const menuLogo = {
    margin: '0',
    maxHeight: '50px'
};



    const Auth = ({ user, children }) => (
  <div>
            {
          user === null ?
              <div style={Forms}>
                  <Row>
                      <Col md={6}>
                          <LogInForm />
                      </Col>
                      <Col md={6}>
                          <RegistrationForm />
                      </Col>
                  </Row>

                      <Footer/>
              </div>

              :
              children
      }


  </div>
)

export default withRouter(connect(
      state => ({
    user: state.auth.user
  })
)(Auth))