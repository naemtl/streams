import React, { Component } from 'react'

class GoogleAuth extends Component {

    componentDidMount = () => {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '219886219317-udneqpdqjdamhe1vr7nski92452hj404.apps.googleusercontent.com',
                scope: 'email'
            });
        });
    }

    render = () => {
        return (
            <div>
                AUTH
            </div>
        )
    }
}

export default GoogleAuth
