import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import MoviesScreen from '../screens/movies/movies.screen';
import MovieDetailScreen from '../screens/movieDetail/movieDetail.screen';
import { store } from './store';

const Stack = createNativeStackNavigator();

export default function App() {  
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={MoviesScreen} />
          <Stack.Screen name="Details" component={MovieDetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>    
  );
}
