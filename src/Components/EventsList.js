import React from 'react'
import { Table } from 'react-bootstrap'
import './EventsList.css'
import EventListItem from './EventListItem'
import moment from 'moment'


const EventsList = props => {



  const events = props.events.map(
    item => ({
      ...item,
      date: moment(item.data + ' ' + item.time)
    })
  ).filter(
    event => event.date.isAfter(moment())
  ).sort(
    (a, b) => a.date.isBefore(b.date) ? -1 : (a.date.isAfter(b.date) ? 1 : 0)
  )

  return (
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
        events.map(
          event => (
            <EventListItem key={event.id} event={event}/>
          )
        )
      }
      </tbody>
    </Table>
  )
}


export default EventsList
