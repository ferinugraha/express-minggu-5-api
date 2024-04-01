import { CustomerModel } from "./customer.model.js";

export async function CustomerList(req, res) {
  try {
    const result = await CustomerModel.find();
    return res.status(200).json(result);
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error: "ups error" });
  }
}

export async function CustomerCreate(req, res) {
  try {
    const data = req.body;
    const result = await CustomerModel.create(data);
    return res.status(201).json(result);
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error: "ups error" });
  }
}

export async function CustomerDetail(req, res) {
  try {
    const data = await CustomerModel.findById({ _id: req.params.id });
    return res.status(200).json(data);
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error: "ups error" });
  }
}

export async function CustomerUpdate(req, res) {
  try {
    const data = await CustomerModel.findByIdAndUpdate(
      { _id: req.params.id },
      req.body,
      {
        new: true,
      }
    );
    return res.status(200).json(data);
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error: "ups error" });
  }
}

export async function CustomerDelete(req, res) {
  try {
    await CustomerModel.findByIdAndDelete({ _id: req.params.id });
    return res.status(204).json();
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error: "ups error" });
  }
}
