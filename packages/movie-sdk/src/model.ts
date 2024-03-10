class Movie {
    constructor(
        public title: string,
        public poster?: string,
        public description?: string,
        public actors?: Actor[],
        public reviews?: Review[],
        public keywords?: string[]
    ){}
}

class Actor {
    constructor(
        public name: string,
        public avatar: string
    ){}
}

class Review {
    constructor(
        public name: string,
        public avatar: string,
        public rate: number,
        public comment: string,
    ){}
}

export {
    Movie,
    Actor,
    Review
}