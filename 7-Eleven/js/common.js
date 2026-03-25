// Header
$(document).ready(function () {
    $('#nav ul li').mouseover(function () {
        $(this).find('Submenu').slideDown()
    })
    $('#nav ul li').mouseout(function () {
        $(this).find('Submenu').slideUp()
    })
})

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