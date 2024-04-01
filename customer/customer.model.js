import mongoose from "mongoose";

export const CustomerObject = {
  nama: { type: String },
  alamat: { type: String },
  telepon: { type: String },
};

export const CustomerSchema = new mongoose.Schema(CustomerObject);

export const CustomerModel = new mongoose.model("Customer", CustomerSchema);
