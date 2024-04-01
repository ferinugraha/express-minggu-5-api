import mongoose from "mongoose";

export const BarangObject = {
  nomor: { type: String, unique: true },
  nama: { type: String },
  satuan: { type: String },
  hargaJual: { type: Number },
  stok: { type: Number },
};

export const BarangSchema = new mongoose.Schema(BarangObject);

export const BarangModel = new mongoose.model("Barang", BarangSchema);
