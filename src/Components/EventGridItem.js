import React from 'react'
import FontAwesome from 'react-fontawesome'
import {Button, Modal} from 'react-bootstrap'
import EventDetail from "./EventDetail";
import styled from 'styled-components'
import { connect } from 'react-redux'
import firebase from 'firebase'


const closeButton = {
    height: '30px',
    width: '30px',
    margin: '5px',
    borderRadius: '40px',
    padding: '0'
}

const Span = styled.span`
    cursor: pointer;
 &:hover {
 color: #42B5D7;
 }`

const EventId = {
  display: 'none'
}


class EventGridItem extends React.Component {

    state = {
        showDetails: false
    }

    handleOpenClick = () => this.setState({showDetails: true})

    close = () => this.setState({showDetails: false})

    render() {
        const eventId = this.props.event.id
        const event = this.props.event

        return (
                                        <div className="eventsgrid_cell" key={event.id}>
                                <h2>{event.name}</h2>
                                <h3>{event.data}&nbsp;|&nbsp;{event.time}</h3>
                                <h3>{event.place}</h3>
                                            <h4>{event.adres}</h4>
                                            <h4>{event.tickets}</h4>
                                          <span style={EventId}>{event.genre}</span>
                                            <Modal show={this.state.showDetails} onHide={this.close}>
                                                <Button onClick={this.close} style={closeButton} bsStyle="info">
                                                    <FontAwesome className="fa fa-times"/>
                                                </Button>
                                                <EventDetail event={event}/>
                                            </Modal>

                                            <Span className="favs" onClick={this.handleOpenClick}>
                        <FontAwesome className="fa fa-info"/></Span>
                                    &nbsp;|&nbsp;
                                            <Span className="favs"

                                                  active={!!this.props.favEvents[eventId]}
                                                  onClick={
                                                    () => {delete event.date
                                                      firebase.database().ref(
                                                        '/favorites/' + firebase.auth().currentUser.uid + '/' + eventId
                                                      ).set(this.props.favEvents[eventId] ? null : event)
                                                    }}
                                            >                            {this.props.favEvents[eventId] ?
                                              <FontAwesome name="heart"/> :
                                              <FontAwesome name="heart-o"/>
                                            }

                        </Span>
                                    &nbsp;|&nbsp;
                                          <Span className="favs">
                                          { event.link ? <a href={event.link}><FontAwesome className="fa fa-facebook"/></a> : null }
                                          </Span>
                                        </div>
                        )

}
}

export default connect(
    state => ({
        favEvents: state.favs.events
    })
)(EventGridItem)