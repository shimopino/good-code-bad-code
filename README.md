# テスト駆動開発

[良いコード／悪いコードで学ぶ設計入門](https://gihyo.jp/dp/ebook/2022/978-4-297-12784-8) のサンプルを TypeScript で実装する。

TypeScript はマルチパラダイムな言語なので、本書で言及しているオブジェクト指向に寄せた設計と、関数型プログラミングに寄せた設計も書いていきたい。

## 環境構築

- [Vitest](https://vitest.dev/guide/) を使用する

```bash
npm install --save-dev typescript @types/node ts-node-dev

npm install --save-dev \
    eslint \
    @typescript-eslint/parser \
    @typescript-eslint/eslint-plugin \
    prettier \
    eslint-config-prettier

npm install --save-dev \
    vitest \
    c8
```

## 参考リンク

- [いろいろな .config.js で型の補完を効かせる方法まとめ](https://zenn.dev/jay_es/articles/2021-04-22-config-js)
