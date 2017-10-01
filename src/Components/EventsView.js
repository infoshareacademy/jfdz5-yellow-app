import React from 'react'
import { Button } from 'react-bootstrap'

import events from '../data/events.json'

import EventsList from './EventsList'
import EventsGrid from './EventsGrid'
import FilterableEventsGrid from './FilterableEventsGrid'
import FilterableEventsList from './FilterableEventsList'

import FontAwesome from 'react-fontawesome'
import './EventsView.css'

const toggleView = {
    margin: '5px',
    borderRadius: '40px'
}

const buttonView = {
    height: '30px',
    width: '30px',
    margin: '5px',
    borderRadius: '40px',
    padding: '0'
}



class EventsView extends React.Component {
    state = {
        showGrid: false
    }

    handleGridToggleClick = () => this.setState({
        showGrid: !this.state.showGrid
    })



    render() {

        return (
            <div className="eventsview">
                <h1>najbliższe imprezy</h1>
                                <div className="importedevents">
                    <Button style={toggleView} bsStyle="info"
                    onClick={this.handleGridToggleClick}
                    active={this.state.showGrid}>
                        {this.state.showGrid ? <FontAwesome name="list"/>
                            :
                            <FontAwesome name="table"/>}
                    </Button>
                    {
                        this.state.showGrid ?
                            <FilterableEventsGrid eventsToFilter={events}/>
                            :
                            <FilterableEventsList eventsToFilter={events}/>
                    }
                </div>

            </div>
        )

    }
}



export default EventsView
