import mongoose from "mongoose";

const mammalSchema = new mongoose.Schema({
  name: { type: String, required: true },
  species: { type: String, required: true },
  age: { type: Number, required: true },
  habitat: { type: String, required: true },
});

export default mongoose.model("Mammal", mammalSchema);
