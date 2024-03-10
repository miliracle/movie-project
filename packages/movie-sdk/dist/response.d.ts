interface SearchMoviesResponse {
    ok: boolean;
    description: Description[];
    error_code: number;
}
interface Description {
    '#TITLE': string;
    '#YEAR': number;
    '#IMDB_ID': string;
    '#RANK': number;
    '#ACTORS': string;
    '#AKA': string;
    '#IMDB_URL': string;
    '#IMDB_IV': string;
    '#IMG_POSTER': string;
    photo_width: number;
    photo_height: number;
}
interface MovieDetailResponse {
    short: Short;
    imdbId: string;
}
interface Short {
    '@context': string;
    '@type': string;
    url: string;
    name: string;
    description: string;
    genre: string[];
    datePublished: string;
    actor: Actor[];
    director: Actor[];
    creator: Creator[];
    duration: string;
}
interface Creator {
    '@type': string;
    url: string;
    name?: string;
}
interface Actor {
    '@type': string;
    url: string;
    name: string;
}
export { SearchMoviesResponse, MovieDetailResponse, };
