// 스크롤 시 gnb배경 처리
$(window).on('scroll',function(){
    let scroll = $(window).scrollTop();
    let win_height =$(window).height();
    let header_height =$('header').height();
    let screenSize = $(window).width();

    if(scroll>win_height){
        $('.topMove').fadeIn('slow'); 
    }else{
        $('.topMove').fadeOut('fast');
    }

    if(screenSize <= 1024 || screenSize >= 1024){
        if(scroll>win_height-header_height){
            $('header').css('background','rgb(0 0 0 / 90%)');
            $('#headerArea #gnb ul li').css('hover', {'background': '#000'});
        
        }else{
            $('header').css('background','transparent');
            $('#headerArea #gnb ul li').css('hover', {'background': '#ffffff33'});
        }
    }
});


// 햄버거 메뉴 처리
$(".menuOpen").click(function(e) {  // 이벤트 파라미터 추가
    e.preventDefault();  // 기본 동작 방지
    $("#gnb").animate({right:0,opacity:1}, 'fast');
    $('.box').show();
});
   
$(".close, .box").click(function(e) {  // 이벤트 파라미터 추가
    e.preventDefault();  // 기본 동작 방지
    $("#gnb").animate({right:'-100%',opacity:0}, 'fast');
    $('.box').hide();
});


$(window).on('scroll',function(){ //스크롤 값의 변화가 생기면
    let scroll = $(window).scrollTop(); //스크롤의 거리
    let win_height =$(window).height();
    // let header_height =$('header').height();
   
    if(scroll>win_height){
        $('.topMove').fadeIn('slow');  
    }else{
        $('.topMove').fadeOut('fast');
    }

});

$('.topMove').click(function(e){
   e.preventDefault(); //부드럽게 상단 이동
   $("html,body").stop().animate({"scrollTop":0},1000); 
});


let current=0; // 1(소형테블릿이상) , 0(모바일)
$(window).resize(function() {
    let screenSize = $(window).width(); 
    if(screenSize > 1024) {
        $("#gnb").css({right:0,opacity:1});
        current=1;
    }
    if(current==1 && screenSize <= 1024) {
        $("#gnb").css({right:'-100%',opacity:0});
        current=0;
    }
});
