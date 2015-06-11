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

function overlaySlider(target,overlay,time){
    $(overlay).css('margin-top',$(target).height()).addClass('hidden');
    var flag = true;

    $(target).mouseenter(function(){
        $(this).mouseleave(function(){
             if (flag){
                 $(overlay)
                     .stop()
                     .animate({'height':'0px','margin-top':$(target).height()},time)
                     .finish(function(){
                       $(overlay).addClass('hidden');
                 });
             }
        });

        $(overlay)
            .removeClass('hidden')
            .stop()
            .animate({'height':$(target).height(),'margin-top':'0'},time)
            .finish(function(){
               flag = false;
        });

        $(overlay).mouseleave(function(){
           $(this)
               .stop()
               .animate({'height':'0px','margin-top':$(target).height()},time)
               .finish(function(){
                  flag = true;
                  $(overlay).addClass('hidden');
           });
       });
    });
}

$(function(){
//
    $('header.mainHeader').load('header.html');
    $('footer').load('footer.html');
    $('.longBtn').load('longBtn.html');
//TODO include header,footer...

    $('.overlay,.overlayLeft,.overlayRight').mouseenter(function(){
        $(this).css({'transition':'0.7s','opacity':'1'}).mouseleave(function(){
            $(this).css('opacity','0.6');
        });
    });

    overlaySlider('.servicePhoto.first','.darkOverlay.first',200);
    overlaySlider('.servicePhoto.sec','.darkOverlay.sec',200);
    overlaySlider('.servicePhoto.third','.darkOverlay.third',200);
});