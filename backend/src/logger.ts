type logLevel = "info" | "warn" | "error";

const colors = {
  info: "\x1b[32m", // Green
  warn: "\x1b[33m", // Yellow
  error: "\x1b[31m", // Red
};

/**
 * Loggerクラスは、アプリケーションのログを管理します。
 * ログレベルに応じて、情報、警告、エラーのメッセージをコンソールに出力します。
 */
export class Logger {
  /**
   * ログレベル
   */
  private level: logLevel;

  /**
   * Loggerクラスのコンストラクタ
   * @param level ログレベルを指定します。デフォルトは "info" です。
   */
  constructor(level: logLevel = "info") {
    this.level = level;
  }

  /**
   * INFOレベルのログを出力します。
   * @param message INFOメッセージ
   * @return ログメッセージを出力します。
   */
  public info(message: string): void {
    console.log(
      `${colors.info}[${new Date().toISOString()}] [INFO]: ${message}\x1b[0m`
    );
  }

  /**
   * WARNレベルのログを出力します。
   * @param message 警告メッセージ
   * @returns ログメッセージを出力します。
   */
  public warn(message: string): void {
    console.log(
      `${colors.warn}[${new Date().toISOString()}] [WARN]: ${message}\x1b[0m`
    );
  }

  /**
   * ERRORレベルのログを出力します。
   * @param message エラーメッセージ文
   * @returns エラーメッセージを出力します。
   */
  public error(message: string): void {
    console.error(
      `${colors.error}[${new Date().toISOString()}] [ERROR]: ${message}\x1b[0m`
    );
  }
}

export const logger = new Logger("info"); // デフォルトのログレベルを "info" に設定
