import express from 'express';
import cors from 'cors';
import messages from './data.json';
import fs from 'fs';

const app = express();
const router = express.Router();

app.use(cors());
app.disable('x-powered-by');

app.use((req, res, next) => {
    console.log('Mi api');
    next();
})

router.get('/', (req, res) => {
    res.json({status: 'OK', data: 'Hello World'})
});

router.get('/messages', (req, res) => {
    res.json({status: 'OK', data: messages})
});

app.use(router);

app.listen(3000, () => {
    console.log('Listening in port 3000');
});
