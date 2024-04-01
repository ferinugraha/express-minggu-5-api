import express from "express";
import {
  BarangList,
  BarangCreate,
  BarangDetail,
  BarangUpdate,
  BarangDelete,
} from "./barang.controller.js";

export const BarangRouter = express.Router();

BarangRouter.get("/", BarangList);
BarangRouter.post("/", BarangCreate);
BarangRouter.get("/:id", BarangDetail);
BarangRouter.put("/:id", BarangUpdate);
BarangRouter.delete("/:id", BarangDelete);
