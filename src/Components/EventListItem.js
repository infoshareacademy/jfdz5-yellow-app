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


class EventListItem extends React.Component {

    state = {
        showDetails: false
    }

    handleOpenClick = () => this.setState({showDetails: true})

    close = () => this.setState({showDetails: false})

    render() {
        const event = this.props.event
        return (
            <tr>
                <td>
                    {event.name}
                </td>
                <td>
                    {event.data}
                    &nbsp;|&nbsp;
                    {event.time}
                </td>
                <td>
                    {event.place}
                </td>
                <td>
                    <Modal show={this.state.showDetails} onHide={this.close}>
                        <Button onClick={this.close} style={closeButton} bsStyle="info">
                            <FontAwesome className="fa fa-times"/>
                        </Button>
                        <EventDetail event={event}/>
                    </Modal>

                    <Span className="favs" onClick={this.handleOpenClick}>
                        <FontAwesome className="fa fa-info"/></Span>
                    &nbsp;|&nbsp;
                    <span className="favs"><FontAwesome className="fa fa-heart-o"/></span>
                    &nbsp;|&nbsp;
                    <span className="favs"><FontAwesome className="fa fa-facebook"/></span>
                </td>
            </tr>
        )
    }
}

export default EventListItem