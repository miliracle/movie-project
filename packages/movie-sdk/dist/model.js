var Movie = /** @class */ (function () {
    function Movie(id, title, poster, description, actors, reviews, keywords) {
        this.id = id;
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
    function Review(author, title, rate, comment, date) {
        this.author = author;
        this.title = title;
        this.rate = rate;
        this.comment = comment;
        this.date = date;
    }
    return Review;
}());
export { Movie, Actor, Review };
