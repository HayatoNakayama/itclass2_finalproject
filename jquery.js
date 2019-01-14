//jQuery------------
$(function(){
  //login-modal-show&close
  $('#login-show').click(function() {
    $('#login-modal').fadeIn();
  });
  $('#login-show2').click(function() {
    $('#login-modal').fadeIn();
  });
  $('#close-modal').click(function() {
    $('#login-modal').fadeOut();
  });

  //cart-modal-show&Close
  $('#cart-show').click(function() {
    $('#cart-modal').fadeIn();
  });
  $('#close-cart').click(function() {
    $('#cart-modal').fadeOut();
  });

  //function login
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

  //checkout-function
  $('#checkOut').click(function() {
    $('#checkOut').html('Please Wait...');
    $('#checkOut').css({'cursor':'progress','opacity':'0.8'});
    setTimeout(function() {
      alert('決済が完了しませんでした。もう一度やり直してください。');
    },10000);
  });

});
