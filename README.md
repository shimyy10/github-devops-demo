# github-devops-demo

GitHub を使ったシステム開発フローの実演デモ用リポジトリです。以下の一連の流れを実際に再現しています。

1. Issue で機能要望を起票
2. フィーチャーブランチで実装
3. Pull Request 作成(Issue を参照)
4. GitHub Actions による CI (Node.js 18 / 20 でのマトリクステスト)
5. レビュー後に PR をマージ、Issue をクローズ

## 構成

- `src/calculator.js` — 四則演算を提供する最小限のライブラリ
- `test/calculator.test.js` — Node.js 標準の `node:test` によるユニットテスト
- `.github/workflows/ci.yml` — push / pull_request をトリガーに `npm test` を実行する CI ワークフロー

## テスト実行

```bash
npm test
```
