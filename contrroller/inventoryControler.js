const { decode } = require("jsonwebtoken");
const inventoryModel = require("../models/inventoryModel");
const userModel = require("../models/userModel");

//create inventory
const createInevtoryControllerl = async (req, res) => {
  try {
    const { email, inventoryType } = req.body.email;
    const user = userModel.findOne({ email });
    if (!user) {
      return new Error("user not found");
    }
    if (inventoryType === "in" && user.role !== donar) {
      throw new Error("not a donar account");
    }
    if (inventoryType === "out" && user.role !== "hospital") {
      throw new Error("not a hospital");
    }

    // save Record

    const inventory = inventoryModel(req.body);
    await inventory.save();
    return res.status(200).json({
      message: "New Blood Record",
      inventory,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "error in Create api",
      error,
    });
  }
};

//GET ALL BLOOD RECORD
const getInventoryController = async (req, res) => {
  try {
    const inventory = await inventoryModel

      .find({
        org: req.body.userId,
      })
      .populate("donar")
      .populate("hospital")
      .sort({ createdAt: -1 });
    if (!inventory) {
      res.status(401).json("no invantory found");
    }

    return res.status(200).json({
      success: true,
      message: "all records...",
      inventory,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "eror in get all invantory api",
      error,
    });
  }
};

module.exports = { createInevtoryControllerl, getInventoryController };
