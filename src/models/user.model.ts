import mongoose from "mongoose";
import { IUser, UserSatus } from "../interfaces/user.interface";

const userSchema = new mongoose.Schema<IUser>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
    },
    status: {
        type: String,
        default: UserSatus.ACTIVE
    },
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "collections",
    },
  },
  { timestamps: true,
    versionKey: false
   }
);
const User = mongoose.model("user", userSchema);

export default User;
