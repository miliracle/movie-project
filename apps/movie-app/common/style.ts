import { StyleSheet } from 'react-native';

const BACKGROUND_COLOR = '#1F1F1F'
const HEADER_BACKGROUND_COLOR = '#141414'
const TEXT_COLOR = '#fff'

export {
  BACKGROUND_COLOR,
  TEXT_COLOR,
  HEADER_BACKGROUND_COLOR
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#141414',
      padding: 16,
    },
    searchContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#2F2F2F',
      paddingHorizontal: 16,
      borderRadius: 4,
      marginBottom: 24,
    },
    searchInput: {
      flex: 1,
      height: 48,
      paddingHorizontal: 16,
      color: '#fff',
      fontSize: 16,
      borderRadius: 4,
    },
    searchButton: {
      backgroundColor: '#E50914',
      paddingVertical: 12,
      paddingHorizontal: 16,
      borderRadius: 4,
      marginLeft: 16,
    },
    searchButtonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
    },
    movieList: {
      flexGrow: 1,
    },
    movieCard: {
      backgroundColor: '#1F1F1F',
      borderRadius: 4,
      overflow: 'hidden',
      marginBottom: 16,
    },
    moviePosterWrapper: {
      width: 120,
      height: 180,
      overflow: 'hidden',
    },
    moviePoster: {
      width: '100%',
      height: '100%',
    },
    movieDetails: {
      flex: 1,
      paddingHorizontal: 16,
      paddingVertical: 12,
    },
    movieTitle: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
    },
  });

  export default styles