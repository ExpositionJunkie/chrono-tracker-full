import Tracker from "../models/trackerModel.js";
import asyncHandler from "express-async-handler";

//getTrackers function to get all Trackers
export const getTrackers = asyncHandler(async (req, res) => {
  const trackers = await Tracker.find({});
  res.json(trackers);
});

//getTrackerById function to retrieve Tracker by id
export const getTrackersById = asyncHandler(async (req, res) => {
  const tracker = await Tracker.findById(req.params.id);

  //if Tracker id match param id send Tracker else throw error
  if (tracker) {
    res.json(tracker);
  } else {
    res.status(404).json({ message: "Tracker not found" });
    res.status(404);
    throw new Error("Tracker not found");
  }
});
