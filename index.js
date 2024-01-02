import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import signupRoutes from "./routes/signup.js";
import loginRoutes from "./routes/login.js";
import personRoutes from "./routes/person.js";

dotenv.config();

const app = express();

mongoose
  .connect(process.env.MONGO_URI, {
    dbName: "mindful",
  })
  .then((c) => console.log(`Database Connected with ${c.connection.host}`))
  .catch((e) => console.log(e));

// app.use(bodyParser.json());
app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use("/signup", signupRoutes);
app.use("/login", loginRoutes);

app.use("/persons", personRoutes);

app.get("/", (req, res) => {
  res.send("<p>some html</p>");
});

app.listen(3000, () => {
  console.log("Server is running");
});
