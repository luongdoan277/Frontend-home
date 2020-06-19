import React from 'react';
import Slider from 'react-slick';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { 
        MainBillboardContainer,
        ImagesSlideContainer,
        ChevronLeft,
        ChevronRight,
 } from './main-billboard.styles';
import ImageSlider from '../image-slider/image-slider.component';

import { selectBillboardList } from '../../redux/directory/directory.selectors';


class MainBillboard extends React.Component {

    next = () => {
        this.slider.slickNext();
    }
    
    previous = () => {
        this.slider.slickPrev();
    }

    render() {
        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
        };

        const { billboardList } = this.props
        return (
            <MainBillboardContainer>
                <ImagesSlideContainer>
                    <ChevronLeft onClick={this.previous}>
                        &#10094;
                    </ChevronLeft>
                    <ChevronRight onClick={this.next}>
                        &#10095;
                    </ChevronRight>
                    <Slider ref={c => (this.slider = c)} {...settings} >
                        {billboardList.map(({id, imageUrl, caption, textPosition, title}) => (
                            <ImageSlider key={id} imageUrl={imageUrl} caption={caption} textPosition={textPosition} title={title} />
                        ))}
                    </Slider>
                </ImagesSlideContainer>
            </MainBillboardContainer>
  
      
        );
    }
}

const mapStateToProps = createStructuredSelector({
    billboardList: selectBillboardList
})

export default connect(mapStateToProps)(MainBillboard);