import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv'
import connectDB from '../utils/db.js'
import userRoute from '../routes/user-routes.js'
import adminRoute from '../routes/admin-route.js'
import errorMiddleware from '../middlewares/error-middleware.js'
import paymentRoute from '../routes/payment.route.js';

dotenv.config();

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true
}
app.use(cors(corsOptions));

const PORT = process.env.PORT || 4000;

// User Api Routes
app.use("/api/v1/user", userRoute);

// Admin api routes
app.use("/api/v1/admin",adminRoute);

// Payment gateway routes
app.use("/api/v1/payment", paymentRoute);

app.use(errorMiddleware);

app.listen(PORT, () => {
    connectDB();
    console.log(`Server is running on port ${PORT}`);
})
