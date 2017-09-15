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
                            <Link to={`/events/${event.id}`}>
                                {
                                    event.name
                                }
                            </Link>
                        </td>
                        <td>
                            {
                                event.data
                            } | {
                                event.time
                        }
                        </td>
                        <td>
                            {
                                event.place
                            }
                        </td>
                        <td>
                            <span className="favs"><FontAwesome className="fa fa-heart-o" /></span>
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
