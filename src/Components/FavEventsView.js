import React from 'react';
import FontAwesome from 'react-fontawesome'
import {Button, Modal} from 'react-bootstrap'
import EventDetail from "./EventDetail";
import styled from 'styled-components'
import {connect} from 'react-redux'

import './FavEventsView.css'




  class FavEventsView extends React.Component {





  render() {

      //
      // const filteredData = this.props.events.filter(event => {
      //     return new Date(event.data + ' ' + event.time) >= new Date();
      // })
      //
      // const sortData = filteredData.sort((a, b) => {
      //         return (new Date(a.data + ' ' + a.time)).getTime() > (new Date(b.data + ' ' + b.time)).getTime()
      //     }
      // )

    const favorites = Object.entries(this.props.favEvents).map(([key, value]) => {
      return (
        <tr>
        <td key={key}>{value.name}</td>
                    <td>
                        {value.data}
                        &nbsp;|&nbsp;
                        {value.time}
                    </td>
                    <td>
                        {value.place}
                    </td>
                    </tr>
            )
        })
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


