import express from 'express';
import { getIp } from './src/infra/os.js';
const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());


const ip = await getIp();

app.use('/', (req, res) => {
    res.status(200).json({message: 'Hellow word! My Ip address is ' + ip})
})

app.listen(3000, () => {
    console.log('Server is runing...', ip);
});