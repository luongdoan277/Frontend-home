import React from 'react';
import { connect } from 'react-redux';

import {    BrightOverlay,
            ItemPreviewContainer,
            SectionContainer,
            ItemNameText,
            DetailItemContainer,
            VerticalLine,
            PriceContainer,
            PriceText,
            AddCartButton,
            AddCartButtonContainer
        } 
        from './item-preview.styles';
import { RupiahFormat } from '../../utils/utils';
import { addItem } from '../../redux/cart/cart.actions';

const ItemPreview = ({ payload, addItem}) => {
    const {imageUrl, name, size, price} = payload
    return (
        <ItemPreviewContainer >
            <SectionContainer size={size}>
                <img src={imageUrl} alt={name} width='100%' height='100%'/>
                <BrightOverlay>
                    <AddCartButtonContainer>
                        <AddCartButton inverse onClick={() => addItem(payload)} >
                            Add to Cart
                        </AddCartButton>
                    </AddCartButtonContainer>
                    
                {/* <Circle delay={'.1s'}>
                        <i class="fas fa-search"></i>
                </Circle>
                <Circle delay={'.27s'}>
                        <i class="fas fa-plus"></i>
                </Circle> */}
                </BrightOverlay>
            </SectionContainer>
            <DetailItemContainer>
                <ItemNameText>
                    {name}
                </ItemNameText>
                <PriceContainer>
                    <VerticalLine/>
                    <PriceText>{RupiahFormat(price)}</PriceText>
                </PriceContainer>
            </DetailItemContainer>
        </ItemPreviewContainer>
    );
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})
export default connect(null, mapDispatchToProps)(ItemPreview);