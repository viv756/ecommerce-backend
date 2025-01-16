import mongoose from "mongoose";

export const connectDB = () => {
  mongoose
    .connect("mongodb://localhost:27017", {
      dbName: "MERN_ECOMMERCE",
    })
    .then((c) => console.log("DB connected"))
    .catch((e) => console.log(e));
};
