import Shortener from '../models/Shortener';
import ShortenerRepository from '../repositories/ShortenerRepository';
import CreateShortCode from '../services/CreateShortCode';
import { getCustomRepository } from 'typeorm'

class CreateShortenerService {

    public async execute(url: string): Promise<string> {
        const shortenerRepository = getCustomRepository(ShortenerRepository);
        if (url === undefined) {
            throw Error('Not url valid!');
        }
        const code = CreateShortCode();
        const expires = '3600';
        const shortener = shortenerRepository.create({url, code, expires});

        await shortenerRepository.save(shortener);

        return shortener.code;
    }
}

export default CreateShortenerService;

