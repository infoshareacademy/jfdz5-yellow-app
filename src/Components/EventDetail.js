import React from 'react'


import events from '../../data/events.json'


const EventDetail = props => {
    const eventId = parseInt(props.match.params.eventId, 10)
    const event = events.find(
        event => event.id === eventId
)
    return (
        <div>
            <h1>{eventId} {event.name}</h1>
            <h2>{event.date}</h2>
            <h2>{event.place}</h2>
        </div>
    )
}



export default EventDetail


