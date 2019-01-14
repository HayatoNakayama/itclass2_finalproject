var products = [
  {name: "Extra Butter The North Face Nightcrawlers Nuptse Jacket", price: 70000},
  {name: "Jordan 1 Retro High Union Los Angeles Black Toe", price: 74000},
  {name: "Kith Team Williams Hoodie Heather Grey", price: 25000},
  {name: "Supreme Cat in the Hat Tee White", price: 7000},
  {name: "Kith Classic Logo Knit Beanie Black", price: 7500},
  {name: "Supreme Steiff Bear Heather Grey", price: 28500}
];

var cart = [];
var productNumber = 6;
var imgDataContainer = [];
var imgNumber = 0;

class Buy {
  constructor(num) {
    alert(products[num].name + "がカートに追加されました！");
  }
  addcart(num) {
    cart.push(products[num]);
  }
}

function buyProduct(num) {
  var buy = new Buy(num);
  buy.addcart(num);
  if(cart.length > 0) {
    var showName;
    var showPrice;
    for (var i = 0; i < cart.length; i++) {
      showName = cart[i].name;
      showPrice = cart[i].price;
      if(i == 0) {
        $('#cart-contents').html('<p><a class="producutName">' + showName + '</a>' + '<a class="productPrice">  ¥' + showPrice + '</a></p>');
      }else {
        $('#cart-contents').append('<p><a class="producutName">' + showName + '</a>' + '<a class="productPrice">  ¥' + showPrice + '</a></p>');
      }
    }
    var subtotal = 0;
    var total = 0;
    for (var i = 0; i < cart.length; i++) {
      subtotal += cart[i].price;
    }
    total = Math.round(subtotal * 1.08);
    $('#sum-cart').html('<div class="sum-cart"><p>小計: ¥' + subtotal + '</p><p>合計: ¥' + total +'</p></div>');
  }
}

var img = new Image();

function onFileSelected(){
   var file = document.getElementById("input_file").files[0];
   var reader = new FileReader();
   reader.onload = onFileLoaded;
   reader.readAsDataURL(file);
}

function onFileLoaded(e){
   var src_data = e.target.result;
   img.onload = onImageSetted;
   img.src = src_data;
}

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

function createImageData(img){
   var cv = document.createElement('canvas');
   cv.width = img.naturalWidth;
   cv.height = img.naturalHeight;
   var ct = cv.getContext('2d');
   ct.drawImage(img,0,0);
   var data = ct.getImageData(0,0, cv.width, cv.height);
   return data;
}

function sell() {
  var file = 0;
  var reader = 0;
  var src_data = 0;
  onFileSelected();
  var sellName = document.getElementById('inputName').value;
  var sellPrice = Number(document.getElementById('inputPrice').value);
  $('#sell-product').append('<div class="product"><canvas id="test_canvas_'+ imgNumber + '" width=256 height=256></canvas><p>' + sellName + '</p><p>' + sellPrice +'yen</p><input type="button" class="buy_btn" value="BUY" onclick="buyProduct(' + productNumber +');"></div>');
  productNumber += 1;
  imgNumber += 1;
  console.log(imgDataContainer);
}
