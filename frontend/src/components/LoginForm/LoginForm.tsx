import React from "react";
import {BrowserRouter, Route, Link} from 'react-router-dom';
import { Redirect } from 'react-router';
import createBrowserHistory from "history/createBrowserHistory";
import './LoginForm.css'

interface LoginProps {}
interface LoginState {
    user: string,
    password: string,
    redirect: boolean
}

class LoginForm extends React.Component<LoginProps, LoginState> {
    constructor(props: LoginProps) {
      super(props);
      this.state = {
          user: '',
          password: '',
          redirect: false
      };
    }

    render() {
        const redirect = this.state.redirect && <Redirect push to="/" />
        return(
            <div className='container'>
                <form className='form'>
                    <label htmlFor='login-field' >Username</label>
                    <input onChange={this.handleNameChange} value={this.state.user} className='UserName' name='user' type='text' id='login-field'></input>
                    <label htmlFor='password-field'>Password</label>
                    <input onChange={this.handlePassword} value={this.state.password} className='password' name='password' type='password' id='password-field'></input>
                    <button onClick={this.handleClick}>Login</button>
                </form>
                {redirect}
            </div>
        )
    }

    handleClick = (event:any) => {
        console.log(this.state)
        event.preventDefault()
        fetch("http://localhost:4444/login",{ method: 'POST', body: JSON.stringify(this.state), headers: {
            'Content-Type': 'application/json',
            // 'Content-Type': 'application/x-www-form-urlencoded',
        }})
      .then(r => r.json())
      .then(data => {
        console.log(data)
        if (data.token) {
            localStorage.setItem('token', data.token)
            this.setState({
                redirect: true
            })
        }
      });
    }

    handleNameChange = (event:any) => {
        console.log(event.target.value)
        this.setState({
            user: event.target.value
        })
    }

    handlePassword = (event: any) => {
        this.setState({
            password: event.target.value
        })
    }
}

export default LoginForm;