import React from 'react'
import { Table } from 'react-bootstrap'
import './EventsList.css'
import EventListItem from './EventListItem'


const EventsList = props => {

  const filteredData = props.events.filter(event => {
    return new Date(event.data + ' ' + event.time) >= new Date();
 })

  const sortData = filteredData.sort((a, b) => {
    return (new Date (a.data + ' ' + a.time)).getTime() > (new Date (b.data + ' ' + b.time)).getTime()
  }
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
        sortData.map(
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
