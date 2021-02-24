import { Router } from 'express';
import ShortenerRepository from '../repositories/ShortenerRepository'; 


const shortenerRouter = Router();
const shortenerRepository = new ShortenerRepository();

shortenerRouter.post('/', (request, response) => {
    const { url } = request.body;
    if (url === undefined) {
        return response.status(400).json({message: "Bad request!"});
    }
    else {
        const shortener = shortenerRepository.create(url);    
        return response.json(shortener);    
    }
    
});

export default shortenerRouter;