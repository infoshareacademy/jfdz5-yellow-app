import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import persistState from 'redux-localstorage'
import firebase from 'firebase'

import auth, { setUser } from './state/auth'
import favs, { setFavs } from './state/favs'

const config = {
    apiKey: "AIzaSyB-6uPDmcy0KQvME7-D8nZWZOX6sbG08j0",
    authDomain: "yellow-app-9f1ad.firebaseapp.com",
    databaseURL: "https://yellow-app-9f1ad.firebaseio.com",
    projectId: "yellow-app-9f1ad",
    storageBucket: "yellow-app-9f1ad.appspot.com",
    messagingSenderId: "1014165923964"
};
firebase.initializeApp(config);


const reducer = combineReducers({
    auth,
    favs
})


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const enhancer = composeEnhancers(
    applyMiddleware(thunk),
    persistState([]),
)

const store = createStore(
    reducer,
    enhancer
)

firebase.auth().signInWithEmailAndPassword(
    'katarzyna.sitarz@gmail.com',
    'test123'
    )

firebase.auth().onAuthStateChanged(user => {
    store.dispatch(setUser(user))

    if (user !==null) {
        const userId = firebase.auth().currentUser.uid


        firebase.database().ref('/favorites/' + userId).on('value', snapshot => {
            store.dispatch(setFavs(snapshot.val()))
        })
    }
})

export default store