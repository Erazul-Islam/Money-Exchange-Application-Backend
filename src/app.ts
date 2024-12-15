import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import globalErrorHandler from './app/modules/middleWare/globalErrorHandler';
import notFound from './app/modules/middleWare/notFound';
import router from './app/routes/route';

const app: Application = express()

const corsOptions = {
    origin: ['http://localhost:5173',], 
    credentials: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type,Authorization' 
};

app.use(express.json())
app.use(cors(corsOptions))

app.use('/api', router);

console.log(process.cwd())

app.use(globalErrorHandler)
app.use(notFound);

export default app