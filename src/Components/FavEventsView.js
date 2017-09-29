import React from 'react';
import firebase from 'firebase'
import { connect } from 'react-redux'
import {
       Route,
    } from 'react-router-dom'



class FavEventsView extends React.Component {

    constructor(props) {
        super(props);
        this.database = firebase.database();
        this.state = {
            favorites: []
        };
        this.favoritesRef = this.database.ref('favorites')
    }

    watchingFavs() {
        this.favoritesRef.on('value', (snapshot) => {
            console.log(snapshot.val());
            this.setState({favorites: snapshot.val()})
        })
    }

    componentDidMount() {
        this.watchingFavs()
    }

    render() {
        const favorites = Object.keys(this.state.favorites).map((id) => {
            return (
                <p key={id}>{this.state.favorites[id].name}</p>
            )
        })
return (
    <div>
        <p>
            {favorites}
        </p>
    </div>
)

    }
}

export default FavEventsView

//     render() {
//
//         firebase.database().ref('favorites').on("value", function (data) {
//             const favorites = [];
//             console.log(data.val() || [])
//         })
// return (
// <div>
//     <table>
//         {this.state.favorites.map(
//                 event => (
//         <tr key={event.id}>
//             <td>
//                 {event.name}
//             </td>
//             <td>
//                 {event.data}
//                 &nbsp;|&nbsp;
//                 {event.time}
//             </td>
//             <td>
//                 {event.place}
//             </td>
//         </tr>
//         )
//         )}
//         </table>
//         </div>
//             )
//             }
// }
// export default connect(
//
// )(FavEventsView)
