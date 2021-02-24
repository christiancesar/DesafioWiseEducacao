import { Router } from 'express';
import ShortenerRepository from '../repositories/ShortenerRepository'; 

const accessSiteRouter = Router();
const shortenerRepository = new ShortenerRepository();

accessSiteRouter.get('/:code', (request, response) =>{
    const code = request.params;
    const shortener = shortenerRepository.findSite(String(code))
    return response.json(shortener);
});

export default accessSiteRouter;