import express from "express"
import userRouter from "./src/routes/users.routes.js"

const app = express();
const PORT = 8420;

app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.use("/users", userRouter)
app.use("/users", userRouter)

app.listen(PORT, ()=>{console.log("Server running...")});