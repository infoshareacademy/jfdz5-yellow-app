import React from 'react'
import { Table } from 'react-bootstrap'
import './EventsList.css'
import EventListItem from './EventListItem'


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
                    <EventListItem key={event.id} event={event}/>
                )
            )
        }
        </tbody>
    </Table>
)

export default EventsList
