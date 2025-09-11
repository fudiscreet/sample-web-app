/**
 * ヘルスチェックのレスポンス型
 * @description サービスの稼働状況を示すレスポンスの型定義
 * @param status - サービスの状態を示す文字列
 */
export type HealthResponse = {
  status: string;
};
