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
                            <FontAwesome name="facebook" size="2x"/>
                            </span>
                        <span className="social">
                            <FontAwesome name="instagram" size="2x"/>
                        </span>
                        <span className="social">
                            <FontAwesome name="envelope" size="2x"/>
                        </span>
                    </Col>
                    </footer>
            </div>
        )
    }
}
