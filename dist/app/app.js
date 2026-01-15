"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.text());
//router 
const userRouter = express_1.default.Router();
const studentRouter = express_1.default.Router();
app.use('/api/v1', userRouter);
app.use('/api/v1', studentRouter);
userRouter.get('/users', (req, res) => {
    console.log('user router called');
    res.send('user list');
});
studentRouter.get('/students', (req, res) => {
    try {
        res.send('student list');
    }
    catch (err) {
        res.status(500).send('internal server error');
    }
});
//milleware
const loggerMiddleware = (req, res, next) => {
    req.body = { name: 'animes barman' };
    next();
};
app.get('/user', loggerMiddleware, (req, res) => {
    const name = req.body;
    console.log(name);
    res.send(`Hello, ${name.name}`);
});
app.get('/', (req, res) => {
    res.send('Hello, World! this is my frist express and type script server');
});
exports.default = app;
