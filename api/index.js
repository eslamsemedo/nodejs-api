import express from "express";


const app = express();

app.get("/eslam", (req, res) => {
    res.status(200).json("eslam")
})

app.listen(3000, () => {
    console.log("server is running on port 3000")
});