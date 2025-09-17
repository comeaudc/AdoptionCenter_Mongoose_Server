import mongoose from "mongoose";

const avianSchema = new mongoose.Schema({
  name: { type: String, required: true },
  breed: { type: String, required: true },
  age: { type: Number, min: 0, required: true },
  habitat: [String],
  maxElevation: { type: Number, min: 0, required: true },
});

avianSchema.index({breed: 1});

export default mongoose.model("Avian", avianSchema);