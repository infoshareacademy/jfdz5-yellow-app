import React from 'react'
import { Link } from 'react-router-dom'
import { Table } from 'react-bootstrap'
import FontAwesome from 'react-fontawesome'


import events from '../data/events.json'

const EventsView = () => (
    <div className="EventsView">
        <h1>Wydarzenia</h1>
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
                events.map(
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
                                <FontAwesome className="fa fa-heart-o" />
                            </td>
                        </tr>
                    )
                )
            }
            </tbody>
        </Table>
    </div>
)


export default EventsView
