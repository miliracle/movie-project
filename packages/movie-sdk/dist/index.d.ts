import { Movie } from "./model";
declare class MovieSDK {
    private headers;
    private apiBaseUrl;
    constructor();
    searchMovies(query?: string): Promise<Movie[]>;
    getMovieDetail(id: string): Promise<Movie>;
}
export default MovieSDK;
