import Shortener from '../model/Shortener';

class ShortenerRepository{
    private shorts: Shortener[];

    constructor() {
        this.shorts = [];
    }

    public create(url: string) {
        const short = new Shortener(url);
        this.shorts.push(short);
        return short;
    }
    public findSite(code: String): Shortener | null {
        const shortener = this.shorts.find(short => {
            short.shortCode == code
        });
        return shortener || null;
    }
}

export default ShortenerRepository;