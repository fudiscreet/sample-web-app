# Sample Web Application

## プロジェクト概要

フルスタック TypeScript アプリケーションのサンプルプロジェクトです。

## 技術スタック

### フロントエンド

- React
- TypeScript
- React Testing Library

### バックエンド

- Node.js
- Express
- TypeScript

### データベース

- PostgreSQL
- pgAdmin4

## フォルダ構造

```
.
├── frontend/              # Reactフロントエンドアプリケーション
│   ├── public/           # 静的ファイル
│   └── src/              # ソースコード
├── backend/              # Express.jsバックエンドアプリケーション
│   └── src/              # ソースコード
├── db/                   # データベース初期化スクリプト
├── config/              # 設定ファイル
└── .devcontainer/       # 開発環境設定
```

## 開発環境のセットアップ

1. Docker と docker-compose をインストール
2. VS Code で「Dev Containers」拡張機能をインストール
3. プロジェクトをクローン
4. VS Code でプロジェクトを開き、「Reopen in Container」を選択

## 開発サーバーの起動

### フロントエンド

```bash
cd frontend
npm start
```

http://localhost:8000 でアクセス可能

### バックエンド

```bash
cd backend
npm run dev
```

http://localhost:3000 でアクセス可能

### データベース管理

pgAdmin4: http://localhost:5050

- Email: user@example.com
- Password: password

PostgreSQL 接続情報:

- Host: database
- Port: 5432
- User: postgres
