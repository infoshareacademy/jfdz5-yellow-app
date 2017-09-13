import React from 'react'
import { Link } from 'react-router-dom'
import { Table } from 'react-bootstrap'
import FontAwesome from 'react-fontawesome'

const EventsList = props => (
    <Table striped bordered condensed hover>
        <thead>
        <tr>
            <th>Data</th>
            <th>Nazwa</th>
            <th>Miejsce</th>
            <th>Ulubione</th>
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
                                event.date
                            }
                        </td>
                        <td>
                            {
                                event.place
                            }
                        </td>
                        <td>
                         <FontAwesome className="fa fa-heart-o" />
                        </td>
                    </tr>
                )
            )
        }
        </tbody>
    </Table>
)

export default EventsList
