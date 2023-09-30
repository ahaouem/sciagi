import { NextApiRequest, NextApiResponse } from "next";
import pool from "./configs/connectionPool";

export default async function getSubjects(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res.status(405).end();
  }

  const { schoolSubject } = req.query;

  const allowedTables = ["sciagahistoria", "sciagabiologia", "sciagachemia"];

  if (
    typeof schoolSubject !== "string" ||
    !allowedTables.includes(schoolSubject)
  ) {
    return res.status(400).send("Invalid table name");
  }

  try {
    const poolConnection = await pool.connect();
    const request = await poolConnection.request();

    const query = `Select dzial from ${schoolSubject}`;
    const result = await request.query(query);
    poolConnection.close();

    res.status(200).json(result.recordset);
  } catch (error) {
    console.log(error);
    res.status(500).send("An error occurred while processing your request.");
  }
}
