import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI;

export const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log("DB Connected");
    } catch (error) {
        console.error("DB Connection Failed:", error.message);
    }
};