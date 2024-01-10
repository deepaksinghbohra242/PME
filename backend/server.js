const express = require('express');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const userRouter = require('./route/UserRoute');
const db = require('./config/database');

dotenv.config();
const app = express();

app.use(cookieParser());    
app.use(express.json());

app.use(cors({
    origin : 'http://localhost:5173',
    credentials : true
}));

app.use('/api/user', userRouter);

const PORT = process.env.PORT || 4000;
app.listen(PORT , console.log(`server is running at ${PORT}`));