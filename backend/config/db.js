import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://kanagoamol4:amol123@food-order01.53brp.mongodb.net/').then(() => console.log("DB Connected"))

}

