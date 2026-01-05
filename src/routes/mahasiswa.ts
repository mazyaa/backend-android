import { Router } from "express";
import { getMahasiswaHandler } from "../controllers/mahasiswaController";

export default (app: Router) => { // use anonim function for dynamic import
    const router = Router();

    app.use('/mahasiswa', router); // prefix all routes with /mahasiswa

    router.get('/', getMahasiswaHandler);
}


