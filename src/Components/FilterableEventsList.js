import React from 'react'

import EventsList from './EventsList'

import { Button, ButtonGroup } from "react-bootstrap";
import FontAwesome from 'react-fontawesome'

const initialFiltersState = {
  showOnlyKoncert: false,
  showOnlyFilm: false,
  showOnlySpektakl: false,
  showOnlyWystawa: false,
  showOnlySport: false,
  showOnlyKulinaria: false,
}

const buttonView = {
  height: '30px',
  width: '30px',
  margin: '5px',
  borderRadius: '40px',
  padding: '0'
}

class FilterableEventsList extends React.Component {

  state = initialFiltersState


  handleFilterClick = filterName => {
    this.setState({
      ...initialFiltersState,
      [filterName]: true
    })
  }

  handleResetClick = ()  => {
    this.setState({
      ...initialFiltersState
    })
  }

  render() {

    let eventsToShow = this.props.eventsToFilter

    console.log('dupa', eventsToShow)
    if (this.state.showOnlyKoncert === true) {
      eventsToShow = eventsToShow.filter(
        event => event.genre === 'koncert')
    }

    if (this.state.showOnlyFilm === true) {
      eventsToShow = eventsToShow.filter(
        event => event.genre === 'film')
    }

    if (this.state.showOnlyWystawa === true) {
      eventsToShow = eventsToShow.filter(
        event => event.genre === 'wystawa'
      )
    }

    if (this.state.showOnlySpektakl === true) {
      eventsToShow = eventsToShow.filter(
        event => event.genre === 'spektakl')
    }

    if (this.state.showOnlySport === true) {
      eventsToShow = eventsToShow.filter(
        event => event.genre === 'sport')
    }

    if (this.state.showOnlyKulinaria === true) {
      eventsToShow = eventsToShow.filter(
        event => event.genre === 'kulinaria')
    }

    console.log(eventsToShow)
    return (
      <div>
        <ButtonGroup style={{float: 'right'}}>
          <Button style={buttonView} bsStyle="info"
                  onClick={() => this.handleResetClick('initialFiltersState')}
                  active={this.state.initialFiltersState}>
            ALL
          </Button>
          <Button style={buttonView} bsStyle="info"
                  onClick={() => this.handleFilterClick('showOnlyKoncert')}
                  active={this.state.showOnlyKoncert}>
            <FontAwesome name="music"/>
          </Button>
          <Button style={buttonView} bsStyle="info"
                  onClick={() => this.handleFilterClick('showOnlyFilm')}
                  active={this.state.showOnlyFilm}>
            <FontAwesome name="film"/>
          </Button>
          <Button style={buttonView} bsStyle="info"
                  onClick={() => this.handleFilterClick('showOnlySpektakl')}
                  active={this.state.showOnlySpektakl}>
            <FontAwesome name="shield"/>
          </Button>
          <Button style={buttonView} bsStyle="info"
                  onClick={() => this.handleFilterClick('showOnlyWystawa')}
                  active={this.state.showOnlyWystawa}>
            <FontAwesome name="image"/>
          </Button>
          <Button style={buttonView} bsStyle="info"
                  onClick={() => this.handleFilterClick('showOnlySport')}
                  active={this.state.showOnlySport}>
            <FontAwesome name="futbol-o"/>
          </Button>
          <Button style={buttonView} bsStyle="info"
                  onClick={() => this.handleFilterClick('showOnlyKulinaria')}
                  active={this.state.showOnlyKulinaria}>
            <FontAwesome name="cutlery"/>
          </Button>
        </ButtonGroup>

        <EventsList events={eventsToShow}/>
      </div>
    )
  }
}

export default FilterableEventsList






