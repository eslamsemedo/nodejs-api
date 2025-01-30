import express from "express";
import cors from 'cors';

const app = express();

// Enable CORS
app.use(cors({
    origin: 'https://new-retal.vercel.app', // Replace with your React app's URL
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
    credentials: true, // Allow cookies or authorization headers
}));

app.get("/retal", (req, res) => {
    // req.body
    res.status(200).json("eslam")
})

app.listen(3000, () => {
    console.log("server is running on port 3000")
});