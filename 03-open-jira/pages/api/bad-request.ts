import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  message: string | string[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { message = "Algo salió mal" } = req.query;
  res.status(400).json({ message });
}
