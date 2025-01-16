import express from "express";

// importing routes
import userRouter from "./routes/userRoute.js";
import { connectDB } from "./utils/features.js";

const port = 3000;
connectDB();

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API Working");
});

// Using routes
app.use("/api/v1/user", userRouter);

app.listen(port, () => {
  console.log(`server is listtening ${port}`);
});
