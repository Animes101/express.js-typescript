import { Server } from 'node:http';
import app from './app'


let server: Server;



async function startServer(){

     server= app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});


}


startServer();






