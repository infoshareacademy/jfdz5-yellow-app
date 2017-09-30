import React from 'react'

import {connect} from "react-redux";


import {filterResultsAction} from '../state/searching'
import NoEventFound from './NoEventFound'
import SearchResultsItem from './SearchResultItem'

class SearchResults extends React.Component {

  render() {
    const searchResults = this.props.filteredResults

    return (

      <div>
        {searchResults && searchResults.toString() === "" ?
            <NoEventFound/>
            :
            <SearchResultsItem searchResults={searchResults}/>
        }
      </div>
    )
  }
}

export default connect(
  state => ({
    filteredResults: state.searching.filteredResults
  }),
  dispatch => ({
    addSearchedResults: (searchedEvents, searchedItem) => dispatch(filterResultsAction(searchedEvents, searchedItem))
  })
)(SearchResults)
