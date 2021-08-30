import express from 'express';
import { getIp } from './src/infra/os.js';
const app = express();

const ip = await getIp();

app.use('/', (req, res) => {
    res.send('Hellow word! My Ip address is ' + ip);
})

app.listen(3000, () => {
    console.log('Server is runing...', ip);
});