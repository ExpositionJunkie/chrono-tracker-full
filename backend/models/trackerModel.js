import mongoose from "mongoose";
import Rating from "./ratingModel.js";

const trackerSchema = mongoose.Schema(
  {
    trackerName: {
      type: String,
      required: true,
      unique: true,
    },
    trackerType: {
      type: String,
      required: true,
    },
    startDate: {
      type: Date,
    },
    endDate: {
      type: Date,
    },
    hourlyRate: {
      type: Number,
      min: 0,
      max: 24,
      get: (v) => Math.round(v),
      set: (v) => Math.round(v),
    },
    noInterruptStartTime: {
      type: Date,
    },
    noInterruptEndTime: {
      type: Date,
    },
    userID: {
      type: String,
      required: true,
    },
    dontCare: {
      type: Boolean,
      required: true,
      default: false
    },
    data: []
  },
  {
    trimestamps: true,
  }
);

const Tracker = mongoose.model("Tracker", trackerSchema);

export default Tracker;
