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
    "image": "Icons/Coast.png",
    "tags": ["16x", "Bridge","綺麗"],
    "content": `
        <h3>特徴</h3>
        <ul>
            <li>ブリッジ勢によく使われているテクスチャです。</li>
            <li>私も結構使っていてとにかくスカイがきれいなのがいい！</li>
            <li>モーションブラーとか入れると最高なのでぜひ使ってみてください！</li>
            <li><img src="images/coast.png" style="width: 70%;"></li>
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
    "image": "Icons/無限.png",
    "tags": ["16x", "かっこいい","Skywars","UHC","Duel"],
    "content": `
        <h3>特徴</h3>
        <ul>
            <li>スカイウォーズ勢やUHC勢にとても人気なテクスチャです！<br>
            これは知っている人多いんじゃないですか?<br>
            全体的に赤って感じでダイヤ装備は黒ですね！<br>
            めっちゃかっこよくて、skywarsとかUHCとかやってるひとには<br>
            ぜひ使ってほしいテクスチャです！</li>
            
            <li><img src="images/無限.png" style="width: 70%;"><br>
                引用:Forestさん</li>
        </ul>
        <h3>リンク</h3>
        <a href="https://www.youtube.com/watch?v=daYZf2Sn6wg" target="_blank">https://www.youtube.com/watch?v=daYZf2Sn6wg</a>
        
    `
  },
  {
    "id": "Gleam",//id wo awaseru
    "name": "Gleam",
    "link": "detail.html?id=Gleam",  // 💡詳細ページへIDを引き渡すリンクに変更
    "category": "1.8.9",
    "image": "Icons/Gleam.png",
    "tags": ["128x", "かっこいい","Bedwars","RBW","おしゃれ"],
    "content": `
        <h3>特徴</h3>
        <ul>
            <li>いっやまじでこれおすすめのテクスチャです！<br>
            とくに夜のスカイが大好きなんですよね！ベッドウォーズしてる人に人気です！<br>
            RankedBedwarsとかでも使いやすくてほんとに使ってほしいです！<br>
            剣はけっこう長めですね~。たぶん私が一番気に入っているテクスチャです！<br>
            みやすい・軽い・おしゃれ・かっこいい・使いやすいの最高のテクスチャ！</li>
            
            <li><img src="images/Gleam.png" style="width: 70%;"></li>
        </ul>
        <h3>リンク</h3>
        <a href="https://www.youtube.com/watch?v=ZC0WkUZyyms" target="_blank">https://www.youtube.com/watch?v=ZC0WkUZyyms</a>
        
    `
  },
  {
    "id": "Azura",//id wo awaseru
    "name": "Azura 16x",
    "link": "detail.html?id=Azura",  // 💡詳細ページへIDを引き渡すリンクに変更
    "category": "1.8.9",
    "image": "Icons/azura.png",
    "tags": ["16x", "綺麗","Bedwars","Skywars","おしゃれ","Bridge","シンプル"],
    "content": `
        <h3>特徴</h3>
        <ul>
            <li>はいAzura16xきましたね～これ結構有名ですよ。<br>
            雰囲気的にはCoast 16xとちょっと似てるんですけど、Coastより明るくて透明度あるテクスチャですね！<br>
            Bridgeやってる人も結構使ってたりするし、bwのひとも使ってますね。<br>
            剣は短めで羊毛は縁取りがあっていい感じですね！あと綺麗でおしゃれでめっちゃおすすめです。<br>
            めっちゃみやすいし結構軽量化してくれるので万能なテクスチャですね！</li>
            
            <li><img src="images/Azura.png" style="width: 70%;"></li>
        </ul>
        <h3>リンク</h3>
        <a href="https://www.youtube.com/watch?v=zLPUZbOxTsI" target="_blank">https://www.youtube.com/watch?v=zLPUZbOxTsI</a>
        
    `
  },
  {
    "id": "Bedlessfault",//id wo awaseru
    "name": "Bedlessfault 16x",
    "link": "detail.html?id=Bedlessfault",  // 💡詳細ページへIDを引き渡すリンクに変更
    "category": "1.8.9",
    "image": "Icons/bedlessfault.png",
    "tags": ["おしゃれ","かっこいい","16x","Bedwars","Bridge"],
    "content": `
        <h3>特徴</h3>
        <ul>
            <li>これは有名YoutuberのBedlessnoobさんのテクスチャですね。<br>
            Bedlessnoobさんはブリッジとかをされている方なのでブリッジ勢は知っている人いるかもですね。<br>
            このテクスチャ砂岩に水色の縁取りあったり、けっこうマイナーな羊毛の縁取りも刺さりますね。<br>
            全体的に色が濃くてシンプル好きな人にはあんまり向かないかもしれませんが、好きな人はとことん好きだと思います。<br>
            ベッドとかもオリジナルモデルがあってほんとに凝ったテクスチャだなって思いました。</li>
            
            <li><img src="images/Bedlessfault.png" style="width: 70%;"></li>
            <li>引用:H4llowさん</li>
        </ul>
        <h3>リンク</h3>
        <a href="https://www.youtube.com/watch?v=PHXyG4L9V9k" target="_blank">https://www.youtube.com/watch?v=PHXyG4L9V9k</a>
        
    `
  },
  {
    "id": "Dewier20k",//id wo awaseru
    "name": "Dewier 20k pack",
    "link": "detail.html?id=Dewier20k",  // 💡詳細ページへIDを引き渡すリンクに変更
    "category": "1.8.9",
    "image": "Icons/dewier20k.png",
    "tags": ["かっこいい","シンプル","Bedwars","RBW","16x"],
    "content": `
        <h3>特徴</h3>
        <ul>
            <li>きましたきました。これは我らがBedwars界隈の"神"であるDewierさんの20kテクスチャですね。<br>
            この方DewierさんはRanked BedwarsをやっていらっしゃるだけあってこのテクスチャRBWでめっちゃ使いやすいです！<br>
            いままでDewierさんがだしてきたテクスチャの中でスカイも剣も全部このテクスチャが一番好きです。<br>
            Dewierさんのテクスチャでよく見るこの羊毛のテクスチャもほんとに見やすくて敵と戦いやすいですね。<br>
            色も鮮やかで全体的にシンプルでそれでいてかっこよくて、16xなので軽量化にもなるというこれ以上のものがあるか?ってかんじのテクスチャですね(笑)</li>
            
            <li><img src="images/Dewier20k.png" style="width: 70%;"></li>
        </ul>
        <h3>リンク</h3>
        <a href="https://www.youtube.com/watch?v=I-vjeyl2IhM" target="_blank">https://www.youtube.com/watch?v=I-vjeyl2IhM</a>
        
    `
  },
  {
    "id": "FatCat",//id wo awaseru
    "name": "Fat cat 16x",
    "link": "detail.html?id=FatCat",  // 💡詳細ページへIDを引き渡すリンクに変更
    "category": "1.8.9",
    "image": "Icons/fatcat.png",
    "tags": ["かわいい","シンプル","Bedwars","綺麗","16x"],
    "content": `
        <h3>特徴</h3>
        <ul>
            <li>有名なテクスチャｷﾀｱｱｱｱ！(ﾟ∀ﾟ)ｱﾋｬ！これしってるひと絶対いるでしょ！<br>
            Youtuberのfat catさんが作ったテクスチャですね。とくに羊毛に猫の顔あってかわちい<br>
            全体的にシンプルで見やすいしふわーってした雰囲気でめっちゃいいですよ～。<br>
            私とのこのテクスチャの出会いはASMR動画でしたね。(Bedwarsの)<br>
            私のパックフォルダーの中は基本的に16xがおおいですが、その16xのなかでもこれは結構上位ですね。</li>
            
            <li><img src="images/fatcat.png" style="width: 70%;"></li>
        </ul>
        <h3>リンク</h3>
        <a href="https://www.youtube.com/watch?v=d4xvhjdDsHk" target="_blank">https://www.youtube.com/watch?v=d4xvhjdDsHk</a>
        
    `
  }
];