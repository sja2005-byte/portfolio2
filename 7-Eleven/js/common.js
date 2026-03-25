// Header
// $(document).ready(function () {
//     $('#nav ul li').mouseover(function () {
//         $(this).find('.Submenu').slideDown()
//     })
//     $('#nav ul li').mouseout(function () {
//         $(this).find('.Submenu').slideUp()
//     })
// })

// Header2

// $(function () {
//   $(".nav > ul > li").mouseover(function () {
//     $(".nav > ul > li > ul").stop().slideDown(200);
//   });

//   $(".nav > ul > li").mouseout(function () {
//     $(".nav > ul > li > ul").stop().slideUp(200);
//   });
// });

//Header3

// $(function(){
//     $(".nav > ul > li").mouseover(function(){
//         $(".nav > ul > li > ul").stop().slideDown(900);
//         $("header").addClass("on");
//     });

//     $(".nav > ul > li").mouseout(function(){
//         $(".nav > ul > li > ul").stop().slideUp(100);
//         $("header").removeClass("on");
//     });
// })

// Nav
$(function () {
 
  // ── 서브메뉴 열기 / 닫기 ──────────────────────────────
  // gnlList의 각 li에 마우스가 들어오면 자식 ul을 보여줌
 
  $(".gnlList > li").on("mouseenter", function () {
    // 현재 li의 직계 자식 ul (서브메뉴) 를 찾아서 보여줌
    $(this).children("ul, .gmlSub").stop(true, true).slideDown(200);
  });
 
  $(".gnlList > li").on("mouseleave", function () {
    // 마우스가 떠나면 서브메뉴 숨김
    $(this).children("ul, .gmlSub").stop(true, true).slideUp(150);
  });
 
});

// slaider
// $(function () {
//     let currentIndex =0; 

//     setInterval(function(){
//         let nextIndex = (currentIndex + 1) % 3;
//         console.log(nextIndex);

//         $(".sli")
//     })
// })

//slaider 1
// $(function(){
//     let currentIndex = 0;   //현재 이미지

//     setInterval(function(){     //3초에 한번씩 실행
//         let nextIndex = (currentIndex + 1) % 3; // 1 2 0 1 2 무한반복

//         $(".slider1").eq(currentIndex).fadeOut(1200);    //첫번째 이미지 사라짐
//         $(".slider2").eq(nextIndex).fadeIn(1200);        //두번째 이미지 나타남

//         currentIndex = nextIndex;  //두번째 인덱값을 현재 인덱값에 저장
//     }, 3000);
// });

//slaider 2
$(function(){
    let currentIndex = 0;   // 현재 이미지
    $("#slider").append($(".slider1 active").first().clone(true));  // 첫번째 이미지를 복사, 마지막에 추가

    setInterval(function(){     // 3초에 한번씩 실행
        currentIndex++;     // 현재 이미지를 1씩 증가
        $("#slider").animate({marginLeft: -currentIndex * 100 + "%"}, 600); // 이미지 애니메이션

        if(currentIndex == 3){  // 마지막 이미지일때
            setTimeout(function(){  
                $("#slider").animate({marginLeft: 0}, 0);   // 애니메이션을 정지
                currentIndex = 0;   // 현재이미지 초기화
            }, 700);
        }
    }, 3000);
});