import * as React from 'react';
import { View, ScrollView, StyleSheet, Pressable } from 'react-native';
import { selectMovies, selectLoading, fetchMoviesAsync } from './searchMovies.slice';
import { useAppDispatch, useAppSelector } from '../../common/hooks/reduxHooks';
import SearchBar from '../../components/SearchBar';
import MovieCard from '../../components/MovieCard';
import { useState } from 'react';
import useMediaQuery from '../../common/hooks/useMediaQuery';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../app/App';
import { Movie } from '@movie-project/movie-sdk/dist/model';
import LoadingSpinner from '../../components/LoadingSpinner';
import { BACKGROUND_COLOR } from '../../common/style';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR,
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

type Props = NativeStackScreenProps<RootStackParamList, 'SeachMovies'>;

function SearchMoviesScreen({ navigation }: Props) {
  const { mQ } = useMediaQuery();

  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };
  const dispatch = useAppDispatch();
  const movies = useAppSelector(selectMovies);
  const loading = useAppSelector(selectLoading);

  function goToMovieDetail(movie: Movie) {
    navigation.navigate('MovieDetail', { movie })
  }

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
          <View style={[styles.listContainer, {
            width: mQ([240, 760, 760, 1020, 1280])
          }]}>
            {loading ?
              <LoadingSpinner /> :
              movies.map((movie) =>
                <Pressable
                  key={movie.id}
                  onPress={() => goToMovieDetail(movie)}
                >
                  <MovieCard
                    key={movie.id}
                    id={movie.title}
                    poster={movie.poster || ''}
                    title={movie.title} />
                </Pressable>
              )}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default SearchMoviesScreen