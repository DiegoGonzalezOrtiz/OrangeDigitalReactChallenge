import express from 'express';
import multiMediaRouter from './routes/multiMedia'


const cors= require('cors');
const app = express();
const path= require('path');

app.use(express.json());
app.use(cors());

app.use(express.static(path.join(__dirname, 'build')))

const PORT= 3000

app.get('/',(_req, res) =>{
    res.sendFile(path.resolve()+'/orange-digital/build/index.html')
})

app.use('/api/multiMedia', multiMediaRouter)
app.listen(PORT, ()=>{
    console.log('Server running on port '+ PORT);
})