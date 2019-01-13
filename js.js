var products = [
  {name: "Extra Butter The North Face Nightcrawlers Nuptse Jacket", price: 70000},
  {name: "Jordan 1 Retro High Union Los Angeles Black Toe", price: 74000},
  {name: "Kith Team Williams Hoodie Heather Grey", price: 25000},
  {name: "Supreme Cat in the Hat Tee White", price: 7000},
  {name: "Kith Classic Logo Knit Beanie Black", price: 7500},
  {name: "Supreme Steiff Bear Heather Grey", price: 28500}
];

var cart = [];

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
    total = subtotal * 1.08;
    $('#sum-cart').html('<div class="sum-cart"><p>小計: ¥' + subtotal + '</p><p>合計: ¥' + total +'</p></div>');
  }
}
