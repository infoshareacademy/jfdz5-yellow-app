import React from 'react'
// import { Link } from 'react-router-dom'
// import FontAwesome from 'react-fontawesome'
import './EventsGrid.css'
import EventGridItem from './EventGridItem'

class EventsGrid extends React.Component {

  render() {

    const filteredData = this.props.events.filter(event => {
      return new Date(event.data + ' ' + event.time) >= new Date();
    })

    const sortData = filteredData.sort((a, b) => {
        return (new Date(a.data + ' ' + a.time)).getTime() > (new Date(b.data + ' ' + b.time)).getTime()
      }
    )
    return (
      <div className="eventsgrid">
        {
          sortData.map(
            event => (
              <EventGridItem key={event.id} event={event}/>
            )
          )
        }
      </div>
    )
  }
}

export default EventsGrid