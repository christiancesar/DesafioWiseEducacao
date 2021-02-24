import Shortener from '../model/Shortener'; 
import ShortenerRepository from '../repositories/ShortenerRepository';

class CreateShortenerService {
    private shortenerRepository: ShortenerRepository;

    constructor(shortenerRepository: ShortenerRepository) {
        this.shortenerRepository = shortenerRepository;
    }

    public execute (url: string): Shortener {
        if (url === undefined) {
            throw Error ('Not url valid!');
        }
        const shortener = this.shortenerRepository.create(url);
        return shortener;
    }    
}

export default CreateShortenerService;

