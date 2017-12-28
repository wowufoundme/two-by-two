$(document).ready(function(){
  var isactive = 0;
  $('.sidebar-toggle').click(function(){
    if (isactive == 0) {
      isactive = 1;
      $('.sidebar').addClass('is-active');
      $('.sidebar-toggle').html('<span class="ion-ios-arrow-left"></span>');
    }
    else {
      isactive = 0;
      $('.sidebar').removeClass('is-active');
      $('.sidebar-toggle').html('<span class="ion-ios-arrow-right"></span>');
    }
  });
});
