import express from "express";
import { BarangRouter } from "./barang/barang.router.js";
import { CustomerRouter } from "./customer/customer.router.js";
import { ROUTER_BASE_BARANG } from "./barang/barang.config.js";
import { ROUTER_BASE_CUSTOMER } from "./customer/customer.config.js";
import { MongoDBConnection } from "./libs/lib.database.js";

export const app = express();

MongoDBConnection();

app.use(express.json());

app.use(ROUTER_BASE_BARANG, BarangRouter);
app.use(ROUTER_BASE_CUSTOMER, CustomerRouter);
