import express from 'express'
import cors from 'cors';
import 'dotenv/config';
import cookieParser from 'cookie-parser';
import connectDB from './config/mongodb.js';
import authRouter from './routes/authRoutes.js';
import userRouter from './routes/userRoutes.js';


const app = express()
const port = process.env.PORT || 4000

// Connect MongoDB
connectDB();

// Allow frontend origin for API access
const allowedOrigins = ['http://localhost:5173']


// middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin:allowedOrigins, 
credentials: true }));



//API endpoints
app.get("/", (req, res) => {
  res.send("MERN Auth Backend is Live 🚀");
});
app.use("/api/auth", authRouter);
app.use("/api/user",userRouter)



//server listener or server binding
app.listen(port,()=>{
    console.log(`server running in http://localhost:${port}`)
})