import type { NextApiRequest, NextApiResponse } from "next";
import { BASE_URL } from "./service";

export type Data = {
  name: string;
  description: string;
  tags: string[];
  image: string;
  read_time: string;
};

export type ErrorRes = {
  ok: boolean;
  error: string;
};

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse<Data[] | ErrorRes>
) {
  try {
    const data = await fetch(BASE_URL);
    const json = await data.json();
    res.status(200).json(json);
  } catch (error: any) {
    res.status(500).json({
      ok: false,
      error: error.message,
    });
  }
}
