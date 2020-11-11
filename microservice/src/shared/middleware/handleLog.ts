import { Request, Response, NextFunction } from 'express';

const handleLog = (req: Request, res: Response, next: NextFunction) => {
	let idLog: string | any;
	
	if (!req.header('idLog'))
		idLog = 'TODO: insert uuid';
	else
		idLog = req.header('idLog');

	res.header('idLog', idLog);

	next();
}

export default handleLog;