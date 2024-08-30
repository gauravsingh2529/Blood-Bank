const mongoose = require("mongoose");

const inventorySchema = new mongoose.Schema(
  {
    inventoryTypes: {
      type: String,
      required: true,
      enum: ["in", "out"],
    },
    bloodGroup: {
      type: String,
      required: true,
      enum: ["O+", "O-", "AB+", "AB-", "A-", "A+", "A-", "B+", "B-"],
    },
    quantity: {
      type: Number,
      required: true,
    },
    org: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "userModel",
      required: [true, "Organisation is required"],
    },
    hospital: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "userModel",
      required: function () {
        return this.inventoryType === "out";
      },
    },
    donar: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "userModel",
      required: function () {
        return this.inventoryType === "in";
      },
    },
  },
  { versionKey: false, timestamps: true }
);

const inventoryModel = mongoose.model(
  "inventoryModel",
  inventorySchema,
  "Inventory"
);
module.exports = inventoryModel;
console.log("inventoryModel is ready to use");
