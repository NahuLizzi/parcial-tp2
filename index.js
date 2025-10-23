import express from "express"

const app = express();
const PORT = 8420;



app.get("/", (req, res)=>{
    res.send("Ruta base")
});



app.listen(PORT, ()=>{console.log("Server running...")});