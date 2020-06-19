import React, { useState } from 'react';
import { connect } from 'react-redux';

import {
    CardContainer,
    SignFormContainer,
    SignImageContainer,
    SignTitleText,
    FormContainer,
    SignButton,
    DetailText,
    LinkSignUp
} from '../sign-in/sign-in.styles';
import SideImage from '../../components/side-image/side-image.component';
import FormInput from '../../components/form-input/form-input.component';
import Odunsi from '../../assets/images/sign/Odunsi.jpg';

import { signUpStart } from '../../redux/user/user.actions';

const SignUpPage = ({ signUpStart }) => {
    const [userCredentials, setUserCredentials] = useState({ displayName: '', email: '', password: '', confirmPassword: '' });

    const { displayName, email, password, confirmPassword } = userCredentials;

    const handleSubmit = async event => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert("Password don't match")
            return;
        }
        signUpStart({ displayName, email, password })
    }

    const handleChange = event => {
        const { name, value } = event.target;
        setUserCredentials({ ...userCredentials, [name]: value });
    }

    return (
        <CardContainer>
            <SignFormContainer>
                <FormContainer>
                    <SignTitleText>SIGN UP</SignTitleText>
                    <form onSubmit={handleSubmit} >
                        <FormInput
                            onChange={handleChange}
                            value={displayName}
                            name="displayName"
                            type="text"
                            label="Display Name"
                            required
                        />
                        <FormInput
                            onChange={handleChange}
                            value={email}
                            name="email"
                            type="email"
                            label="Email"
                            required
                        />
                        <FormInput
                            onChange={handleChange}
                            value={password}
                            name="password"
                            type="password"
                            label="Password"
                            required
                        />
                        <FormInput
                            onChange={handleChange}
                            value={confirmPassword}
                            name="confirmPassword"
                            type="password"
                            label="Confirm Password"
                            required
                        />
                        <SignButton type="submit" onClick={handleSubmit}>Sign Up</SignButton>
                    </form>
                    <DetailText>Already have a BerryBerri account <LinkSignUp to='/signin'> Sign In</LinkSignUp></DetailText>
                </FormContainer>
            </SignFormContainer>
            <SignImageContainer>
                <SideImage
                    imageUrl={Odunsi}
                    mainText={"BerryBerri"}
                    detailText={"Welcome to berryberri"}
                />
            </SignImageContainer>
        </CardContainer>
    );
}

const mapDispatchToProps = dispatch => ({
    signUpStart: (userData) => dispatch(signUpStart(userData))
});

export default connect(null, mapDispatchToProps)(SignUpPage);