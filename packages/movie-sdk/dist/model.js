var Movie = /** @class */ (function () {
    function Movie(title, poster, description, actors, reviews, keywords) {
        this.title = title;
        this.poster = poster;
        this.description = description;
        this.actors = actors;
        this.reviews = reviews;
        this.keywords = keywords;
    }
    return Movie;
}());
var Actor = /** @class */ (function () {
    function Actor(name, avatar) {
        this.name = name;
        this.avatar = avatar;
    }
    return Actor;
}());
var Review = /** @class */ (function () {
    function Review(name, avatar, rate, comment) {
        this.name = name;
        this.avatar = avatar;
        this.rate = rate;
        this.comment = comment;
    }
    return Review;
}());
export { Movie, Actor, Review };
