import express from 'express';
import userRouter from './routes/user_Route.js';
import postRouter from './routes/post_route.js';
import authRouter from './routes/auth_route.js';

const app = express();
app.use("/api/users", userRouter);
app.use("/api/posts", postRouter);
app.use("/api/auth", authRouter);

app.listen(8800, ()=>{
    console.log("Connected to backend!");
})