# フリーランスAIコンサルタント ウェブページモジュール設計

## 基本構造

```
/website
  ├── index.html        # メインHTMLファイル
  ├── css/
  │   └── styles.css    # メインスタイルシート
  ├── js/
  │   └── main.js       # メインJavaScriptファイル
  └── images/           # 画像ファイル格納ディレクトリ
      ├── ai_chat_image1.jpg
      ├── ai_robot_image.jpg
      ├── ai_business_image.jpg
      ├── ai_chat_illustration.png
      └── ai_robot_illustration.png
```

## HTMLモジュール構造

```html
<!DOCTYPE html>
<html lang="ja">
<head>
    <!-- メタタグ、タイトル、スタイルシート読み込み等 -->
</head>
<body>
    <header>
        <!-- ナビゲーション -->
    </header>
    
    <section id="hero">
        <!-- ヒーローセクション（メインビジュアル、価値提案） -->
    </section>
    
    <section id="services">
        <!-- サービス概要セクション -->
    </section>
    
    <section id="case-studies">
        <!-- 実績・成功事例セクション -->
    </section>
    
    <section id="profile">
        <!-- プロフィール/専門性セクション -->
    </section>
    
    <section id="process">
        <!-- サービスプロセスセクション -->
    </section>
    
    <section id="contact">
        <!-- 問い合わせ/CTAセクション -->
    </section>
    
    <footer>
        <!-- フッターセクション -->
    </footer>
    
    <!-- JavaScriptファイル読み込み -->
</body>
</html>
```

## CSSモジュール構造

```css
/* 変数（カラーパレット、フォント等） */
:root {
    --primary-color: #1A365D;     /* 紺青（メイン） */
    --accent-color: #7B68EE;      /* 紫（アクセント） */
    --light-color: #F5F5F5;       /* ライトグレー */
    --dark-color: #333333;        /* ダークグレー */
    --warning-color: #FF7F50;     /* オレンジ（警告） */
}

/* ベーススタイル */
/* リセットとグローバルスタイリング */

/* レイアウトモジュール */
/* グリッド、コンテナ、ヘッダー、フッター等 */

/* コンポーネント */
/* ボタン、カード、フォーム要素等 */

/* セクション固有のスタイル */
/* 各セクション（hero, services, case-studies等）のスタイル */

/* ユーティリティクラス */
/* 余白、テキスト配置等の汎用クラス */

/* メディアクエリ */
/* レスポンシブデザイン用の画面サイズ別設定 */
```

## JavaScriptモジュール構造

```javascript
// DOMロード後の処理
document.addEventListener('DOMContentLoaded', () => {
    // 初期化関数
    initApp();
});

/**
 * アプリケーションの初期化関数
 */
function initApp() {
    // ナビゲーションの動作設定
    setupNavigation();
    
    // スムーススクロール設定
    setupSmoothScroll();
    
    // スクロールアニメーション設定
    setupScrollAnimations();
    
    // フォームの検証と送信処理
    setupContactForm();
}

/**
 * ナビゲーションの動作設定
 */
function setupNavigation() {
    // モバイルメニュー切り替え処理
}

/**
 * スムーススクロール設定
 */
function setupSmoothScroll() {
    // ページ内リンクのスムーススクロール処理
}

/**
 * スクロールアニメーション設定
 */
function setupScrollAnimations() {
    // 要素が画面に表示されたときのアニメーション処理
}

/**
 * フォームの検証と送信処理
 */
function setupContactForm() {
    // フォームの入力検証
    // 送信処理
}
```

## データ構造

### サービス項目
```javascript
const services = [
    {
        id: 'strategy',
        title: 'AI戦略立案',
        description: 'ビジネス目標に合わせたAI導入の戦略策定と実装ロードマップの作成',
        icon: 'strategy-icon.svg'
    },
    {
        id: 'implementation',
        title: 'AI実装支援',
        description: '最適なAIソリューションの選定と実装支援、および効果測定',
        icon: 'implementation-icon.svg'
    },
    // 他のサービス項目
];
```

### 成功事例
```javascript
const caseStudies = [
    {
        id: 'case1',
        title: 'ECサイトの広告最適化',
        industry: '小売/EC',
        challenge: '広告予算の効率的な配分と購買率の向上',
        solution: 'AIを活用した顧客行動分析と広告配信の最適化',
        result: '売上30%増加、広告コスト25%削減',
        image: 'case1.jpg'
    },
    // 他の成功事例
];
```

### プロセスステップ
```javascript
const processSteps = [
    {
        id: 'step1',
        title: '課題ヒアリング',
        description: '現状の課題とビジネス目標のヒアリング',
        icon: 'step1-icon.svg'
    },
    // 他のプロセスステップ
];
```