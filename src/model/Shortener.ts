import CreateShort from '../services/CreateShort';

class Shortener {
    url: string;
    shortCode: string;
    expira: string;

    constructor(url: string) {
        this.url = url;
        this.shortCode = CreateShort();
        this.expira = '3600'; 
    }
}

export default Shortener;