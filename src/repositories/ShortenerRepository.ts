import Shortener from '../models/Shortener';
import { EntityRepository, getCustomRepository, Repository } from 'typeorm';

@EntityRepository(Shortener)
class ShortenerRepository extends Repository<Shortener> {

    public async findSite(code: string): Promise<string> {

        const shortener = await this.findOne({
            where: { code }
        });
        if (shortener === undefined) {
            throw new Error("Site not found!");
            
        }
        return shortener.url;
    }
}

export default ShortenerRepository;