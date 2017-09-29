import React from 'react'
import firebase from 'firebase'
import _ from 'lodash'
import { connect } from 'react-redux'
import FavEventListItem from "./FavEventListItem";


class FavEventsList extends React.Component {

//     render() {
//
//         const eventId = this.props.event.id

// const favEvent = this.props.favEvents[eventId]
//
//         const filteredData = this.props.favEvents[eventId].filter(event => {
//             return new Date(event.data + ' ' + event.time) >= new Date();
//         })
//
//         const sortData = filteredData.sort((a, b) => {
//                 return (new Date(a.data + ' ' + a.time)).getTime() > (new Date(b.data + ' ' + b.time)).getTime()
//             }
//         )
        render() {
            const event = this.props.event

            let favEvents = this.state.favorites.map((event) => {
                return (
                    <div className="card">
                        <div className="card-content">
                            <FavEventListItem event = {event.event} />
                        </div>
                    </div>
                )
            }
        return (
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

                {
                    sortData.map(
                        event => (
                            <FavEventListItem key={favEvent[eventId]} event={event}/>
                        )
                    )
                }
                </tbody>
            </table>
        )
    }

}





export default connect(
    state => ({
        favEvents: state.favs.events
    })
)(FavEventsList)
