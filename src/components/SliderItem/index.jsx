import React from 'react';

import {
    Container,
    BannerItem,
    Title,
    RateContainer,
    Rate
} from './styles'

import { Ionicons } from '@expo/vector-icons'

export function SliderItem(){
    return(
        <Container activeOpacity={0.7}>
            <BannerItem 
                source={{ uri: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1025&q=80' }}
            />
            <Title numberOfLines={1}>Homi Aranha Vingadores chupa cu</Title>
            <RateContainer>
                <Ionicons name="md-star" size={12} color="#E7A74E" />
                <Rate>1.2</Rate>
            </RateContainer>
        </Container>
    );
}