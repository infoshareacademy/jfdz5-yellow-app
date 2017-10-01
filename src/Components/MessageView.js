import React, {Component} from 'react';
import firebase from 'firebase'

import MessageBox from './MesssageBox'
import MessageList from './MessageList'





class MessageView extends Component {

    constructor(props){
        super(props);
        this.state  = {
            messages: []
        }
    }

    render(){
        return (
            <div>
                <MessageList db={firebase}/>
            <div>
                <MessageBox db={firebase}/>
                </div>
            </div>

        )
    }
}

export default MessageView