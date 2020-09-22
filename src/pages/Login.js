import React, {Component} from 'react';
import {Redirect} from 'react-router';
import axios from 'axios';
import { render } from '@testing-library/react';

class Login extends Component{
    constructor(props){
        super(props)
        this.state={
            redirectToReferrer : false
        }
    }

    login = () => {
        axios.post('https://food-power.glitch.me/login', {username: 'deeps', password: 'pass'})
        .then(res => {            
            localStorage.setItem('userAuthenticated', true)
            this.setState({redirectToReferrer: true});
        })
    }

    render(){
        const {redirectToReferrer} = this.state

        if(redirectToReferrer === true){
            return <Redirect to="/protected"/>
        }

        return (
            <div>
                <h2>You must log in to order</h2>
                <button onClick={this.login}>Log in</button>
            </div>
        )
    }
}

export default Login;