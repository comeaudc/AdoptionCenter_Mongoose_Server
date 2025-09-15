import express from "express";
import Mammal from "../models/mammalSchema.mjs";
const router = express.Router();

// Create
router
  .route("/")
  .post(async (req, res) => {
    try {
      // Perform Action
      let newMammal = await Mammal.create(req.body);

      // Return Response
      res.json(newMammal);
    } catch (err) {
      console.error(err.message);
      res.status(500).json({ msg: `❌ Error - ${err.message}` });
    }
  })
  // Read
  .get(async (req, res) => {
    try {
      let allMammals = await Mammal.find({});

      res.json(allMammals);
    } catch (err) {
      console.error(err.message);
      res.status(500).json({ msg: `❌ Error - ${err.message}` });
    }
  });

// Update

// Delete

export default router;
