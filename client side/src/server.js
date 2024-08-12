import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import User from "./mongo.js"; // Import the User model

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.post("/", async (req, res) => {
    const { email } = req.body;

    try {
        const user = await User.findOne({ email: email });

        if (user) {
            res.json("exist");
        } else {
            res.json("notexist");
        }
    } catch (e) {
        res.json("fail");
    }
});

app.post("/signup", async (req, res) => {
    const { email, password } = req.body;

    const data = {
        email: email,
        password: password,
    };

    try {
        const user = await User.findOne({ email: email });

        if (user) {
            res.json("exist");
        } else {
            await User.create(data); // Create a new document using the User model
            res.json("signup successful");
        }
    } catch (e) {
        res.json("fail");
    }
});

app.listen(8000, () => {
    console.log("Server is running on port 8000");
});

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/shopping-user-db", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log("MongoDB connected");
})
.catch((error) => {
    console.log('Failed to connect to MongoDB', error);
});
