import express from 'express';
import router from './routers/Router.js';
import cors from 'cors';
import 'dotenv/config.js'

const PORT = 3000;

const app = express();

app.use(cors({ origin: 'http://localhost:5173' }))
app.use(express.json());

app.use('/', router);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
