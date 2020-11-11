import { Router, Request, Response, NextFunction } from 'express';
import authenticationRoute from './authentication';

const initialRoutes = (app: any): any => {
    const router = Router();

    router.get('/', (req, res) => res.json({ message: 'Api V1' }));

    app.use((req: Request, res: Response, next: NextFunction) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
        res.header('Access-Control-Allow-Methods', '*');
        next();
    });

    app.use('/api/authentication', router, authenticationRoute);

    return app;
}

export default initialRoutes;