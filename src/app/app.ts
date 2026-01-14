import express from 'express';
import { Request, Response } from 'express';




const app= express();


app.use(express.json());
app.use(express.text())

app.get('/', (req :Request, res:Response) => {
    res.send('Hello, World! this is my frist express and type script server');
});


export default app;