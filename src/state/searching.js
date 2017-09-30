const FILTER = 'searching/FILTER'



export const filterResultsAction = (searchedEvents, searchedItem) => ({
  type: FILTER,
  searchedEvents,
  searchedItem
})

const initialState = {
  searchedEvents: [],
  filteredResults: []
}


export default (state = initialState, action) => {
  switch (action.type) {
    case FILTER:
      return {
        ...state,
        filteredResults: state.searchedEvents.map(event => event.items)
          .filter(event => [event.name, event.place, event.data, event.genre]
            .some(name => name && name.includes(action.searchedItem)
            )
          )
      }
    default:
      return state
  }
}
