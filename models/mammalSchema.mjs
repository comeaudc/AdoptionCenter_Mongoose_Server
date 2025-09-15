import mongoose from "mongoose";

const mammalSchema = new mongoose.Schema({
  name: { type: String, required: true },
  species: { type: String, required: true },
  age: { type: Number, min: 0, required: true },
  habitat: {
    type: String,
    enum: {
      values: [
        "tropical",
        "desert",
        "domesticated",
        "prarie",
        "temperate",
        "polar",
        "aquatic",
      ],
      message: "{VALUE} is not supported",
    },
    required: true,
  },
});

export default mongoose.model("Mammal", mammalSchema);
