import mongoose from "mongoose";
import type { NextApiRequest, NextApiResponse } from "next";

import { db } from "../../../database";
import { EntryModel, IEntryModel } from "../../../models";

type Data =
  | {
      message: string;
    }
  | IEntryModel
  | null;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { id } = req.query;

  switch (req.method) {
    case "GET":
      return getOneEntry(req, res);
    case "PUT":
      return updateEntry(req, res);
    default:
      return res.status(400).json({ message: `Metodo no válido` });
  }
}

const getOneEntry = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { id } = req.query;
  await db.connect();
  const entry = await EntryModel.findById(id);
  await db.disconnect();

  if (!entry) {
    res.status(400).json({ message: `No hay entradas con el ID: ${id}` });
  }
  res.status(200).json(entry);
};

const updateEntry = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { id } = req.query;
  await db.connect();
  const entryToUpdate = await EntryModel.findById(id);
  if (!entryToUpdate) {
    await db.disconnect();
    return res
      .status(400)
      .json({ message: `No hay entradas con el ID: ${id}` });
  }

  const {
    description = entryToUpdate.description,
    status = entryToUpdate.status,
  } = req.body;

  try {
    const updatedEntry = await EntryModel.findByIdAndUpdate(
      id,
      {
        description,
        status,
      },
      { runValidators: true, new: true }
    );
    await db.disconnect();

    res.status(200).json(updatedEntry!);
  } catch (error: any) {
    await db.disconnect();
    res.status(400).json({ message: error.errors.status.message });
  }
};
