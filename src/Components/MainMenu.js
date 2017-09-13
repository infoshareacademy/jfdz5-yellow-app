import React from 'react'
import { Link } from 'react-router-dom'

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
                <Nav pullRight>
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
                    <Link to={'/signIn'}>
                        <Button style={ButtonMenu} bsStyle="info">
                            <FontAwesome className="fa fa-sign-out"/>
                        </Button>
                    </Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </div>
)

export default MainMenu