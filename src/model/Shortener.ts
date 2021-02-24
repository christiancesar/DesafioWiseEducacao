import CreateShortCode from '../services/CreateShortCode';

class Shortener {
    url: string;
    shortCode: string;
    expira: string;

    
    constructor(url: string) {
        this.url = url;
        this.shortCode = CreateShortCode();
        this.expira = '3600'; 
    }
    
}

export default Shortener;