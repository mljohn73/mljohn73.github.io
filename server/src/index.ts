import cors from 'cors';
import express, {Express, Request, Response} from 'express';
import path from 'path';
// import postgresClient from './dao/connect';
// import { PostgresClient } from './types/dao/postgresClient.type';
import router from './routes/index';

// const client : PostgresClient  = new postgresClient()
const app: Express = express();
const root = path.resolve(__dirname, '..')
const hostname = '127.0.0.1';
const port = 3000;

app.use(cors({
  origin: 'http://localhost:5173'
}));

app.use('/static', express.static(path.join(root, 'assets/photos')))

app.get('/', (req: Request, res: Response) => {
  res.send("Hello World");
});

app.get('/*', router);

// app.get('/db', async (req: Request, res: Response) => {
//   await client.start();
//   res.send("Hello World");
// });

// app.get('/read', async (req: Request, res: Response) => {
//   const response = await client.read()
//   res.send(response);
// });

// app.get('/write', async (req: Request, res: Response) => {
//   await client.write();
//   res.send("Hello written");
// });

console.log(`Server running at http://${hostname}:${port}/`);
app.listen(port);