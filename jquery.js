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

  //function login
  $('#login-btn').click(function() {
    var name = document.getElementById('login-name').value;
    var today = new Date();
    var month = today.getMonth() + 1;
    var day = today.getDate();
    $('#rewrite').html('<a>' + name + ' さん' + '</a>');
    $('#rewrite-login').html('<a id="after_login">' + 'こんにちは ' + name + ' さん!' + '</a>');
    var valbirthday = $('#login-form [name=login-birthday]').val();
    var birthday = Number(valbirthday) || 0;
    var valbirthmonth = $('#login-form [name=login-birthmonth]').val();
    var birthmonth = Number(valbirthmonth) || 0;
    if(birthmonth == month && birthday == day) {
      alert('お誕生日おめでとうございます！');
    }

    $('#login-modal').fadeOut();
  });

});
