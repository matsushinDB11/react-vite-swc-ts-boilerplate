module.exports = {
  env: {
    browser: true,
    es2022: true
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "standard-with-typescript",
    "prettier"
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: "latest",
    tsconfigRootDir: ".",
    project: ["./tsconfig.json"],
    sourceType: "module"
  },
  plugins: [
    "@typescript-eslint",
    "react",
    "react-hooks"
  ],
  rules: {
    // オブジェクトの型定義にインターフェイスを矯正しない
    "@typescript-eslint/consistent-type-definitions": "off",
    // 関数の戻り地に必ず型定義を書かなければならないルールの対象をエクスポート関数に限定
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": ["error"],
    // 何も返さないasync関数のコールにvoidをつけるルールを無効化
    "@typescript-eslint/no-misused-promises": [
      "error",
      {
        "checksVoidReturn": false
      }
    ],
    // "_"で始まる変数のみ使用しない変数を許容する
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        "argsIgnorePattern": "^_",
        "varsIgnorePattern": "^_",
      }
    ],
    // type属性に限りトリプル・スラッシュディレクティブを許容
    "@typescript-eslint/triple-slash-reference": [
      "error",
      {
        "types": "always"
      }
    ],
    // js, jsx, ts, tsxのみインポート時の拡張子の省略を許容
    "import/extensions": [
      "error",
      {
        "ignorePackages": true,
        "pattern": {
          "js": "never", "jsx": "never", "ts": "never", "tsx": "never"
        }
      }
    ],
    // import順を定義
    "import/order": [
      "error",
      {
        "groups": [
          "builtin", "external", "internal", "parent", "sibling", "object", "index"
        ],
        "pathGroups": [
          {
            "pattern": "{react,react-dom/**}",
            "group": "builtin",
            "position": "before"
          },
          {
            "pattern": "{[A-Z]*,**/[A-Z]*}",
            "group": "internal",
            "position": "after"
          },
          {
            "pattern": "./**.module.css",
            "group": "index",
            "position": "after"
          }
        ],
        "pathGroupsExcludedImportTypes": ["builtin"],
        "alphabetize": {
          "order": "asc"
        }
      }
    ],
    // デバッグメッセージでのコンポーネントの明示を無効化
    "react/display-name": "off"
  },
  "overrides": [
    {
      // tsxの場合propTypesプロパティの定義を強制しない
      "files": ["*.tsx"],
      "rules": {
        "react/prop-types": "off"
      }
    }
  ],
  settings: {
    react: {
      version: "detect"
    }
  }
}
