const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    resetToken: String,
    expireToken: Date,
    pic: {
      type: String,
      default:
        "https://res.cloudinary.com/demo/image/upload/w_150,h_150,c_thumb,g_face/r_20/e_sepia/l_cloudinary_icon_blue,g_south_east,x_5,y_5,w_50,o_60,e_brightness:200/a_10/front_face.png",
    },
    followers: [{ type: ObjectId, ref: "User" }],
    following: [{ type: ObjectId, ref: "User" }],
  },
  { timestamps: true }
);

mongoose.model("User", userSchema);
