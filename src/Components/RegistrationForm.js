import React from 'react'
import firebase from 'firebase'

class RegistrationForm extends React.Component {

    state = {
        email: '',
        password: ''
    }

    handleChange = event => this.setState({
        [event.target.name]: event.target.value
    })

    handleSubmit = event => {
        event.preventDefault()

        firebase.auth().createUserWithEmailAndPassword(
            this.state.email,
            this.state.password
        )
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h1>Create account</h1>
                <div>
                    <label htmlFor="email">Email</label>
                    <br/>
                    <input
                        type="text"
                        id="email"
                        name="email"
                        onChange={this.handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <br/>
                    <input
                        type="text"
                        id="password"
                        name="password"
                        onChange={this.handleChange}
                    />
                </div>
                <div>
                    <button type="submit">
                        Create account
                    </button>
                </div>
            </form>
        )
    }
}

export default RegistrationForm
