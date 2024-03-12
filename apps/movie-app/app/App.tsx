import { NavigationContainer } from '@react-navigation/native';
import { NativeStackNavigationOptions, createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import SearchMoviesScreen from '../screens/searchMovies/searchMovies.screen';
import MovieDetailScreen from '../screens/movieDetail/movieDetail.screen';
import { store } from './store';
import { Movie } from '@movie-project/movie-sdk/dist/model';
import { HEADER_BACKGROUND_COLOR, TEXT_COLOR } from '../common/style';
import HeaderLogo from '../components/HeaderLogo';

export type RootStackParamList = {
  SeachMovies: undefined;
  MovieDetail: { movie: Movie };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const screenOptions: NativeStackNavigationOptions = {
  headerStyle: {
    backgroundColor: HEADER_BACKGROUND_COLOR,
  },
  headerTintColor: TEXT_COLOR,
  headerShadowVisible: false,
}

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="SeachMovies" screenOptions={screenOptions}>
          <Stack.Screen 
            name="SeachMovies" 
            component={SearchMoviesScreen}
            options={{ headerTitle: () => <HeaderLogo /> }}
          />
          <Stack.Screen 
            name="MovieDetail" 
            component={MovieDetailScreen} 
            options={({ route }) => ({ title: route.params.movie.title })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
