import * as React from 'react';
import { View, ScrollView, StyleSheet, Image, Text } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import {decode} from 'html-entities';
import { useAppDispatch, useAppSelector } from '../../common/hooks/reduxHooks';
import { fetchDetailMovieAsync, selectMovieDetail, selectMovieDetailLoading } from './movieDetail.slice';
import { RootStackParamList } from '../../app/App';
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
    movieWrapper: {
        flex: 1,
        alignItems: 'center'
    },
    movieContainer: {
        maxWidth: 1220,
        flex: 1,
    },
    movieDetail: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        gap: 20,
    },
    textContent: {
        flex: 1,
        gap: 20
    },
    moviePoster: {
        width: 360,
        height: 490,
    },
    movieInfo: {
        gap: 20
    },
    movieReview: {
        flexWrap: 'wrap',
        gap: 16
    },
    text: {
        color: '#fff',
        fontSize: 16,
    },
    textTitle: {
        fontSize: 20,
    },
    textBold: {
        fontWeight: 'bold',
    },
    userReview: {
        gap: 16,
        paddingHorizontal: 8
    }
})


type Props = NativeStackScreenProps<RootStackParamList, 'MovieDetail'>;

function MovieDetailScreen(props: Props) {
    const preloadDataMovie = props.route.params.movie

    const { mQL } = useMediaQuery();
      
    const dispatch = useAppDispatch();
    const movieDetail = useAppSelector(selectMovieDetail);
    const loading = useAppSelector(selectMovieDetailLoading);

    React.useEffect(() => {
        dispatch(fetchDetailMovieAsync(preloadDataMovie));
    }, [dispatch, preloadDataMovie]);

    return (
        <View style={styles.container}>

            <ScrollView style={styles.scrollContainer}>

                {!loading && (
                    <View style={styles.movieWrapper}>
                        <View style={styles.movieContainer}>
                            <View style={[styles.movieDetail, mQL({base: {flexDirection: 'column'}, md: {flexDirection: 'row'}})]}>
                                <Image
                                    source={{ uri: movieDetail?.poster }}
                                    style={styles.moviePoster}
                                />
                                <View style={styles.textContent}>
                                    <View style={styles.movieInfo}>
                                        <Text style={[styles.text, styles.textTitle, styles.textBold]}>{movieDetail?.title}</Text>
                                        <Text style={styles.text}>{decode(movieDetail?.description)}</Text>
                                        <Text style={styles.text}><Text style={styles.textBold}>Actor:</Text> {movieDetail?.actors?.map(actor => actor.name).join(', ')}</Text>
                                        <Text style={styles.text}><Text style={styles.textBold}>Keywords:</Text> {movieDetail?.keywords?.join(', ')}</Text>
                                    </View>
                                    <View  style={styles.movieReview}>
                                    <Text style={[styles.text, styles.textBold]}>Reviews:</Text>
                                    {
                                        movieDetail?.reviews?.map((review, index) => (
                                            <View key={index} style={styles.userReview}>
                                                <Text style={styles.text}>{review.author} - {review.date}</Text>
                                                <Text style={[styles.text, styles.textBold]}>{decode(review.title)}</Text>
                                                <Text style={styles.text}>Rate: {review.rate}</Text>
                                                <Text style={styles.text}>{decode(review.comment)}</Text>
                                            </View>
                                        ))
                                    }
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                )}

            </ScrollView>
        </View>
    );
}

export default MovieDetailScreen