class MoviesSDK {
    private url: string
    constructor(url: string) {
        this.url = url
    }

    static test(): string {
        return 'movie sdk'
    }
}

export default MoviesSDK