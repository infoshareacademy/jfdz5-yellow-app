import React from 'react'
import { Link } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
import firebase from 'firebase'

import './MainMenu.css'
import LogoImg from './img/logo.png'
import { LinkContainer } from 'react-router-bootstrap'
import {
    Navbar,
    Nav,
    NavItem,
    Button
} from 'react-bootstrap'
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
                        <NavItem>
                        <Button style={ButtonMenu} bsStyle="info">
                            ms
                        </Button>
                        </NavItem>
                    </LinkContainer>
                    <LinkContainer to="/calendar">
                        <NavItem>
                        <Button style={ButtonMenu} bsStyle="info">
                       <FontAwesome name="calendar"/>
                        </Button>
                        </NavItem>
                    </LinkContainer>
                    <LinkContainer to="/favorites">
                        <NavItem>
                        <Button style={ButtonMenu} bsStyle="info">
                            <FontAwesome name="heart"/>
                        </Button>
                        </NavItem>
                    </LinkContainer>
                    <NavItem>
                        <Button onClick={() => firebase.auth().signOut()} style={ButtonMenu} bsStyle="info">
                            <FontAwesome name="sign-out"/>
                        </Button>
                    </NavItem>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </div>
)

export default MainMenu
