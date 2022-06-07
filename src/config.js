import { config } from "dotenv";
config();

export default {
  port: process.env.PORT || 3000,
  user: process.env.SQL_AZURE_USER,
  password: process.env.SQL_AZURE_PASSWORD,
  server: process.env.SQL_AZURE_SERVER,
  database: process.env.SQL_AZURE_DATABSE,
};
