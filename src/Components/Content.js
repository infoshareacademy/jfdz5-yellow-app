import React from 'react'
import {
    Switch,
    Route,
    withRouter
} from 'react-router-dom'
import {
    Grid
} from 'react-bootstrap'
import { connect } from 'react-redux'

import SearchBar from './SearchBar'
import EventsView from './EventsView'

const Content = () => (
    <Grid>
       <div>
           <SearchBar/>
           <EventsView/>
       </div>
    </Grid>
)

export default Content