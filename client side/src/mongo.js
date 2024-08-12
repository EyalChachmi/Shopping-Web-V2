import mongoose from "mongoose";

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

// Define the schema
const newSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
});

// Create the model
const collection = mongoose.model("Collection", newSchema).createCollection();

// Export the model
export default collection;
