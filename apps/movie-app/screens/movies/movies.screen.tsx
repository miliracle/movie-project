import * as React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { selectMovies, selectLoading, fetchMoviesAsync } from './movies.slice';
import { useAppDispatch, useAppSelector } from '../../common/hooks/reduxHooks';
// import styles from '../../common/style';
import SearchBar from '../../components/SearchBar';
import MovieCard from '../../components/MovieCard';
import { useState } from 'react';
import useMediaQuery from '../../common/hooks/useMediaQuery';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1F1F1F',
  },
  scrollContainer: {
    flex: 1,
    padding: 20,
  },
  listWrapper: {
    alignItems: 'center'
  },
  listContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    gap: 20,
  },
})

function MoviesScreen() {
  const { mQ } = useMediaQuery({
    base: 0,
    sm: 768,
    md: 992,
    lg: 1200,
    xl: 1400,
  });

  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };
  const dispatch = useAppDispatch();
  const movies = useAppSelector(selectMovies);
  const loading = useAppSelector(selectLoading);

  React.useEffect(() => {
    dispatch(fetchMoviesAsync(searchQuery));
  }, [dispatch, searchQuery]);

  return (
    <View style={styles.container}>
      <View>
        <SearchBar onSearch={handleSearch} />
      </View>
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.listWrapper}>
          <View style={
            { ...styles.listContainer, 
              width: mQ([240, 760, 760, 1020, 1280]) 
            }}>
              {!loading && movies.map((movie) => <MovieCard
                key={movie.title}
                id={movie.title}
                poster={movie.poster || ''}
                title={movie.title} />)}
            </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default MoviesScreen