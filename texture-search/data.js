// 💡要素の付け加え・書き換え方法：
// 新しいページを増やしたいときは、以下の { ... } のかたまり（オブジェクト）をコピーして
// 下に貼り付け、カンマ(,)で区切って内容を書き換えてください。
// 「id」は他とかぶらない数字や英数字にしてください。
// 「content」の中には、<p> や <img> などのHTMLタグをそのまま書くことができます。

const jsonData = [
  {
    "id": "coast-16x",
    "name": "Coast [16x]",
    "link": "detail.html?id=coast-16x", // 💡詳細ページへIDを引き渡すリンクに変更
    "category": "1.8.9",
    "tags": ["16x", "Bridge","綺麗"],
    "content": `
        <h3>特徴</h3>
        <ul>
            <li>ブリッジ勢によく使われているテクスチャです。</li>
            <li>私も結構使っていてとにかくスカイがきれいなのがいい！</li>
            <li>モーションブラーとか入れると最高なのでぜひ使ってみてください！</li>
            <li><img src="images/coast.png" style="width: 40%;"></li>
        </ul>
        <h3>リンク</h3>
        <a>https://www.youtube.com/watch?v=682B1TFbV2k</a>
        
    `
  }
];