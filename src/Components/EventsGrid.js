import React from 'react'
import { Thumbnail, Button } from 'react-bootstrap'

import './EventsGrid.css'

const EventsGrid = props => (
    <div className="eventsgrid">
        {
            props.events.map(
                event => (
                    <div className="eventsgrid_cell" key={event.id}>
                        <h2>{event.name}</h2>
                        <h3>{event.data} | {event.time}</h3>
                        <h3>{event.place}</h3>
                        <p>info</p>
                    </div>
                )
            )
        }
    </div>
)

export default EventsGrid