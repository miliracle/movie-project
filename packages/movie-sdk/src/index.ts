import { Actor, Movie } from "./model";
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
        return data.description.map(movie => new Movie(movie["#TITLE"], movie["#IMG_POSTER"]))
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
        return new Movie(movie.name, "" ,movie.description, actor, [], []);
    }
}

export default MovieSDK