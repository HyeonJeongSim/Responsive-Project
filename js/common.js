// 스크롤 시 gnb배경 처리
$(window).on("scroll", function () {
  let scroll = $(window).scrollTop();
  let win_height = $(window).height();
  let header_height = $("header").height();
  let screenSize = $(window).width();

  if (scroll > win_height) {
    $(".topMove").fadeIn("slow");
  } else {
    $(".topMove").fadeOut("fast");
  }

  // 페이지별 다른 헤더 배경 처리 로직
  if (screenSize <= 1024 || screenSize >= 1024) {
    let isMainPage = $("body").hasClass("main-page");
    let headerBackgroundCondition;

    // 인덱스 페이지와 서브 페이지의 조건 분기
    if (isMainPage) {
      // 메인 페이지: 윈도우 높이 - 헤더 높이 기준
      headerBackgroundCondition = scroll > win_height - header_height;
    } else {
      // 서브 페이지: 고정된 스크롤 높이 기준
      headerBackgroundCondition = scroll > 100;
    }

    // 헤더 배경 처리
    if (headerBackgroundCondition) {
      $("header").css("background", "rgb(0 0 0 / 90%)");
    } else {
      $("header").css("background", "transparent");
    }
  }
});

// 햄버거 메뉴 처리
$(".menuOpen").click(function (e) {
  // 이벤트 파라미터 추가
  e.preventDefault(); // 기본 동작 방지
  $("#gnb").animate({ right: 0, opacity: 1 }, "fast");
  $(".box").show();
});

$(".close, .box").click(function (e) {
  // 이벤트 파라미터 추가
  e.preventDefault(); // 기본 동작 방지
  $("#gnb").animate({ right: "-100%", opacity: 0 }, "fast");
  $(".box").hide();
});

$(window).on("scroll", function () {
  //스크롤 값의 변화가 생기면
  let scroll = $(window).scrollTop(); //스크롤의 거리
  let win_height = $(window).height();
  // let header_height =$('header').height();

  if (scroll > win_height) {
    $(".topMove").fadeIn("slow");
  } else {
    $(".topMove").fadeOut("fast");
  }
});

$(".topMove").click(function (e) {
  e.preventDefault(); //부드럽게 상단 이동
  $("html,body").stop().animate({ scrollTop: 0 }, 1000);
});

let current = 0; // 1(소형테블릿이상) , 0(모바일)
$(window).resize(function () {
  let screenSize = $(window).width();
  if (screenSize > 1024) {
    $("#gnb").css({ right: 0, opacity: 1 });
    current = 1;
  }
  if (current == 1 && screenSize <= 1024) {
    $("#gnb").css({ right: "-100%", opacity: 0 });
    current = 0;
  }
});
