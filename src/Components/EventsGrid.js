import React from 'react'
import moment from 'moment'
// import { Link } from 'react-router-dom'
// import FontAwesome from 'react-fontawesome'
import './EventsGrid.css'
import EventGridItem from './EventGridItem'

const EventsGrid = props => {


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
      <div className="eventsgrid">
        {
          events.map(
            event => (
              <EventGridItem key={event.id} event={event}/>
            )
          )
        }
      </div>
    )
  }


export default EventsGrid