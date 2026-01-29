const express = require("express");
const { ENV } = require("./lib/env");

// const PORT = 3000;

const app = express();

console.log(ENV.PORT);
console.log(ENV.DB_URL);

app.get("/", (req,res)=>{
    res.status(200).json({msg:"Success from api"})
})

app.listen(ENV.PORT, () => {
    console.log("Server is running on PORT", ENV.PORT);
});