import React from 'react';
import FontAwesome from 'react-fontawesome'
import { Button, Modal } from 'react-bootstrap'
import EventDetail from "./EventDetail";
import styled from 'styled-components'
import { connect } from 'react-redux'
import moment from 'moment'

import './FavEventsView.css'


class FavEventsView extends React.Component {


  render() {
    const favorites = Object.entries(this.props.favEvents).map(
      ([key, value]) => ({
        key,
        ...value,
        date: moment(value.data + ' ' + value.time)
      })
    ).sort(
      (a, b) => a.date.isBefore(b.date) ? -1 : (a.date.isAfter(b.date) ? 1 : 0)
    ).map(
      event => (
        <tr>
          <td key={event.key}>{event.name}</td>
          <td>
            {event.data}
            &nbsp;|&nbsp;
            {event.time}
          </td>
          <td>
            {event.place}
          </td>
        </tr>
      )
    )
    return (
      <div className="faveventsview">
        <h1>twoja lista&nbsp;&nbsp;<FontAwesome name="heart"/></h1>
        <div className="favevents">
          <table className="table faveventslist">
            <thead>
            <tr>
              <th>co</th>
              <th>kiedy</th>
              <th>gdzie</th>
              <th></th>
            </tr>
            </thead>
            <tbody>
            {favorites}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default connect(
  state => ({
    favEvents: state.favs.events
  })
)(FavEventsView)