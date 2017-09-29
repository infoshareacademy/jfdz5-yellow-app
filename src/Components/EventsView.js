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
                <div>
                    <h2>go!&nbsp;&nbsp;<FontAwesome name="arrow-right"/>
                        &nbsp;&nbsp;
                        <Button style={buttonView} bsStyle="info">
                            ALL
                        </Button>
                    <Button style={buttonView} bsStyle="info">
                        <FontAwesome name="music"/>
                    </Button>
                    <Button style={buttonView} bsStyle="info">
                        <FontAwesome name="film"/>
                    </Button>
                    <Button style={buttonView} bsStyle="info">
                        <FontAwesome name="coffee"/>
                    </Button>
                    <Button style={buttonView} bsStyle="info">
                        <FontAwesome name="cutlery"/>
                    </Button>
                    <Button style={buttonView} bsStyle="info">
                        <FontAwesome name="glass"/>
                    </Button>
                    <Button style={buttonView} bsStyle="info">
                        <FontAwesome name="futbol-o"/>
                    </Button>
                    <Button style={buttonView} bsStyle="info">
                        <FontAwesome name="gamepad"/>
                    </Button>
                    <Button style={buttonView} bsStyle="info">
                        <FontAwesome name="university"/>
                    </Button>
                    </h2>
                </div>
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
                            <EventsGrid events={events}/>
                            :
                            <EventsList events={events}/>
                    }
                </div>

            </div>
        )

    }
}



export default EventsView
