import React from 'react'
import './signIn.component.scss'

class SignIn extends React.Component {

    constructor(props) {
        super(props)
    
        this.state = {
             email: '',
             password: ''
        }
    }
    
    handleSubmit = event => {
        event.preventDefault();
        this.setState({email:'', password:''})
        console.log(this.state)
    }

    handleChange = event => {
        const {value, name} = event.target;
        this.setState({[name]:value})
    }

    render() {
        return (
            <div>
                <h1>I already have account</h1>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} type="email" name='email' value={this.state.email} required/>
                    <label htmlFor="email">Email</label>
                    <input onChange={this.handleChange} type="password" name='password' value={this.state.password} required/>
                    <label htmlFor="password">Password</label>
                    <input type="submit" value="SIGN IN"/>
                </form>

            </div>
        )
    }
    
}

export default SignIn