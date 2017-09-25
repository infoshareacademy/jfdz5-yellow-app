import React from 'react'

import { connect } from 'react-redux'
import firebase from 'firebase'

import FontAwesome from 'react-fontawesome'
import './EventDetail.css'

import events from '../data/events.json'

const EventId = {
    display: 'none'
}


const EventDetail = props => {
    const eventId = parseInt(props.match.params.eventId, 10)
    const event = events.find(
        event => event.id === eventId
    )

        return (

            <div className="eventdetail">
            <span className="social">
                   <button
                       active={!!props.favEvents[eventId]}
                       onClick={
                           () => firebase.database().ref(
                               '/favorites/' + firebase.auth().currentUser.uid + '/' + eventId
                           ).set(props.favEvents[eventId] ? null : true)
                       }
                   >Toggle fav</button>
                <FontAwesome className="fa fa-heart-o"/>
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

