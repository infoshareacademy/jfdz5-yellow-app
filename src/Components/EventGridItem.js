import React from 'react'
import FontAwesome from 'react-fontawesome'
import {Button, Modal} from 'react-bootstrap'
import EventDetail from "./EventDetail";
import styled from 'styled-components'


const closeButton = {
    height: '30px',
    width: '30px',
    margin: '5px',
    borderRadius: '40px',
    padding: '0'
}

const Span = styled.span`
    cursor: pointer;
 &:hover {
 color: #42B5D7;
 }`


class EventGridItem extends React.Component {

    state = {
        showDetails: false
    }

    handleOpenClick = () => this.setState({showDetails: true})

    close = () => this.setState({showDetails: false})

    render() {
        const event = this.props.event
        return (
                                        <div className="eventsgrid_cell" key={event.id}>
                                <h2>{event.name}</h2>
                                <h3>{event.data}&nbsp;|&nbsp;{event.time}</h3>
                                <h3>{event.place}</h3>
                                            <Modal show={this.state.showDetails} onHide={this.close}>
                                                <Button onClick={this.close} style={closeButton} bsStyle="info">
                                                    <FontAwesome className="fa fa-times"/>
                                                </Button>
                                                <EventDetail event={event}/>
                                            </Modal>

                                            <Span className="favs" onClick={this.handleOpenClick}>
                        <FontAwesome className="fa fa-info"/></Span>
                                    &nbsp;|&nbsp;
                                    <FontAwesome className="fa fa-heart-o" />
                                    &nbsp;|&nbsp;
                                    <FontAwesome className="fa fa-facebook"/>
                                                    </div>
                        )

}
}

export default EventGridItem