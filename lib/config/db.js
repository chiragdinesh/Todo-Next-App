import mongoose from "mongoose";

export const ConnectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://greaterstack:<password>@cluster0.51act.mongodb.net/todo-app"
  );
  console.log("DB Connected!");
};
