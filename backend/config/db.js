import mongoose from 'mongoose';
import User from '../models/userModel.js';

const connectDB = async () => {
    try {
        //database Name
        const databaseName='chrono-tracker-server';
        const con = await mongoose.connect(`mongodb://127.0.0.1:27017/${databaseName}`, {
            // this normally would have useNewUrlParser, useUnifiedTopology, and useCreateIndex as true but this is done by default in this version of mongo
        });
        console.log(`Databse connected : ${con.connection.host}`)
    } catch (error) {
        console.error(`Error: ${error.message}`)
        process.exit(1)
    }
}

export default connectDB