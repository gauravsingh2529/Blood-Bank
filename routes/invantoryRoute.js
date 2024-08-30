const express = require("express");
const router = express.Router();
const authMiddelware = require("../middelewares/authMiddelware");
const { getInventoryController } = require("../contrroller/inventoryControler");
const {
  createInevtoryControllerl,
  
} = require("../contrroller/inventoryControler");
//routs
router.post("/create-inventory", authMiddelware, createInevtoryControllerl);

//get all record

router.get("/get-inventory", authMiddelware, getInventoryController);

module.exports = router;
