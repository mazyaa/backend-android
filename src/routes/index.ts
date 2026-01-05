import { Application, Router } from 'express';
import mahasiswa from './mahasiswa';

const routes = (app: Application) => {
    const router = Router();

    app.use('/api', router); // default prefix for all routes

    // register mahasiswa routes
    mahasiswa(router);
}

export default routes;