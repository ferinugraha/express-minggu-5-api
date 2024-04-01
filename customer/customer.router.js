import express from "express";

import {
  CustomerList,
  CustomerCreate,
  CustomerDetail,
  CustomerUpdate,
  CustomerDelete,
} from "./customer.controller.js";

export const CustomerRouter = express.Router();

CustomerRouter.get("/", CustomerList);
CustomerRouter.post("/", CustomerCreate);
CustomerRouter.get("/:id", CustomerDetail);
CustomerRouter.put("/:id", CustomerUpdate);
CustomerRouter.delete("/:id", CustomerDelete);
