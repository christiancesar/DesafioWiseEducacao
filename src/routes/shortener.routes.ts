import { Router } from 'express';
import ShortenerRepository from '../repositories/ShortenerRepository';
import CreateShortenerService from '../services/CreateShortService';


const shortenerRouter = Router();
const shortenerRepository = new ShortenerRepository();

shortenerRouter.get('/', (request, response) => {
    const shorteners = shortenerRepository.all();
    return response.json(shorteners);
});

shortenerRouter.post('/', (request, response) => {
    try {
        const { url } = request.body;
        const createShortener = new CreateShortenerService(shortenerRepository);
        const shortener = createShortener.execute(url);
        return response.json(shortener);
    } catch (err) {
        return response.status(400).json({ error: err.message });
    }

});

export default shortenerRouter;