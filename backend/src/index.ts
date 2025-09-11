import express from "express";
import { Request, Response } from "express";
import cors from "cors";
import { logger } from "./logger";

const app = express();
const PORT = process.env.PORT || 5000;

// ミドルウェア
app.use(cors());
app.use(express.json());
logger.info("サーバーを起動中です...");

// ヘルスチェックエンドポイント
app.get("/healtz", (req: Request, res: Response) => {
  res.status(200).json({ status: "OK" });
});

app.listen(PORT, () => {
  logger.info(`サーバーがポート ${PORT} で起動しました。`);
});
