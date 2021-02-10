import {CommonRoutesConfig} from './common.route.config';
import express from 'express';

export class UsersRoutes extends CommonRoutesConfig {
    
    constructor(app: express.Application) {

        super(app, 'welcome typress with express...');
    }

    configureRoutes() {
     
    this.app.route(`/users`)
    .get((req: express.Request, res: express.Response) => {
        res.status(200).send(this.getName());
    })
    .post((req: express.Request, res: express.Response) => {
        res.status(200).send(`Post to users`);
    })
    
    this.app.route(`/fecha`).get((req: express.Request, res: express.Response)=>{
     res.send('Ejemplo')
    })

  

        return this.app;
    }

}