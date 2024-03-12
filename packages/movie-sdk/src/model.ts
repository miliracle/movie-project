class Movie {
    constructor(
        public id: string,
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
        public author: string,
        public title: string,
        public rate: number,
        public comment: string,
        public date: string,
    ){}
}

export {
    Movie,
    Actor,
    Review
}