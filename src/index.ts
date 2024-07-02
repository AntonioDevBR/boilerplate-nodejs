import express from 'express';
const app = express();

app.get('/', (req: express.Request, res: express.Response) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log(`Example app listening at http://localhost:3000`);
});
