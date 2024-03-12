import { Actor, Movie, Review } from "./model";
import { MovieDetailResponse, SearchMoviesResponse } from "./response";

class MovieSDK {
    private headers: Headers;
    private apiBaseUrl = 'https://search.imdbot.workers.dev/'

    constructor() {
        this.headers = new Headers();
        this.headers.append('Connection', 'keep-alive');
    }

    async searchMovies(query?: string): Promise<Movie[]> {
        const response = await fetch(`${this.apiBaseUrl}?q=${query}`, {
            headers: this.headers,
        });

        if (!response.ok) {
            throw new Error('Failed to search movies');
        }

        const data = await response.json() as SearchMoviesResponse;
        return data.description.map(movie => new Movie(movie["#IMDB_ID"], movie["#TITLE"], movie["#IMG_POSTER"]))
    }

    async getMovieDetail(id: string): Promise<Movie>  {
        const response = await fetch(`${this.apiBaseUrl}?tt=${id}`, {
            headers: this.headers,
        });

        if (!response.ok) {
            throw new Error('Failed to fetch detail movies by id: ' + id);
        }

        const data = await response.json() as MovieDetailResponse;
        const movie = data.short;
        const actor = data.short.actor.map(rawActor => new Actor(rawActor.name, rawActor.url))
        const reviews = movie.review ? [new Review(movie.review.author.name, movie.review.name, movie.review.reviewRating.ratingValue, movie.review.reviewBody, movie.review.dateCreated)]: []
        return new Movie(data.imdbId, movie.name, movie.image ,movie.description, actor, reviews, movie.keywords.split(','));
    }
}

export default MovieSDK