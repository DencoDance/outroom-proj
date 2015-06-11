/*$(function(){
    $(window).scrollTop(0);
    var topPosition = $('.block1').offset().top - $('.mainHeader').height();

    $(window).on('scroll mousewheel',function(e){
        if( ($('.block1').offset().top > 0) && (e.originalEvent.wheelDelta < 0) ){
            e.preventDefault();
            e.stopPropagation();

            if( $('.block1').offset().top*0.8 > 180 ){
                $('.block1').offset({top:($('.block1').offset().top)*0.8 });
            }else{
                $('.block1').offset({top:0}).css('transition','0.2s');
            }
        }
        else if ( ($('.block1').offset().top <= topPosition) && (e.originalEvent.wheelDelta >= 0) && ($(window).scrollTop() < topPosition) ){
              e.preventDefault();
              $('.block1').css('transition','0s');
              $('.block1').offset({top:$('.block1').offset().top + $('.mainHeader').height()});
        }
    });
});*/

function overlaySlider(target,overlay){
    $(target).mouseover(function(){
        $(overlay).slideDown(300).mouseleave(function(){
            $(this).slideUp(300);
        });
    });
}

$(function(){
    $('header.mainHeader').load('header.html');
    $('footer').load('footer.html');
    $('.longBtn').load('longBtn.html');
//TODO include header,footer...

    overlaySlider('.bigPhoto','.overlay');
    overlaySlider('.smallImgLeft','.overlayLeft');
    overlaySlider('.smallImgRight','.overlayRight');
});