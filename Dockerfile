FROM node:24

# 基本ツールをインストール
RUN apt-get update \
    && apt-get install -y --no-install-recommends \
      bash git openssh-client curl nano sudo \
    && rm -rf /var/lib/apt/lists/*

# yarn をインストール（既存の場合は上書き）
RUN npm install -g yarn --force

# 作業ディレクトリ
USER root
RUN echo "node ALL=(ALL) NOPASSWD:ALL" >> /etc/sudoers

# 作業ディレクトリとユーザー設定
USER node
WORKDIR /workspace

CMD ["bash"]
