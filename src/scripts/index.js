var $ = require('./common/libs/zepto-modules/zepto.js');
require('./common/libs/zepto-modules/event.js');
require('./common/libs/zepto-modules/ajax.js');
require('./common/libs/zepto-modules/touch.js');

var Swiper = require('./common/libs/swiper/swiper.min.js');
var swiperAni = require('./common/libs/swiper/swiper.animate1.0.2.min.js');
var IScroll = require('./common/libs/iscroll/iscroll.js');

$(".int").show();
$(".out").hide();
var swiper = new Swiper('.int .swiper-container', {
    onInit: function(swiper) { //Swiper2.x的初始化是onFirstInit
        swiperAni.swiperAnimateCache(swiper); //隐藏动画元素 
        swiperAni.swiperAnimate(swiper); //初始化完成开始动画
    },
    onSlideChangeEnd: function(swiper) {
        swiperAni.swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
    }
});


$("#enter").tap(function() {
    $(".int").hide();
    $(".out").show();
    var myScroll;

    function loaded() {
        myScroll = new IScroll('#wrapper', { mouseWheel: true });
    }

    document.addEventListener('touchmove', function(e) { e.preventDefault(); }, false);

    loaded();
    var swiper2 = new Swiper('.out .swiper-container', {

        loop: false,
        paginationClickable: true,
        mousewheelControl: true,
        autoplayDisableOnInteraction: false,

    });
});
/*var myScroll;
$.post('http://localhost:8000/skill',function(data) {
	var html='';
	for(var i=0;i<data.length;i++){
		html+='<li>'+data[i].category+','+data[i].name+'</li>'
	}
	$('#scroller ul').html(html);

	myScroll = new IScroll('#wrapper', { mouseWheel: true });
		document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
});*/
var myScroll;
$.post('http://localhost:8000/skill', function(data) {

    for (var i = 0; i < data.length; i++) {
        $('.p1').eq(i).html('category:' + data[i].category)
        $('.p2').eq(i).html('name:' + data[i].name)
        $('.p3').eq(i).html('time:' + data[i].time)
    }


    myScroll = new IScroll('#wrapper', { mouseWheel: true });
    document.addEventListener('touchmove', function(e) { e.preventDefault(); }, false);
});



$.post('http://localhost:8000/project', function(data) {

    for (var i = 0; i < data.length; i++) {
        $('.text').eq(i).html('name:' + data[i].name)
        $('.arc').eq(i).html('description:' + data[i].description)
        $('.scr').eq(i).html('detail:' + data[i].detail)
    }

});
$.post('http://localhost:8000/work', function(data) {

    for (var i = 0; i < data.length; i++) {
        $('.text1').eq(i).html('name:' + data[i].name)
        $('.arc1').eq(i).html('category:' + data[i].category)
        $('.scr1').eq(i).html('projects:' + data[i].projects)
    }

});
/*$('.nei').on('swipeLeft', function() {
    var $index=$(this).index()+1
     $('.nei').eq($index).css({ 'display': 'block' }).siblings('.nei').css({ 'display': 'none' })
})*/
/*$('.nei').on('swipeRight', function() {
   
});
*/
$('#footer .button').tap(function() {
    var index = $(this).index()
    $('.nei').eq(index).css({ 'display': 'block' }).siblings('.nei').css({ 'display': 'none' })
    myScroll.scrollTo(0,0);
    myScroll.refresh();

});
	var media=document.getElementById('media')
$('.music').tap(function(){
	
	if(media.paused){
		media.play();
		$('.music').addClass('change')
	}else{
		media.pause();
		$('.music').removeClass('change')
	}
})
