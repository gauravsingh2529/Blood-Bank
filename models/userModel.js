const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const userSchema = new mongoose.Schema(
  {
    role: {
      type: String,
      required: [true, "role is required"],
      enum: ["admin", "organization", "donar", "hospital"],
    },
    name: {
      type: String,
      required: function () {
        if (this.role === "donar" || this.role === "admin") {
          return true;
        }
        return false;
      },
    },
    organizationName: {
      type: String,
      required: function () {
        if (this.role === "organization") {
          return true;
        }
        return false;
      },
    },
    hospitalName: {
      type: String,
      required: function () {
        if (this.role === "hospital") {
          return true;
        }
        return false;
      },
    },
    email: {
      type: String,
      required: [true, "email is required"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "password  is required"],
      // set: (v) => bcrypt.hashSync(v, bcrypt.genSaltSync(10)),
    },
    website: {
      type: String,
    },
    address: {
      type: String,
      required: [true, "address is required"],
    },
    phone: {
      type: String,
      required: [true, "phone no  is required"],
    },
  },
  { timestamps: true, versionKey: false }
);

// userSchema.methods.validateFunction = (pass, dbPass) => {
//   return bcrypt.compareSync(pass, dbPass);
// };

const userModel = mongoose.model("userModel", userSchema, "user");
module.exports = userModel;
console.log("userModel is ready to use".bgBlack.white);
