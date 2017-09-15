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
import EventDetail from './EventDetail'
import EventsView from './EventsView'
import FavEventsView from './FavEventsView'

const Content = () => (
    <Grid>
       <div>
           <SearchBar/>
           <EventsView>
               <Switch>
               <Route exact path="/events" component={EventsView}/>
               <Route path="/events/:eventId" component={EventDetail}/>
                   <Route path="/calendar" component={EventsView}/>
                   <Route path="/favs" component={FavEventsView}/>
               </Switch>
           </EventsView>
       </div>
    </Grid>
)



export default Content