import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import exampleRoute from "./routes/exampleRoute";
import errorHandler from './middleware/errorHandler';

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/example', exampleRoute);

app.get('/', (req: Request, res: Response) => {
    res.json({ message: 'This is root!' })
});

// Global error handling middleware
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Express server listening on port ${PORT}`)
});