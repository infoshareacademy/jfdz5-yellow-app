import React from 'react'



import EventsList from './EventsList'
import events from '../data/events.json'

import './EventsView.css'

const EventsView = () => (
    <div className="eventsview">
        <h1>nadchodzące imprezy</h1>
        <div className="importedevents">
        <EventsList events={events}/>
        </div>
    </div>
)


export default EventsView
