import React from 'react'
import { Link } from 'react-router-dom'
import firebase from 'firebase'

import './MainMenu.css'
import LogoImg from './img/logo.png'

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
   //noinspection JSAnnotator
<div>
        <Navbar fixedTop>
            <Navbar.Header>
                <Navbar.Brand>
                    <Link to="/"><img src={LogoImg} style={menuLogo} alt="logo"/></Link>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav style={rightMenu}>
                    <Link to="/calendar">
                        <Button style={ButtonMenu} bsStyle="info">
                       <FontAwesome className="fa fa-calendar"/>
                        </Button>
                    </Link>
                    <Link to="/favs">
                        <Button style={ButtonMenu} bsStyle="info">
                            <FontAwesome className="fa fa-heart"/>
                        </Button>
                    </Link>
                        <Button onClick={() => firebase.auth().signOut()} style={ButtonMenu} bsStyle="info">
                            <FontAwesome className="fa fa-sign-out"/>
                        </Button>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </div>
)

export default MainMenu
