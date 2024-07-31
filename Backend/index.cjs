const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const bookRoute = require("./route/book.route.cjs");
const userRoute = require("./route/user.route.cjs");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
dotenv.config();

const PORT = process.env.PORT | 4000;
const URI = process.env.MongoDBURI;

//connect to MongoDB
try {
  mongoose.connect(
    URI
    // { useNewUrlParser: true, useUnifiedTopology: true }
  );
  console.log("Connected to MongoDB!");
} catch (error) {
  console.log("Error : ", error);
}

app.use("/book", bookRoute);

app.use("/user", userRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
