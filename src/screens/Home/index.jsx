import React from 'react';
import { Feather } from '@expo/vector-icons';

import { Container, SearchContainer, Input, SearchButton } from './styles';
import { Header } from '../../components/Header';

export function Home(){
    return(
        <Container>
            <Header title="React Prime" />
            <SearchContainer>
                <Input
                    placeholder="Ex:. Vingadores Ultimato"
                    placeholderTextColor={"#ddd"}
                />

                <SearchButton>
                    <Feather
                        name="search"
                        size={30}
                        color="#FFF"
                    />
                </SearchButton>
            </SearchContainer>
        </Container>
    );
}