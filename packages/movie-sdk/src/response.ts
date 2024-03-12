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
    image: string;
    description: string;
    genre: string[];
    datePublished: string;
    actor: Actor[];
    director: Actor[];
    creator: Creator[];
    duration: string;
    review: Review;
    keywords: string;
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

interface Review {
    '@type': string;
    itemReviewed: ItemReviewed;
    author: Author;
    dateCreated: string;
    inLanguage: string;
    name: string;
    reviewBody: string;
    reviewRating: ReviewRating;
}

interface ItemReviewed {
    '@type': string;
    url: string;
}

interface Author {
    '@type': string;
    name: string;
}

interface ReviewRating {
    '@type': string;
    worstRating: number;
    bestRating: number;
    ratingValue: number;
}

export {
    SearchMoviesResponse,
    MovieDetailResponse,
}