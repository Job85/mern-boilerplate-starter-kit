import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());


app.get('/', (req: Request, res: Response) => {
    res.json({ message: 'This is root!' })
});

app.listen(PORT, () => {
    console.log(`Express server listening on port ${PORT}`)
});