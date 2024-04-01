// const mongoose = require("mongoose");
import mongoose from "mongoose";

const MONGO_URI = "mongodb://localhost:27017/api-belajar-express";

const configDB = {
  useNewUrlParser: true,
};

export const MongoDBConnection = () => {
  mongoose
    .connect(MONGO_URI)
    .then(() => {
      console.log("Berhasil terhubung ke database mongoDB");
    })
    .catch((error) => {
      console.log("Gagal terkoneksi database mongoDB");
      console.error(error);
    });
};
