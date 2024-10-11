import mongoose from "mongoose";

const connectDB = async () => {
    try {
        // Connecting database 
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log('Database connected successfully...');
        
    } catch(error) {
        console.error(error)
    }
}

export default connectDB;