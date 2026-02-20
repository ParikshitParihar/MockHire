const express = require("express");
const { ENV } = require("./lib/env");
const { connectDB } = require("./lib/db");

// const PORT = 3000;

const app = express();

app.get("/", (req,res)=>{
    res.status(200).json({msg:"Success from api"})
})

const startServer = async () => {
    try {
        await connectDB();
        app.listen(ENV.PORT, () => {console.log("Server is running on PORT", ENV.PORT);});
    } catch (error) {
        console.log("Error starting the server",error);
    }
}

startServer();