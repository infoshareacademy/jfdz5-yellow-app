import React from 'react';
import { connect } from 'react-redux'

class FavEventsView extends React.Component {
    render() {
        const favorites = Object.entries(this.props.favEvents).map(([key, value]) => {
            return (
                <p key={key}>{value.name}</p>
            )
        })
        return (
            <div>
                {favorites}
            </div>
        )

    }
}

export default connect(
    state => ({
        favEvents: state.favs.events
    })
)(FavEventsView)