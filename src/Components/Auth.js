import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import LogInForm from './LogInForm'
import RegistrationForm from './RegistrationForm'

const Auth = ({ user, children }) => (
    <div>
        {
            user === null ?
                <div>
                    <LogInForm />
                    <RegistrationForm />
                </div> :
                children
        }
    </div>
)

export default withRouter(connect(
    state => ({
        user: state.auth.user
    })
)(Auth))