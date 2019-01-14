# Save X(情報基礎２最終課題)
---------------------------------
## このサイトについて  
名前だけ[StockX](https://stockx.com/)をパクったECサイト。  
情報基礎1の最終課題で作ったサイトを新しく勉強したこと(Jqueryやcanvas,CSSの:hoverなど)を使って強化した.最近ファッションについて勉強していく中で,このサイトをなるべくストリートブランドのECサイトのようにかっこよくしたくなり,頑張った.

## 機能  
「買う」,「売る」という機能を始めとして,「Login」「Cart」などの機能を実装.  
さらに,「Login」「Cart」はモーダルウィンドウを使い見栄えを綺麗にした.  
*Buy  
  BuyセクションのBUYボタンを押すと,カートに商品が追加される.カートには小計(商品のそのままの価格)と合計(誕生日値引き,消費税)を足し引きした合計が表示される.  
*Sell  
  Sellセクションで商品名,価格,商品画像を入力し,出品ボタンを押すとBuyセクションに商品が追加される. もちろんここで出品した商品も上と同様にBUYボタンで購入ができる.  
*Cart  
  header内のCartボタンを押すとCartモーダルウィンドウが出現する.商品が入っていない場合,「カートには何も商品が入っていません」と表示される.商品がBUYで記述した通りの表示が出る.Check outボタンを押すとカーソルと,表示が変わり,10秒後「決済が完了しませんでした.もう一度やり直してください.」とalertが出る.  
*Login  
  header内のLoginボタンまたは,Top内のLoginボタンを押すとLoginモーダルウィンドウが表示される.名前,誕生日を入力し,Loginボタンを押すとheaderとTop内のLoginだった部分の表示が変わる.さらに本日が誕生日だった場合,商品の小計から10%値引きされる.  

##工夫した点,苦労した点  
*Sell機能
  キャンバスを使って画像を表示させるところが難しかった.授業のtensorflowのコードを参考にし,画像データをimgDataContainerに格納し,for文を用いてidを変えながら出力した.  
  ```js.js
  function onImageSetted(e){
     var img_data = createImageData(e.target);
     imgDataContainer.push(img_data);
     for (var j = 0; j < imgDataContainer.length; j++) {
       var target_canvas = "test_canvas_" + String(j);
       document.getElementById(target_canvas).width = imgDataContainer[j].width;
       document.getElementById(target_canvas).height = imgDataContainer[j].height;
       document.getElementById(target_canvas).getContext('2d').putImageData(imgDataContainer[j],0,0);
       document.getElementById(target_canvas).img_data = imgDataContainer[j];
     }
  }
  ```(  
*Buy機能
  初めてクラスを作りインスタンスを生成した.Sell機能もクラスを使ってわかりやすくできそうだったが時間がなく,断念した.  
  ```js.js
  class Buy {
    constructor(num) {
      alert(products[num].name + "がカートに追加されました！");
    }
    addcart(num) {
      cart.push(products[num]);
    }
  }
  ```(  
*Login,cart機能
  ログイン後,JqueryでHTMLを書き換えることで名前を表示させた.  
  .innerHTMLより全然使いやすい気がする.  
  ```jquery.js
  $('#login-btn').click(function() {
    var name = document.getElementById('login-name').value;
    var today = new Date();
    var month = today.getMonth() + 1;
    var day = today.getDate();
    $('#rewrite').html('<a>' + name + ' さん' + '</a>');
    $('#rewrite-login').html('<a id="after_login">' + 'こんにちは ' + name + ' さん！' + '</a>');
    var valbirthday = $('#login-form [name=login-birthday]').val();
    var birthday = Number(valbirthday) || 0;
    var valbirthmonth = $('#login-form [name=login-birthmonth]').val();
    var birthmonth = Number(valbirthmonth) || 0;
    if(birthmonth == month && birthday == day) {
      alert('お誕生日おめでとうございます！(本日、本体価格から10%OFF!!!)');
      discount += 1;
      console.log(discount);
    }
    $('#login-modal').fadeOut();
  });
  ```(  
  さらに、モーダルウィンドウを実装した.以下の行などがmodalのCSS.  
  ```stylesheet.css
  .login_form_container {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 100;
    display: none;
  }

  .modal {
    position: absolute;
    top: 20%;
    left: 34%;
    background-color: #fff;
    padding: 20px 0 40px;
    border-radius: 10px;
    width: 450px;
    height: auto;
    text-align: center;
  }
  ```(  

## 参考にしたサイト  
  [Progate](https://prog-8.com/)  
  [Qiita](https://qiita.com/)  
  [StockX](https://stockx.com/)  
  Top,background-image[RECO](https://reco-photo.com/street-photography)  
  など...  

## Author  
[Hayato Nakayama](https://github.com/HayatoNakayama)  
Keio University SFC  

## 終わりに  
あまり授業に行きませんでしたが,最終課題とテストをこれだけ頑張ったので,  
**Sをください！！！**
