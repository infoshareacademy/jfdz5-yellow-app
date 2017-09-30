import React from 'react'
import {withRouter} from 'react-router-dom'
import {Grid,
    FormGroup,
    FormControl,
    Col,
  Button
}
    from 'react-bootstrap'

import {connect} from 'react-redux'
import {filterResultsAction} from '../state/searching'

import FontAwesome from 'react-fontawesome'
import './SearchBar.css'





class SearchBar extends React.Component {


  state = {
    searchedName: '',
    searchedEvents: this.props.searchedEvents
  }


  handleChange = (event) => this.setState({
    searchedName: event.target.value
  })


  handleSubmit = event => {
    event.preventDefault();
    this.props.history.push('/results')
    this.props.addSearchedResults(this.state.searchedEvents, this.state.searchedName)
    this.setState({
      searchedName: '',
    })
  }


  render() {


    return (
      <Grid>
        <FormGroup>
          <Col sm={2}>
          </Col>
          <Col sm={8}>
            <form onSubmit={this.handleSubmit}>
              <FormControl
                className="searchbar"
                type="text"
                value={this.state.searchedName}
                onChange={this.handleChange}
                required
                placeholder="szukaj imprezy w swojej okolicy"/>
              <Button bsStyle="info" type="submit">
                <FontAwesome name="search"/></Button></form>
          </Col>
          <Col sm={2}>
          </Col>
        </FormGroup>
      </Grid>
    )
  }
}
}



export default withRouter(
  connect(
    state => ({
      filteredResults: state.searching.searchedEvents
    }),
    dispatch => ({
      addSearchedResults: (searchedEvents, searchedItem) => dispatch(filterResultsAction(searchedEvents, searchedItem))
    })
  )(SearchBar)
)
