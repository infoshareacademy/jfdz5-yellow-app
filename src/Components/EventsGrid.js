import React from 'react'
import { Link } from 'react-router-dom'
import FontAwesome from 'react-fontawesome'
import './EventsGrid.css'

const EventsGrid = (props) => (
    <div className="eventsgrid">
        {
            props.events.map(
                event => (
                    <div className="eventsgrid_cell" key={event.id}>
                        <h2>{event.name}</h2>
                        <h3>{event.data}&nbsp;|&nbsp;{event.time}</h3>
                        <h3>{event.place}</h3>
                        <span className="social">
                            <Link to={`/events/${event.id}`}>
                            <span className="favs"><FontAwesome className="fa fa-info" /></span>
                            </Link>
                            &nbsp;|&nbsp;
                            <FontAwesome className="fa fa-heart-o" />
                            &nbsp;|&nbsp;
                            <FontAwesome className="fa fa-facebook"/>
                        </span>
                    </div>
                )
            )
        }
    </div>
)

export default EventsGrid