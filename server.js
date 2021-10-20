import connectDB from "./backend/config/db.js";
import userRoutes from "./backend/routes/userRoute.js";
import trackerRoutes from "./backend/routes/trackerRoute.js";
import express from "express";
import dotenv from "dotenv";

//https://medium.com/how-to-react/setup-mern-mongodb-express-js-react-js-and-node-js-environment-and-create-your-first-mern-7774df0fff19

//connect to database
connectDB();

//dotenv config
dotenv.config();

const app = express();

//Creating API with routes
app.use("/api/users", userRoutes);
app.use("/api/trackers", trackerRoutes);

const PORT = process.env.PORT || 5000;

//Express js listen method to run project on http://localhost:5000
app.listen(
  PORT,
  console.log(`App is running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
