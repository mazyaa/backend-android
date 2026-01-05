import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { Application } from 'express'; // type inside application express is a object with free structure (key: string, value: any) 

const loadMiddlewares = (app: Application) => {
    app.use(cors());

    app.use(express.json()); // for parsing application/json (AJAX requests)

    app.use(morgan('combined')); // logging middleware

} 

export default loadMiddlewares;