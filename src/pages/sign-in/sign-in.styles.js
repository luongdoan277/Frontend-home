import styled from 'styled-components';
import CustomButton from '../../components/custom-button/custom-button.component';
import CustomStyles from '../../components/custom-styles/custom-styles';
import  { Link } from 'react-router-dom';

export const LinkSignUp = styled(Link)`
    font-weight: bold;
    text-decoration: none;
    color: ${CustomStyles.primaryColor}
`;

export const CardContainer = styled.div`
    box-shadow: 2px 2px 5px #8e8e8e;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    overflow: hidden;
    height: 100vh;
`;

export const DetailText = styled.p`
    line-height: 25px;
    font-size: 14px;
    color: ${CustomStyles.primaryColor};
    margin: 40px 0;
    text-align: center;

`;

export const SignImageContainer = styled.div`
    width: 50%;
`;

export const LogoSocialMediaContainer = styled.div`
    width: 20px;
    height : 20px;
    display: inline-block;
    margin-right: 20px;
    
    img {
        object-fit: cover;
    }
`;

export const SignFormContainer = styled.div`
    width: 50%;
    text-align: left;
`;

export const FormContainer = styled.div`
    padding: 30px 150px 30px 70px;
    box-sizing: border-box;
`;

export const SignTitleText = styled.h1`
    letter-spacing: 8px;
`;

export const SignButton = styled(CustomButton)`
    width: 100%;
    margin-top: 20px;
`;

export const AnotherSignText = styled.p`
    font-size: 15px;
    color: ${CustomStyles.primaryColor};
    border-bottom: 1px solid #c5c5c5; 
    line-height: 0.1em;
    margin: 40px 0 40px; 
    text-align: center;

    span { 
        background: white;
        padding:0 20px; 
    }
`;