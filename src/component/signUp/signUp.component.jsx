import React from 'react'

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

import {auth, createUserProfileDocument} from '../../firebase/firebase.utils'
import './signUp.component.scss'

class SignUp extends React.Component {

    constructor(){
        super();

        this.state = {
            displayName:"",
            email:"",
            password:"",
            confirmPassword: ""
        }
    }
    // HandleChange function
    handleChange = event => {
        const {value, name} = event.target;
        this.setState({[name]:value})
    }

    //HandleSubmit function
    handleSubmit = async event => {
        event.preventDefault();
        const {displayName, email, password, confirmPassword} = this.state;

        if(password !== confirmPassword) {
            alert("Passwords don't match ")
            return;
        }

        try {
            // firebase speacial function for email and password signins
            const {user} = await auth.createUserWithEmailAndPassword(email,password);
            await createUserProfileDocument(user, {displayName});
            
            //clearing out the form after submit
            this.setState({
                displayName:"",
                email:"",
                password:"",
                confirmPassword: ""
            })

        } catch (error) {
            console.log(error.message)
        }
    }

    render(){
        return(

            <div className="sign-up">
                <h1 className='title'> I do not have an account</h1>
                <span>Sign up with your email and passsword</span>
                <form onSubmit={this.handleSubmit} className="sign-up-form">
                    <FormInput
                    name='displayName'
                    type='text'
                    label='Display Name'
                    value={this.state.displayName}
                    onChange={this.handleChange}
                    required/>

                    <FormInput
                    name='email'
                    type='email'
                    label='Your Email'
                    value={this.state.email}
                    onChange={this.handleChange}
                    required/>

                    <FormInput
                    name='password'
                    type='password'
                    label='Password'
                    value={this.state.password}
                    onChange={this.handleChange}
                    required/>

                    <FormInput
                    name='confirmPassword'
                    type='password'
                    label='Confirm Password'
                    value={this.state.confirmPassword}
                    onChange={this.handleChange}
                    required/>

                    <CustomButton type='submit'>SIGN UP</CustomButton>

                </form>
            </div>
        )
    }
}

export default SignUp;