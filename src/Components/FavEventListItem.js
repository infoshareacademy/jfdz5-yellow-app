import React from 'react'

import { connect } from 'react-redux'




class FavEventListItem extends React.Component {

    render() {

        const eventId = this.props.event.id
        const event = this.props.event

        return (
            <div>
                {this.props.favEvents[eventId]}
            </div>
        )
    }
}


export default connect(
    state => ({
        favEvents: state.favs.events
    })
)(FavEventListItem)
