import React from 'react';
import FontAwesome from 'react-fontawesome'
import {Button, Modal} from 'react-bootstrap'
import EventDetail from "./EventDetail";
import styled from 'styled-components'
import {connect} from 'react-redux'

import './EventsList.css'
import './EventsView.css'

class FavEventsView extends React.Component {


    render() {
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
            <div className="eventsview">
                <h1>twoja lista wydarzeń</h1>
                <table className="eventslist">
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
        )

    }
}

export default connect(
    state => ({
        favEvents: state.favs.events
    })
)(FavEventsView)


