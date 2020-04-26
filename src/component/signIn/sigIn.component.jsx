import React from 'react'
import './signIn.component.scss'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import {signInWithGoogle, auth} from '../../firebase/firebase.utils'

class SignIn extends React.Component {

    constructor(props) {
        super(props)
    
        this.state = {
             email: '',
             password: ''
        }
    }
    
    handleSubmit =  async event => {
        event.preventDefault();
        const {email, password} = this.state;
        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email:'', password:''})
        } catch (error) {
            console.log('there is no such user', error.message);
            alert('There is no such email or password. Please try again.')
        }
    }

    handleChange = event => {
        const {value, name} = event.target;
        this.setState({[name]:value})
    }

    render() {
        return (
            <div className='sign-in'>
                <h1 className='title'>I already have account</h1>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        handleChange={this.handleChange}
                        label='Email'
                        type="email"
                        name='email'
                        value={this.state.email}
                        required/>
                    <FormInput
                         handleChange={this.handleChange}
                         label='Password'
                         type="password"
                         name='password'
                         value={this.state.password}
                         required/>

                         <div className="buttons">
                            <CustomButton type='submit'>SIGN IN</CustomButton>
                            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>SIGN IN WITH GOOGLE</CustomButton>
                         </div>
                </form>

            </div>
        )
    }
    
}

export default SignIn