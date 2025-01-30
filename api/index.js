import express from "express";


const app = express();

// app.use(cors({
//     origin: 'http://localhost:5173',  // Your React dev origin
//     methods: ['GET', 'POST', 'OPTIONS'],
// }));

app.get("/retal", (req, res) => {
    req.body
    res.status(200).json("eslam")
})

app.listen(3000, () => {
    console.log("server is running on port 3000")
});