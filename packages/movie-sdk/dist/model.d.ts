declare class Movie {
    id: string;
    title: string;
    poster?: string | undefined;
    description?: string | undefined;
    actors?: Actor[] | undefined;
    reviews?: Review[] | undefined;
    keywords?: string[] | undefined;
    constructor(id: string, title: string, poster?: string | undefined, description?: string | undefined, actors?: Actor[] | undefined, reviews?: Review[] | undefined, keywords?: string[] | undefined);
}
declare class Actor {
    name: string;
    avatar: string;
    constructor(name: string, avatar: string);
}
declare class Review {
    author: string;
    title: string;
    rate: number;
    comment: string;
    date: string;
    constructor(author: string, title: string, rate: number, comment: string, date: string);
}
export { Movie, Actor, Review };
