import { isValidObjectId } from "mongoose";

import { db } from "./";
import { EntryModel, IEntryModel } from "../models";

export const getEntryById = async (id: string): Promise<IEntryModel | null> => {
  if (!isValidObjectId(id)) return null;
  await db.connect();
  const entry = await EntryModel.findById(id);
  await db.disconnect();

  return JSON.parse(JSON.stringify(entry));
};
