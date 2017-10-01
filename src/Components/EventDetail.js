import React from 'react'

import { connect } from 'react-redux'
import styled from 'styled-components'
import firebase from 'firebase'

import FontAwesome from 'react-fontawesome'
import './EventDetail.css'


const Span = styled.span`
    cursor: pointer;
 &:hover {
 color: #42B5D7;
 }`


const EventId = {
    display: 'none'
}

const EventDetail = props => {
    const eventId = props.event.id
    const event = props.event


        return (

            <div className="eventdetail">
                <span style={EventId}>{eventId}</span>
            <span className="social">
                    <Span className="favs"

                          active={!!props.favEvents[eventId]}
                          onClick={
                            () => {delete event.date
                              firebase.database().ref(
                                '/favorites/' + firebase.auth().currentUser.uid + '/' + eventId
                              ).set(props.favEvents[eventId] ? null : event)
                            }}
                    >                            {props.favEvents[eventId] ?
                      <FontAwesome name="heart"/> :
                      <FontAwesome name="heart-o"/>
                    }

                        </Span>
                &nbsp;|&nbsp;
              <Span className="favs">
                                          { event.link ? <a href={event.link}><FontAwesome className="fa fa-facebook"/></a> : null }
                                          </Span>
            </span>
                <h1>{event.name}</h1>
                <h2>{event.data}&nbsp;|&nbsp;{event.time}</h2>
                <h2>{event.place}</h2><h4>{event.adres}</h4>
                <h3>{event.tickets}</h3>
                <hr/>
                <div>{event.details}</div>
            </div>

        )
    }




export default connect(
    state => ({
        favEvents: state.favs.events
    })
)(EventDetail)

