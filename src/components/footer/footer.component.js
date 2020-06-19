import React from 'react';
import { Link } from 'react-router-dom';

import { CategoryContainer } from '../home-category/home-category.styles';
import logo from '../../assets/logos/berryberri-1.png';
import {    style,
            FooterContainer,
            FooterPart,
            FooterLargeContainer,
            FooterMediumContainer,
            FooterLogoContainer,
            DefaultFooterText,
            FooterMainTitleText,
            FooterLinkText,
            SocialMediaContainer,
            ButtonContainer,
            Hightlight,
            AdditionalInformation
        } from './footer.styles';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';


const Footer = () => (
    <FooterContainer>
        <CategoryContainer>
            <FooterPart>
                <FooterLargeContainer>
                    <FooterLogoContainer>
                        <img src={logo} alt='logo' width='100%' height='100%'/>
                    </FooterLogoContainer>
                    <DefaultFooterText>
                        As Asia’s Online Fashion Destination, we create endless style possibilities through an ever-expanding range of products form the most coveted international and local brands, putting you at the centre of it all. 
                        <strong> With BerryBerri, You Own Now.</strong>
                    </DefaultFooterText>
                    <br/>
                    <FooterMainTitleText><strong>Find Us On</strong></FooterMainTitleText>
                    <SocialMediaContainer>
                        <Link to='#'>
                            <i class="fab fa-facebook-f" style={style.socmedIconStyle}/>
                        </Link>
                        <Link to='#'>
                            <i class="fab fa-twitter" style={style.socmedIconStyle}/>
                        </Link>
                        <Link to='#'>
                            <i class="fab fa-instagram"  style={style.socmedIconStyle}/>
                        </Link>
                        <Link to='#'>
                            <i class="fab fa-youtube" style={style.socmedIconStyle}/>
                        </Link>
                        <Link to='#'>
                            <i class="fab fa-linkedin" style={style.socmedIconStyle}/>
                        </Link>
                    </SocialMediaContainer>
                </FooterLargeContainer>
                <FooterMediumContainer>
                    <FooterMainTitleText><strong>Customer Services</strong></FooterMainTitleText>
                    <FooterLinkText to='#'>FAQ</FooterLinkText>
                    <FooterLinkText to='#'>Returns</FooterLinkText>
                    <FooterLinkText to='#'>Product Index</FooterLinkText>
                    <FooterLinkText to='#'>Fashion Glossary</FooterLinkText>
                    <FooterLinkText to='#'>Order Tracking</FooterLinkText>
                </FooterMediumContainer>
                <FooterMediumContainer>
                    <FooterMainTitleText><strong>About BerryBerri</strong></FooterMainTitleText>
                    <FooterLinkText to='#'>Promotions</FooterLinkText>
                    <FooterLinkText to='#'>Terms & Conditions</FooterLinkText>
                    <FooterLinkText to='#'>Privacy Policy</FooterLinkText>
                    <FooterLinkText to='#'>Influencer Program</FooterLinkText>
                    <FooterLinkText to='#'>THREAD by BerryBerri</FooterLinkText>
                </FooterMediumContainer>
                <FooterLargeContainer>
                    <FooterMainTitleText><strong>New to BerryBerri?</strong></FooterMainTitleText>
                    <DefaultFooterText> Get a <Hightlight><strong>Rp 75.000 </strong></Hightlight> Voucher (plus the latest fashion news and product launches) just by subscribing to our newsletter.</DefaultFooterText>
                    <form >
                        <FormInput 
                            labelColor={"#dedede"}
                            name="Email"
                            type="email"
                            label="Your email address"
                        />
                        <AdditionalInformation>
                            <ButtonContainer>
                                <CustomButton outlined type="button">
                                    Female
                                </CustomButton>
                            </ButtonContainer>
                            <ButtonContainer>
                                <CustomButton outlined type="button">
                                    Male
                                </CustomButton>
                            </ButtonContainer>
                         
                        </AdditionalInformation>
                    </form>
                    <br/>
                    <AdditionalInformation>
                        <FooterLinkText to='#'>Privacy |  </FooterLinkText>
                        <FooterLinkText to='#'>&nbsp; Term of Services</FooterLinkText>
                    </AdditionalInformation>
                    <br/>
                    <DefaultFooterText>© 2020 BerryBerri</DefaultFooterText>
                </FooterLargeContainer>
            </FooterPart>
        </CategoryContainer>
    </FooterContainer>
);

export default Footer;