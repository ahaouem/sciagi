import dbConfig from "./dbConfig";
import { ConnectionPool } from "mssql";

const pool = new ConnectionPool(dbConfig);

export default pool;
