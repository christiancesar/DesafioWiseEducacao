import { Router } from 'express';
import shortenerRouter from './shortener.routes';
import accessSiteRouter from './accessSite.routes';
const routes = Router();

routes.use('/encurtador', shortenerRouter)

routes.use('/', accessSiteRouter);

export default routes;