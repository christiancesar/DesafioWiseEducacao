import { Router } from 'express';
import ShortenerRepository from '../repositories/ShortenerRepository';
import CreateShortenerService from '../services/CreateShortService';
import { getCustomRepository } from 'typeorm'


const shortenerRouter = Router();


shortenerRouter.get('/', async(request, response) => {
    const shortenerRepository = getCustomRepository(ShortenerRepository);
    const shorteners = await shortenerRepository.find();
    return response.json(shorteners);
});

shortenerRouter.post('/', async(request, response) => {
    try {
        const { url } = request.body;

        const createShortener = new CreateShortenerService();
        const shortener = await createShortener.execute(url);
        return response.json(`${request.protocol}://${request.hostname}:${request.socket.localPort}/${shortener}`);
    } catch (err) {
        return response.status(400).json({ error: err.message });
    }

});

export default shortenerRouter;