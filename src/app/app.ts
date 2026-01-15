import express, { NextFunction } from 'express';
import { Request, Response } from 'express';

const app= express();




app.use(express.json());
app.use(express.text())


//router 

const userRouter= express.Router();
const studentRouter=express.Router();



app.use('/api/v1', userRouter);
app.use('/api/v1', studentRouter);



    userRouter.get('/users', (req:Request, res:Response, next:NextFunction)=>{


        try{
            res.send(sdfasdfasdf)
        }catch(err){

            next(err)
        }
    

    
    })

studentRouter.get('/students', (req:Request, res:Response)=>{
    try{
        res.send('student list')

    }catch(err){
        res.status(500).send('internal server error')
    }

    
})



//milleware

const loggerMiddleware= (req:Request, res:Response, next:NextFunction)=>{


    req.body={name:'animes barman'};

    next();
}


app.get('/user', loggerMiddleware, (req:Request, res:Response)=>{


    const name=req.body

    console.log(name);

    res.send(`Hello, ${name.name}`);
})



app.get('/', (req :Request, res:Response) => {
    res.send('Hello, World! this is my frist express and type script server');
});








// 404 handler – MUST be last
app.use((req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});


//global error handler

app.use((err:Error, req:Request, res:Response, next:NextFunction)=>{


    res.status(500).send('something went wrong')

});










export default app;