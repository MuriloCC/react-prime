import AsyncStorage from '@react-native-async-storage/async-storage'

//buscar filme salvo
export async function getMoviesSave(key){
    const myMovies = await AsyncStorage.getItem(key);

    let moviesSave = JSON.parse(myMovies) || [];

    return moviesSave;
}

export async function saveMovie(key, newMovie){
    let moviesStored = await getMoviesSave(key);

    //se tiver um filme com o mesmo id, ignorar
    const hasMovie = moviesStored.some(item => item.id === newMovie.id);

    if(hasMovie){
        return;
    }

    moviesStored.push(newMovie);

    await AsyncStorage.setItem(key, JSON.stringify(moviesStored));
}

export async function deleteMovie(id){
    let movieStored = await getMoviesSave('@murasprime');

    let myMovies = movieStored.filter(item => {
        return(item.id !== id);
    });

    await AsyncStorage.setItem('@murasprime', JSON.stringify(myMovies));
}

export async function hasMovie(movie){
    let moviesStored = await getMoviesSave('@murasprime');

    const hasMovie = moviesStored.find(item => item.id === movie.id);

    if(hasMovie) return true;

    return false;
}