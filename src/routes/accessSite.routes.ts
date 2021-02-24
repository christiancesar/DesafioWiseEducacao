import { Router } from 'express';
import ShortenerRepository from '../repositories/ShortenerRepository'; 

const accessSiteRouter = Router();
const shortenerRepository = new ShortenerRepository();

accessSiteRouter.get('/code', (request, response) =>{
    const { shortCode} = request.params;
    const shortener = shortenerRepository.findSite(shortCode)
    return response.json(shortener?.url);
});

export default accessSiteRouter;