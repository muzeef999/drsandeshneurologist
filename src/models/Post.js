import mongoose from "mongoose";

const { Schema } = mongoose;

const postSchema = new Schema(
  {
    img: {
      type: String,
      require: true,
    },
    content: {
      type: String,
      require: true,
    },
    username: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

let Post;

try {
  Post = mongoose.model("post");
} catch {
  Post = mongoose.model("post", postSchema);
}

export default Post;
