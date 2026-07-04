// 💡要素の付け加え・書き換え方法：
// 新しいページを増やしたいときは、以下の { ... } のかたまり（オブジェクト）をコピーして
// 下に貼り付け、カンマ(,)で区切って内容を書き換えてください。
// 「id」は他とかぶらない数字や英数字にしてください。
// 「content」の中には、<p> や <img> などのHTMLタグをそのまま書くことができます。

const jsonData = [
  {
    "id": "Coast-16x",//id wo awaseru
    "name": "Coast [16x]",
    "link": "detail.html?id=Coast-16x", // 💡詳細ページへIDを引き渡すリンクに変更
    "category": "1.8.9",
    "image": "Icons/notimage.png",
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
        <a href="https://www.youtube.com/watch?v=682B1TFbV2k" target="_blank">https://www.youtube.com/watch?v=682B1TFbV2k</a>
        
    `
  },
  {
    "id": "無限",//id wo awaseru
    "name": "無限pack",
    "link": "detail.html?id=無限",  // 💡詳細ページへIDを引き渡すリンクに変更
    "category": "1.8.9",
    "image": "Icons/notimage.png",
    "tags": ["16x", "かっこいい","Skywars","UHC","Duel"],
    "content": `
        <h3>特徴</h3>
        <ul>
            <li>スカイウォーズ勢やUHC勢にとても人気なテクスチャです！<br>
            これは知っている人多いんじゃないですか?<br>
            全体的に赤って感じでダイヤ装備は黒ですね！<br>
            めっちゃかっこよくて、skywarsとかUHCとかやってるひとには<br>
            ぜひ使ってほしいテクスチャです！</li>
            
            <li><img src="images/無限.png" style="width: 40%;"><br>
                引用:Forestさん</li>
        </ul>
        <h3>リンク</h3>
        <a href="https://www.youtube.com/watch?v=daYZf2Sn6wg" target="_blank">https://www.youtube.com/watch?v=daYZf2Sn6wg</a>
        
    `
  }
];