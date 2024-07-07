import mongoose from "mongoose";

const { Schema } = mongoose;

const metaSchema = new Schema(
  {
    _id: {
      type: String,
      require: true,
      unique: true,
    },
    title: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    keywords: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

let Meta;

try {
  Meta = mongoose.model("meta");
} catch {
  Meta = mongoose.model("meta", metaSchema);
}

export default Meta;
