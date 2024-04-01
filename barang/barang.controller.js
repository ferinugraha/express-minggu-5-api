import { BarangModel } from "./barang.model.js";

export async function BarangList(req, res) {
  try {
    const result = await BarangModel.find();
    return res.status(200).json(result);
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error: "ups error" });
  }
}

export async function BarangCreate(req, res) {
  try {
    const data = req.body;
    const result = await BarangModel.create(data);
    return res.status(201).json(result);
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error: "ups error" });
  }
}

export async function BarangDetail(req, res) {
  try {
    const data = await BarangModel.findById({ _id: req.params.id });
    return res.status(200).json(data);
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error: "ups error" });
  }
}

export async function BarangUpdate(req, res) {
  try {
    const data = await BarangModel.findByIdAndUpdate(
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

export async function BarangDelete(req, res) {
  try {
    await BarangModel.findByIdAndDelete({ _id: req.params.id });
    return res.status(204).json();
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error: "ups error" });
  }
}
