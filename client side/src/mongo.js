import mongoose from "mongoose";

// Define the schema
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true // Ensures no duplicate emails
    },
    password: {
        type: String,
        required: true,
    },
});

// Create the model
const User = mongoose.model("User", userSchema);

export default User;
