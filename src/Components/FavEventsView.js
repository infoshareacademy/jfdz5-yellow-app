import React from 'react'
import { Button } from 'react-bootstrap'

import events from '../data/events.json'

import EventsList from './EventsList'
import EventsGrid from './EventsGrid'

import FontAwesome from 'react-fontawesome'
import './EventsView.css'


const toggleView = {
    margin: '5px',
    borderRadius: '40px'
}

class FavEventsView extends React.Component {
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
                        {this.state.showGrid ? <FontAwesome className="fa fa-list"/>
                            :
                            <FontAwesome className="fa fa-table"/>}
                    </Button>
                    {
                        this.state.showGrid ?
                            <EventsGrid events={events}/>
                            :
                            <EventsList events={events}/>

                    }
                </div>
            </div>
        )

    }

}
export default FavEventsView