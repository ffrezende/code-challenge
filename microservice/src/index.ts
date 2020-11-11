import app from './app';
import initDB from './infra/';

const port = 3001;
initDB();
app.listen(port, async () => console.log(`Server runing port: ${port}`));
