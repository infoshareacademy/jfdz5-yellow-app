import React from 'react'
import { Link } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
import {
  Navbar,
  Nav,
  NavItem,
  Button
} from 'react-bootstrap'
import firebase from 'firebase'

import './MainMenu.css'
import LogoImg from './img/logo.png'




import FontAwesome from 'react-fontawesome'


const rightMenu = {
    float: 'right',
    marginRight: '10%'
}

const menuLogo = {
    margin: '0',
    maxHeight: '50px'
};

const ButtonMenu = {
    margin: '5px',
    borderRadius: '40px'
};


const MainMenu = () => (

<div>
        <Navbar fixedTop>
            <Navbar.Header>
                <Navbar.Brand>
                    <Link to="/"><img src={LogoImg} style={menuLogo} alt="logo"/></Link>
                </Navbar.Brand>
                <Navbar.Toggle/>
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav style={rightMenu}>
                    <LinkContainer to="/messages">
<Nav>
                        <Button style={ButtonMenu} bsStyle="info">
                            ms
                        </Button>
</Nav>
                    </LinkContainer>
                    <LinkContainer to="/calendar">
                        <Nav>
                        <Button style={ButtonMenu} bsStyle="info">
                       <FontAwesome name="calendar"/>
                        </Button>
                        </Nav>
                    </LinkContainer>
                    <LinkContainer to="/favorites">
                        <Nav>
                        <Button style={ButtonMenu} bsStyle="info">
                            <FontAwesome name="heart"/>
                        </Button>
                        </Nav>
                    </LinkContainer>
                    <Nav>
                        <Button onClick={() => firebase.auth().signOut()} style={ButtonMenu} bsStyle="info">
                            <FontAwesome name="sign-out"/>
                        </Button>
                    </Nav>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </div>
)

export default MainMenu
