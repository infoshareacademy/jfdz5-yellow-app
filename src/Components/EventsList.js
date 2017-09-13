import React from 'react'
import { Link } from 'react-router-dom'
import { Table } from 'react-bootstrap'
import FontAwesome from 'react-fontawesome'
import './EventsList.css'

const EventsList = props => (
    <Table className="eventslist">
        <thead>
        <tr>
            <th>Data</th>
            <th>Nazwa</th>
            <th>Miejsce</th>
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
                                    event.data
                                }
                            </Link>
                        </td>
                        <td>
                            {
                                event.name
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
