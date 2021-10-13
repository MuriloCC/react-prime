import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native'

import { Container, ListMovies } from './styles';
import { Header } from '../../components/Header';

import { deleteMovie, getMoviesSave } from '../../utils/storage';
import { FavoriteItem } from '../../components/FavoriteItem';

export function Movies(){
    const navigation = useNavigation();

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        let isActive = true;

        async function getFavoriteMovies(){
            const result = await getMoviesSave('@murasprime');
            if(isActive){
                setMovies(result);
                console.log(result);
            } 
        }

        if(isActive){ 
            getFavoriteMovies();
        }

        return () => {
            isActive = false;
        }
    }, []);

    async function handleDelete(id){
        const result = await deleteMovie(id);
        setMovies(result);
    }

    function navigateDetailsPage(item){
        navigation.navigate('Details', {id: item.id});
    }

    return(
        <Container>
            <Header title="Meus Filmes" />
            <ListMovies
                showsVerticalScrollIndicator={false} 
                data={movies}
                keyExtractor ={item => String(item.id)}
                renderItem={({ item }) => (
                    <FavoriteItem 
                        data={item}
                        deleteMovie={handleDelete}
                        navigatePage={() => navigateDetailsPage(item)}
                />
            )   }  
            />
        </Container>
    );
}