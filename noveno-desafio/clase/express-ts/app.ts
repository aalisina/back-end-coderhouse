import express from 'express';

import {CommonRoutesConfig} from './rutas/common.route.config'
import {UsersRoutes} from './rutas/users.route.config'

//const routes: Array<CommonRoutesConfig> = [];

// rest of the code remains same
const app = express();

const routes = new UsersRoutes(app);

const PORT = 8000;
app.get('/', (req, res) => res.send('Express + TypeScript Server'));
app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});