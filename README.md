# テスト駆動開発

[良いコード／悪いコードで学ぶ設計入門](https://gihyo.jp/dp/ebook/2022/978-4-297-12784-8) のサンプルを TypeScript で実装する。

TypeScript はマルチパラダイムな言語なので、本書で言及しているオブジェクト指向に寄せた設計と、関数型プログラミングに寄せた設計も書いていきたい。

テスト関連の書籍個人的にで最もおすすめしている [Unit Testing Principles, Practices, and Patterns](https://www.manning.com/books/unit-testing?query=testing) では、テストの品質を向上させるにはプロダクションコード側の設計を改善することも必要不可欠であると述べている。（同意見）

本書のサンプルコードを TDD で記述していくことで、上記の書籍で伝えている内容が本当なのか手を動かして検証する。

> 注意点
>
> TypeScript は構造的型システムを採用しており、同じプロパティや同じメソッドを所有するクラスは同じ型として識別される。
> この状態を防ぐには、ブランド型などを採用する必要があるが、本リポジトリではそこまで厳密な型設計をしないで進めていく。

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
