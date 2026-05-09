import cors from "cors";
import "dotenv/config";
import express from "express";
import { checkDatabaseConnection } from "./db.js";

const app = express();
const port = Number(process.env.PORT ?? 8000);
const frontendUrl = process.env.FRONTEND_URL ?? "http://localhost:3000";

app.use(cors({ origin: frontendUrl }));
app.use(express.json());

app.get("/", async (_request, response) => {
  try {
    await checkDatabaseConnection();
  } catch (error) {
    console.warn("Database check failed:", error);
  }

  response.send("Backend alive");
});

app.listen(port, () => {
  console.log(`Backend listening on http://localhost:${port}`);
});
