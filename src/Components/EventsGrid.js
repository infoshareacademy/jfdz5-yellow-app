import React from 'react'
import { Link } from 'react-router-dom'
import FontAwesome from 'react-fontawesome'
import './EventsGrid.css'
import EventGridItem from './EventGridItem'

const EventsGrid = (props) => (
    <div className="eventsgrid">
        {
            props.events.map(
                event => (
                    <EventGridItem key={event.id} event={event}/>
                )
            )
        }
    </div>
)

export default EventsGrid