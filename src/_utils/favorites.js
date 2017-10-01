import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyB-6uPDmcy0KQvME7-D8nZWZOX6sbG08j0",
    authDomain: "yellow-app-9f1ad.firebaseapp.com",
    databaseURL: "https://yellow-app-9f1ad.firebaseio.com",
    projectId: "yellow-app-9f1ad",
    storageBucket: "yellow-app-9f1ad.appspot.com",
    messagingSenderId: "1014165923964"
};
const favorites = firebase.initializeApp(config);

export default favorites


