import express from "express";
import NodeCache from "node-cache";
import { errorMiddleware } from "./middlewares/error.js";
import { connectDB } from "./utils/features.js";

// importing routes
import userRouter from "./routes/userRoute.js";
import productRouter from "./routes/productRoute.js";

const port = 3000;
connectDB();

export const myCach = new NodeCache();

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("API Working");
});

// Using routes
app.use("/api/v1/user", userRouter);
app.use("/api/v1/product", productRouter);

app.use("/uploads", express.static("uploads"));
app.use(errorMiddleware);

app.listen(port, () => {
  console.log(`server is listtening ${port}`);
});
