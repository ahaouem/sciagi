import { NextApiRequest, NextApiResponse } from "next";
import sql from "mssql";
import pool from "../../configs/connectionPool";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { subject, section } = req.query;

  
  const allowedTables = ["sciagahistoria", "sciagabiologia", "sciagachemia"];
  
  if (!allowedTables.includes(subject as string)) {
    return res.status(400).send("Nieprawidłowa nazwa przedmiotu");
  }

  try {
    const poolConnection = await pool.connect();
    const request = await poolConnection.request();

    const query = `
        SELECT podtemat1, podtemat2, podtemat3, podtemat4, podtemat5, podtemat6, podtemat7, podtemat8
        FROM ${subject} 
        WHERE dzial = @section
    `;

    request.input("section", sql.VarChar, section as string);
    const result = await request.query(query);
    poolConnection.close();
    if (result.recordset.length === 0) {
      return res.status(404).send("Nie znaleziono danych dla podanego działu");
    }

    res.status(200).json(result.recordset[0]);
  } catch (error) {
    console.log(error);
    res.status(500).send("Wystąpił błąd podczas przetwarzania żądania.");
  }
}
