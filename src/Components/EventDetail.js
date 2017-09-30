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




const EventDetail = props => {
    const eventId = props.event.id
    const event = props.event


        return (

            <div className="eventdetail">
            <span className="social">
                    <Span className="favs"

                          active={!!props.favEvents[eventId]}
                          onClick={
                              () => firebase.database().ref(
                                  '/favorites/' + firebase.auth().currentUser.uid + '/' + eventId
                              ).set(props.favEvents[eventId] ? null : event)
                          }
                    >                            {props.favEvents[eventId] ?
                        <FontAwesome className="fa fa-heart"/> :
                        <FontAwesome className="fa fa-heart-o"/>
                    }

                        </Span>
                &nbsp;|&nbsp;
                <FontAwesome className="fa fa-facebook"/>
            </span>
                <h1>{eventId}{event.name}</h1>
                <h2>{event.data}&nbsp;|&nbsp;{event.time}</h2>
                <h2>{event.place}</h2>
                <hr/>
                <div>more info......</div>
            </div>

        )
    }




export default connect(
    state => ({
        favEvents: state.favs.events
    })
)(EventDetail)

