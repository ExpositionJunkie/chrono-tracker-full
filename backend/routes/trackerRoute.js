import {
  getTrackers,
  getTrackersById,
} from "../controllers/trackerController.js";
import express from "express";
const router = express.Router();

//express router method to create route for getting all trackers
router.route("/").get(getTrackers);

//express router method to create route for getting trackers by id
router.route("/:id").get(getTrackersById);

export default router;
