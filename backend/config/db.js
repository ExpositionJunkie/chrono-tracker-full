import mongoose from "mongoose";
import User from "../models/userModel.js";
import Tracker from "../models/trackerModel.js";
import Rating from "../models/ratingModel.js";

const connectDB = async () => {
  try {
    //database Name
    const databaseName = "chrono-tracker-server";
    const con = await mongoose.connect(
      `mongodb://127.0.0.1:27017/${databaseName}`,
      {
        // this normally would have useNewUrlParser, useUnifiedTopology, and useCreateIndex as true but this is done by default in this version of mongo
      }
    );
    
    // ****** IMPORTANT ********
    //If you are having trouble during testing with "cannot overwrite "modelname" once...", uncomment the code below: 
    //mongoose.set("overwriteModels", true);

    console.log(`Databse connected : ${con.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
