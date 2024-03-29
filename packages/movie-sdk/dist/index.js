var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { Actor, Movie, Review } from "./model";
var MovieSDK = /** @class */ (function () {
    function MovieSDK() {
        this.apiBaseUrl = 'https://search.imdbot.workers.dev/';
        this.headers = new Headers();
        this.headers.append('Connection', 'keep-alive');
    }
    MovieSDK.prototype.searchMovies = function (query) {
        return __awaiter(this, void 0, void 0, function () {
            var response, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch("".concat(this.apiBaseUrl, "?q=").concat(query), {
                            headers: this.headers,
                        })];
                    case 1:
                        response = _a.sent();
                        if (!response.ok) {
                            throw new Error('Failed to search movies');
                        }
                        return [4 /*yield*/, response.json()];
                    case 2:
                        data = _a.sent();
                        return [2 /*return*/, data.description.map(function (movie) { return new Movie(movie["#IMDB_ID"], movie["#TITLE"], movie["#IMG_POSTER"]); })];
                }
            });
        });
    };
    MovieSDK.prototype.getMovieDetail = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var response, data, movie, actor, reviews;
            var _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0: return [4 /*yield*/, fetch("".concat(this.apiBaseUrl, "?tt=").concat(id), {
                            headers: this.headers,
                        })];
                    case 1:
                        response = _d.sent();
                        if (!response.ok) {
                            throw new Error('Failed to fetch detail movies by id: ' + id);
                        }
                        return [4 /*yield*/, response.json()];
                    case 2:
                        data = _d.sent();
                        movie = data.short;
                        actor = data.short.actor.map(function (rawActor) { return new Actor(rawActor.name, rawActor.url); });
                        reviews = movie.review ? [new Review((_a = movie.review.author) === null || _a === void 0 ? void 0 : _a.name, (_b = movie.review) === null || _b === void 0 ? void 0 : _b.name, (_c = movie.review.reviewRating) === null || _c === void 0 ? void 0 : _c.ratingValue, movie.review.reviewBody, movie.review.dateCreated)] : [];
                        return [2 /*return*/, new Movie(data.imdbId, movie.name, movie.image, movie.description, actor, reviews, movie.keywords.split(','))];
                }
            });
        });
    };
    return MovieSDK;
}());
export default MovieSDK;
