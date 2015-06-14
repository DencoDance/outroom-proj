var scrollPosition = 0;

function mainHeader(){
    if( $(window).scrollTop() >= scrollPosition &&
        $(window).scrollTop() >= 3*$('.mainHeader').height()
    ){
        $('.mainHeader').stop().slideUp(150);
    }else{
        $('.mainHeader').stop().slideDown(150);
    }
    scrollPosition = $(window).scrollTop();
}

$(function(){
//
    $('header.mainHeader').load('header.html');
    $('footer').load('footer.html');
    $('.longBtn').load('longBtn.html');
//TODO include header,footer...
});