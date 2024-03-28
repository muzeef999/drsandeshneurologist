import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Musr Provide a username"],
    },
    email: {
      type: String,
      unique: true,
      require: [true, "Musr Provide  email"],
    },
    password: {
      type: String,
      require: [true, "Musr Provide  password"],
    },
    isVerfied: {
      type: Boolean,
      default: false,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const User = mongoose.models?.users || mongoose.model("users", userSchema);

export default User;
