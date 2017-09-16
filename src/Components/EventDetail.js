import React from 'react'


import events from '../data/events.json'

import FontAwesome from 'react-fontawesome'
import './EventDetail.css'

const EventId={
    display: 'none'
}


const EventDetail = props => {
    const eventId = parseInt(props.match.params.eventId, 10)
    const event = events.find(
        event => event.id === eventId
)
    return (
        <div className="eventdetail">
            <span style={EventId}>{eventId}</span>
            <span className="social">
                <FontAwesome className="fa fa-heart-o" />
                &nbsp;|&nbsp;
                <FontAwesome className="fa fa-facebook"/>
            </span>
            <h1>{event.name}</h1>
            <h2>{event.data}&nbsp;|&nbsp;{event.time}</h2>
            <h2>{event.place}</h2>
            <hr/>
            <div>more info......</div>
        </div>
    )
}



export default EventDetail


