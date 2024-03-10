declare class Movie {
    title: string;
    poster?: string | undefined;
    description?: string | undefined;
    actors?: Actor[] | undefined;
    reviews?: Review[] | undefined;
    keywords?: string[] | undefined;
    constructor(title: string, poster?: string | undefined, description?: string | undefined, actors?: Actor[] | undefined, reviews?: Review[] | undefined, keywords?: string[] | undefined);
}
declare class Actor {
    name: string;
    avatar: string;
    constructor(name: string, avatar: string);
}
declare class Review {
    name: string;
    avatar: string;
    rate: number;
    comment: string;
    constructor(name: string, avatar: string, rate: number, comment: string);
}
export { Movie, Actor, Review };
