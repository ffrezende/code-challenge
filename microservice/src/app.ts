import express from 'express';
import cors from 'cors';
import compression from 'compression';

import initialRoutes from './shared/routes/initialRoutes';

let app = express();

app.use(cors());
app.use(compression());

app = initialRoutes(app);

export default app;