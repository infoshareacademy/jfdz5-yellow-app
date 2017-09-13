import React from 'react'
import './Footer.css'
import {Col} from 'react-bootstrap'
import FontAwesome from 'react-fontawesome'


export default class Footer extends React.Component {
    render() {
        return (
            <div>
                <footer className="footer">

                    <Col xs={6} md={3}>
                        <h6>2017 © Grupa Yellow</h6>
                    </Col>
                    <Col xs={6} md={9}>
                        <span className="social">
                            <FontAwesome className="fa fa-facebook fa-2x"/>
                            </span>
                        <span className="social">
                            <FontAwesome className="fa fa-instagram fa-2x"/>
                        </span>
                        <span className="social">
                            <FontAwesome className="fa fa-envelope fa-2x"/>
                        </span>
                    </Col>
                    </footer>
            </div>
        )
    }
}
