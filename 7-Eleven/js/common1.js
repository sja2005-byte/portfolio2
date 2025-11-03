function snbPos() {
    for(i=0; i<$('.snb').length; i++){
        let liPos = $("#gnbList > li:eq(" + i + ")").position().left
        let liWidth = $("#gnbList > li:eq(" + i + ") > a").width()/2;
        $(".snb:eq(" + i + ")").css({left: liPos + liWidth, transform: `translateX(-50%)` })
}
}
snbPos();
$(window).on('resize', snbPos)

// PushSubscriptionOptions();

$(".snb").hide();
$("#gnbList li").hover(function(){
    $(this).children('.snb').stop().fadeIn(200);
}, function(){
    $(this).children('.snb').stop().fadeOut(200);
})

// $(window).on('scroll', function(){
//     if($(this).scrollTop() < $(window).height()-100)
//         $("#header").css({backgroundColor: '#000'})
//     else
//     $("#header").css({backgroundColor: 'transparent'})
// })

//행사 상품 목록
// const products = {
//     "1+1": [
//         { name: "2080)슈퍼클린칫솔", price: "2,000원", <img src='' > "" },
//         { name: "케라시스)볼륨클리닉샴푸 750ML(F)", price: "11,000원", img: "shampoo1.png" },
//         { name: "케라시스)샴푸데미지250g", price: "5,500원", img: "shampoo2.png" },
//         { name: "케라시스)볼륨린스750ML(F)", price: "11,000원", img: "rinse.png" }
//     ],
//     "2+1": [],
//     "new": []
// };

// function showProducts(category) {
//     const productList = document.getElementById('productList');
//     productList.innerHTML = '';
    
//     products[category].forEach(product => {
//         const div = document.createElement('div');
//         div.className = 'product';
//         div.innerHTML = `
//             <img src="${product.img}" alt="${product.name}">
//             <p>${product.name}</p>
//             <p class="price">${product.price}</p>
//         `;
//         productList.appendChild(div);
//     });
// }

// showProducts('1+1'); // 초기 표시

//네비게이션 바
