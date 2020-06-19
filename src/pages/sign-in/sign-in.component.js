import React, { useState } from 'react';
import { connect } from 'react-redux';

import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';

import { 
            CardContainer,
            SignFormContainer,
            SignImageContainer,
            SignTitleText,
            FormContainer,
            SignButton,
            AnotherSignText,
            LogoSocialMediaContainer,
            DetailText,
            LinkSignUp,
        } from './sign-in.styles';
import SideImage from '../../components/side-image/side-image.component';
import FormInput from '../../components/form-input/form-input.component';
import DomHill from '../../assets/images/sign/dom-hill.jpg';
import Google from '../../assets/logos/google.jpg';


const SignInPage = ({ googleSignInStart, emailSignInStart }) => {
    const [ userCrendentials, setUserCredentials ] = useState({email : '', password: ''});

    const { email, password } = userCrendentials;

    const handleSubmit = async event => {
        event.preventDefault();
        emailSignInStart(email, password)

    }

    const handleChange = event => {
        const { name, value } = event.target; 
        setUserCredentials({...userCrendentials, [name] : value});
    }

    return (
        <CardContainer>
            <SignFormContainer>
                <FormContainer>
                    <SignTitleText>SIGN IN</SignTitleText>
                    <form onSubmit={handleSubmit}>
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
                        <SignButton type="submit" onClick={handleSubmit}>Sign In</SignButton>
                        <AnotherSignText> <span>or sign in with</span></AnotherSignText>
                        <SignButton mediaSocial type="button" onClick={googleSignInStart}>
                            <LogoSocialMediaContainer>
                                <img src={Google} alt="google" width='100%' height='100%'/>
                            </LogoSocialMediaContainer>
                            <span>
                            Sign In with Google
                            </span>
                        </SignButton>
                    </form>
                    <DetailText>Do not have a BerryBerri account? <LinkSignUp to='/signup'> Sign Up</LinkSignUp></DetailText>
                </FormContainer>
            </SignFormContainer>
            <SignImageContainer>
                <SideImage
                    imageUrl={DomHill}
                    mainText={"BerryBerri"}
                    detailText={"Create your own style"}
                />
            </SignImageContainer>
        </CardContainer>
    );
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password}))
});

export default connect(null, mapDispatchToProps)(SignInPage);