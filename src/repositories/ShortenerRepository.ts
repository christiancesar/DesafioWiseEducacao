import Shortener from '../model/Shortener';

class ShortenerRepository{
    private shorts: Shortener[];

    constructor() {
        this.shorts = [];
    }

    public create(url: string): Shortener {
        const short = new Shortener(url);
        this.shorts.push(short);
        return short;
    }

    public all (): Shortener[] {
        return this.shorts;
    }
    public findSite(code: String): Shortener | null {
        const shortener = this.shorts.find(short => {
            short.shortCode === code
        });
        return shortener || null;
    }
}

export default ShortenerRepository;