import React from 'react'
import { Link } from 'react-router-dom'
import { Table } from 'react-bootstrap'
import FontAwesome from 'react-fontawesome'
import './EventsList.css'

const EventsList = props => (
    <Table className="eventslist">
        <thead>
        <tr>
            <th>co</th>
            <th>kiedy</th>
            <th>gdzie</th>
            <th></th>
        </tr>
        </thead>
        <tbody>

        {
            props.events.map(
                event => (
                    <tr key={event.id}>
                        <td>
                            {event.name}
                        </td>
                        <td>
                            {event.data}
                            &nbsp;|&nbsp;
                            {event.time}
                        </td>
                        <td>
                            {event.place}
                        </td>
                        <td>
                            <Link to={`/events/${event.id}`}>
                            <span className="favs"><FontAwesome className="fa fa-info" /></span>
                            </Link>
                            &nbsp;|&nbsp;
                            <span className="favs"><FontAwesome className="fa fa-heart-o" /></span>
                            &nbsp;|&nbsp;
                            <span className="favs"><FontAwesome className="fa fa-facebook"/></span>
                        </td>
                    </tr>
                )
            )
        }
        </tbody>
    </Table>
)

export default EventsList
