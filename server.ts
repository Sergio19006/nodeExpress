import { movie } from "./types/movie";
import { router as moviesRouter } from "./routes/moviesRouter";
import express from 'express';
const app: express.Application = express();

app.use(express.json());
app.use('/movies', moviesRouter);

const PORT = 8081;
const HOST = '0.0.0.0';

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);