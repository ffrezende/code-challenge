import express from 'express';
import cors from 'cors';
import compression from 'compression';
import bodyParser from 'body-parser';

import initialRoutes from './shared/routes/initialRoutes';

let app = express();

app.use(cors());
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app = initialRoutes(app);

export default app;