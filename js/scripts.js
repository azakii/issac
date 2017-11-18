// Tooltip

$(function(){ $('a[title]').tooltip(); });

// dropdown on hover


$(function(){
    if ($(window).width() >= 1025){
      //Add Hover effect to menus
      jQuery('ul.nav li.dropdown').hover(function() {
        jQuery(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn();
      }, function() {
        jQuery(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut();
      });
      $(function() {
              $(".dropdown").hover(
                  function(){ $(this).addClass('open') },
                  function(){ $(this).removeClass('open') }
              );
          });
  }
});




/*on click show player */
$(function(){
         $("#headphone").click(function(){
            $(".playerAudio").slideDown('slide');
            return false;
    });
  });



// Smooth Scrolling

$(function() {

  $("#scrolTo").click(function () {
    $('body').animate({
        scrollTop: $("#addpost").offset().top
    }, 2000, function () {
        $("#addpost").fadeOut();
        $("#addpost").fadeIn();
        $("#addpost").fadeOut();
        $("#addpost").fadeIn();
    });
});
});


//
$(function() {
  $('#scrolTo').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 2000);
        return false;
      }
    }
  });
});


$(function() {
  $(".board-inner li").click(function() {
    if (parseInt($(window).width()) < 990) {

      $('html,body').animate({
          scrollTop: $(".tab-content").offset().top},
          1500);
          }
  });
});


// steps
$(function(){
$("#submitForm").on('click', function() {
   $(".stepTwo").fadeIn();
   $(".StepOne,.stepThree,.stepFour").fadeOut();
});
$("#submitPhone").on('click', function() {
   $(".stepThree").fadeIn();
   $("StepOne,.stepTwo, .stepFour").fadeOut();
});
$("#verificationCode").on('click', function() {
   $(".stepFour").fadeIn();
   $("StepOne,.stepTwo, .stepThree").fadeOut();
});


});

// IOS ISSUE
$(function(){
if ('ontouchstart' in document.documentElement) { // or whatever "is this a touch device?" test we want to use
  $('body').css('cursor', 'pointer');
}
});


// accordion
$(function(){
  $('.collapse').on('show.bs.collapse', function() {
      var id = $(this).attr('id');
      $('a[href="#' + id + '"]').closest('.panel-heading').addClass('active-faq');
      $('a[href="#' + id + '"] .panel-title span').html('<i class="fa fa-angle-up" aria-hidden="true"></i>');
  });
  $('.collapse').on('hide.bs.collapse', function() {
      var id = $(this).attr('id');
      $('a[href="#' + id + '"]').closest('.panel-heading').removeClass('active-faq');
      $('a[href="#' + id + '"] .panel-title span').html('<i class="fa fa-angle-down" aria-hidden="true"></i>');
  });
});

//+IE678//// HORIZONTAL ACCORDION // roXon //////
var curr = 3;   // set desired opened tab

var contW = $('.cont').outerWidth(true);
$('.cont').wrap('<div class="slideaccordion" />');
$('.slideaccordion').eq(curr-1).width(contW).prev('.title').addClass('active');
$('.title').click(function(){
    $(this).addClass('active').siblings().removeClass('active');
    $('.slideaccordion').stop().animate({width:0},700);
    $(this).next('.slideaccordion').stop().animate({width:contW},700);
});
// TITLE ROTATION IE 6-7-8 FIX //
var titleH = $('.title').height();
var btn = $('.button');
btn.css('-webkit-transform','rotate(-90deg)');
btn.css('-moz-transform','rotate(-90deg)');
btn.css('transform','rotate(-90deg)');

if($.browser.msie && $.browser.version<="8.0"){
    btn.css({
        filter: 'progid:DXImageTransform.Microsoft.BasicImage(rotation=3)',
        width: titleH+'px',
        position:'absolute',
        marginTop:'0px'
    });
}
