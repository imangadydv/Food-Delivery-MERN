import express from "express"
import dotenv from "dotenv";
import connectDb from "./db/db.js"; 
dotenv.config();
const app = express();

const PORT=process.env.PORT || 5000;

app.get('/',(req,res)=>{
res.send("hi there welcome to your study class");
})


app.listen(PORT,()=>{
console.log(`server is running on port ${PORT}`);
connectDb();
});
