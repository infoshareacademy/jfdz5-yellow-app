import React from 'react'



import EventsList from './EventsList'
import EventsGrid from './EventsGrid'
import events from '../data/events.json'

import './EventsView.css'

const EventsView = () => (
    <div className="eventsview">
        <h1>najbliższe imprezy</h1>
        <div className="importedevents">
        <EventsList events={events}/>
            <EventsGrid events={events}/>
        </div>
    </div>
)


export default EventsView
