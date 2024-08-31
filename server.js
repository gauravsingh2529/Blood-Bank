const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");
const cors = require("cors");
const connectDB = require("./config/db");
dotenv.config();
//MONGO DB CONNECTION
connectDB();
const app = express();

const authRoute = require("./routes/authRoute");
const invantoryRoute = require("./routes/invantoryRoute");

//MIDDELWARES
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
//PORT

const PORT = process.env.PORT;
//ROUTEs
app.use("/api/v1", authRoute);
app.use("/api/v1", invantoryRoute);

//BACIC LANDIN PAGE
app.get("/", (req, res) => {
  res.status(200).json({
    message: "blod bank app ",
  });
});

// listen
app.listen(PORT, () => {
  console.log(
    `node server running in ${process.env.DEV_MODE} MODE ${PORT}`.bgRed.black
  );
});
