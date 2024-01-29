import { configDotenv } from 'dotenv';
import dotenv from 'dotenv';
import express, { NextFunction, Request, Response } from "express";
import bodyParser from 'body-parser';


configDotenv();

const app = express();
const PORT = 3000;


app.set('view engine', 'ejs');
app.use(express.static('public'));


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

app.use(express.json());
app.use(bodyParser.json());


app.use((err: Error, req: Request, res: Response) => {
  res.status(500).json({ error: 'Internal Server Error' });
});
