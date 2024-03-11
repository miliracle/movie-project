import { Image, View, Text, StyleSheet } from 'react-native';

interface MovieCardProps {
  poster: string,
  title: string,
  id: string,
}

const styles = StyleSheet.create({
  card: {
    width: 240,
    backgroundColor: '#1F1F1F',
    gap: 8,
  },
  cardImg: {
    height: 360,
    width: 'auto'
  },
  cardTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  }
})

const MovieCard = ({ poster, title }: MovieCardProps) => {
    return (
        <View style={styles.card}>
        <Image 
          source={{ uri: poster }}
          style={styles.cardImg}
        />
        <Text style={styles.cardTitle}>{title}</Text>
      </View>
    );
};


export default MovieCard