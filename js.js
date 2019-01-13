var products = [
  {name: "Extra Butter The North Face Nightcrawlers Nuptse Jacket", price: 70000},
  {name: "Jordan 1 Retro High Union Los Angeles Black Toe", price: 74000},
  {name: "Kith Team Williams Hoodie Heather Grey", price: 25000},
  {name: "Supreme Cat in the Hat Tee White", price: 7000},
  {name: "Kith Classic Logo Knit Beanie Black", price: 7500},
  {name: "Supreme Steiff Bear Heather Grey", price: 28500}
];

class Buy {
  constructor(num) {
    alert("商品がカートに追加されました！");
  }
  calculate(num) {
    console.log("calculate成功！");
    console.log(products[num].price);
    $('#rewrite').html('<a>SUCCESS!!!</a>');
  }
}

function buyProduct(num) {
  var buy = new Buy(num);
  buy.calculate(num);
}
