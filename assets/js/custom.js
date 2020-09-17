$(document).ready(function(){
//skrollr
skrollr.init({
    edgeStrategy: 'set',
    easing: 'linear',
    forceHeight: false,
    mobileCheck: function(){
        if((/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i).test(navigator.userAgent || navigator.vendor || window.opera)){
              // mobile device
        }}

});
window.addEventListener("scroll", () => { 
    let pageYOffset = (window.pageYOffset || document.documentElement.scrollTop);

    document.querySelector(".pageYOffset").textContent = pageYOffset;
});

// nav 이동

var arrPos=[]; 
for(var i = 1 ; i < 7 ; i++){
    arrPos.push($('#section'+i).offset().top);
}
arrPos[1]= arrPos[1] - 350;
arrPos[4]= arrPos[4] + 80;

$('#nav > ul > li').on('click',function(a){
    
    a.preventDefault();
    $('#nav > ul > li').removeClass('on');
    $(this).addClass('on');
    i = $(this).index() + 1;
    console.log(i);
    $('html, body').animate({scrollTop:arrPos[i] + 450},600);
}) ;

// section3 사이트 탭 전환 
var Lbtn = $('.click > .left');
var Rbtn = $('.click > .right');
var click = $('.click > div');
var j = 1;
if(Rbtn.click()){

} 
Rbtn.on('click',function(e){
var site = $(this).closest('div.site');
var clickL = site.find('.click > div').length;
var Content = site.find('.site_info_wrap > div');
var Img = site.find('.right_contents_wrap > div');

if( j > clickL - 1 ){
  j = 1;
  Content.css('display','none').css({opacity:0});
  Content.eq(j-1).css('display','block').animate({opacity:'1'},1000);
  Img.removeClass('on').css({opacity:0});
  Img.eq(j-1).addClass('on').animate({opacity:'1'},1000);
  // j++; 
 
}else {
  Content.css('display','none').css({opacity:0});
  Content.eq(j).css('display','block').animate({opacity:'1'},1000);
  Img.removeClass('on').css({opacity:0});
  Img.eq(j).addClass('on').animate({opacity:'1'},1000);
  j++;
}
});
Lbtn.on('click',function(e){
var site = $(this).closest('div.site');
var clickL = site.find('.click > div').length;
var Content = site.find('.site_info_wrap > div');
var Img = site.find('.right_contents_wrap > div');
j--;

if( j < 1 ){
  j = clickL ;
  Content.css('display','none').css({opacity:0});
  Content.eq(j - 1).css('display','block').animate({opacity:'1'},1000);
  Img.removeClass('on').css({opacity:0});
  Img.eq(j -1).addClass('on').animate({opacity:'1'},1000);
  
}else {
  Content.css('display','none').css({opacity:0});
  Content.eq(j - 1).css('display','block').animate({opacity:'1'},1000);
  Img.removeClass('on').css({opacity:0});
  Img.eq(j - 1).addClass('on').animate({opacity:'1'},1000);
  
}
});
click.on('click',function(e){
  e.preventDefault();
  var site = $(this).closest('div.site'), 
      Content = site.find('.site_info_wrap > div'),
      Img = site.find('.right_contents_wrap > div'),
      i = $(this).index();
  site.find('.click > div > a').removeClass('on')
  $(this).find('a').addClass('on');
  Content.css('display','none').css({opacity:0});
  Content.eq(i).css('display','block').animate({opacity:'1'},1000);
  Img.removeClass('on').css({opacity:0});
  Img.eq(i).addClass('on').animate({opacity:'1'},1000);
  $('input').attr("checked", false);
});
var Site = $('.site-wrap');
Site.each(function(){
  var count = false;
  var currentItem = $(this);
  $(window).scroll(function(){
  if($(this).scrollTop() >= currentItem.offset().top - 500 && count == false ){
    currentItem.find('.click > div').eq(0).trigger('click');
    count = true;
  }});
})

var $progressBar = $('.skill_list li'),
$line = $progressBar.find('.line'),
$rate = $progressBar.find('.info_right span'),
$rateNum = $rate.attr('data-rate');

// 코드 에이터 탭 전환 
Tab = $('.tab_bar > span');
Tab.on('click',function(){
      var Code = $(this).closest('div.code-editor'), 
          content_list = Code.find('.content > pre'),
          Tab = Code.find('.tab_bar > span');;
      var j = $(this).index();
      Tab.removeClass('active');
      $(this).addClass('active');
      content_list.css('opacity',0).removeClass('active');
      content_list.eq(j).animate({opacity:1},300).addClass('active');
  
  });


// section2 스킬 카드 스크립트
var executed1 = false; 
$(window).scroll(function(){
if($(this).scrollTop() >= $('#section2').offset().top - 500 && executed1 == false){
$progressBar.each(function(){
  var currentItem = $(this),
  $line = currentItem.find('.line'),
  $rate = currentItem.find('.info_right span'),
  $rateNum = $rate.attr('data-rate');
  $('.card_wrap').addClass('on');
  $line.delay(800).animate({width:$rateNum +'%'},2500);
  $({mycount:0}).delay(800).animate({mycount:$rateNum},{
    duration:2500,
    progress:function(){
      var now = this.mycount;
      $rate.text(Math.floor(now));
    },  
  });
});
executed1 = true;
}else if($(this).scrollTop() >= $('#section2').offset().top + 500){
$('.card_wrap').addClass('flex');
$('.text_wrap').addClass('flex');

}else if( $(window).scrollTop() < 600){
$('info_right span').text('0');
$line.css('width','0')
$('.card_wrap').removeClass('on').removeClass('flex');
$('.text_wrap').removeClass('flex');

executed1 = false; 
}
// section3 codeview
function saveCode() {
  var copyText = document.getElementById("loginpage");
  copyText.select();
}


});
});
