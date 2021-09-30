import React, { useState, useEffect } from 'react';
import { Feather } from '@expo/vector-icons';
import { ScrollView } from 'react-native';

import { api, key } from '../../services/api'

import { 
    Container,
    SearchContainer, 
    Input, 
    SearchButton, 
    Title,
    BannerButton,
    Banner,
    SliderMovie 
} from './styles';

import { Header } from '../../components/Header';
import { SliderItem } from '../../components/SliderItem';

export function Home(){
    const [nowMovies, setNowMovies] = useState([]);

    useEffect(() => {
        let isActive = true;

        async function getMovies(){
            const response = await api.get('/movie/now_playing', {
                params: {
                    api_key: key,
                    language: 'pt-BR',
                    page: 1,
                }
            });
            console.log(response.data);
        }

        getMovies();
    }, []);

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

            <ScrollView showsVerticalScrollIndicator={false}>
                <Title>Em cartaz</Title>
                <BannerButton
                    activeOpacity={0.7}
                    onPress={() => alert("teste")}
                >
                    <Banner
                        resizeMethod="resize" 
                        source={{ uri: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1025&q=80' }}
                    />
                </BannerButton>

                <SliderMovie 
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={[1, 2, 3, 4]}
                    renderItem={({ item }) => <SliderItem />}
                />

                <Title>Populares</Title>
                <SliderMovie 
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={[1, 2, 3, 4]}
                    renderItem={({ item }) => <SliderItem />}
                />

                <Title>Mais Votados</Title>
                <SliderMovie 
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={[1, 2, 3, 4]}
                    renderItem={({ item }) => <SliderItem />}
                />
            </ScrollView>
        </Container>
    );
}