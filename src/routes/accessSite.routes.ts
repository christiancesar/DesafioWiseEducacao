import { Router } from 'express';
import ShortenerRepository from '../repositories/ShortenerRepository';
import { getCustomRepository } from 'typeorm'

const accessSiteRouter = Router();

accessSiteRouter.get('/:code', async (request, response) => {
    const { code } = request.params;
    try {
        const shortenerRepository = getCustomRepository(ShortenerRepository);

        const shortener = await shortenerRepository.findSite(code);
        return response.json(shortener);
    } catch (err) {
        return response.status(404).json({ error: err.message })

    }
});

export default accessSiteRouter;