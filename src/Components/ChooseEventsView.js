import React from 'react'
import {
    Tab,
    Tabs
} from 'react-bootstrap'

import EventsList from './EventsList'
import EventsGrid from './EventsGrid'
import FontAwesome from 'react-fontawesome'
import './ChooseEventsView.css'


const ChooseEventsView = ({ events }) => (
    <Tabs defaultActiveKey={1} id='choose-events-views'>
        <Tab  eventKey={1}><FontAwesome className='fa fa-list'/>
                <EventsList events={events}/>
        </Tab>
        <Tab eventKey={2}><FontAwesome className='fa fa-table'/>
                <EventsGrid events={events}/>
        </Tab>
    </Tabs>
)

export default ChooseEventsView