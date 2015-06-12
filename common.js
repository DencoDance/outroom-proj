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
    var m_top = $(overlay).next().css('margin-top');
    var flag = true;

    $(target).mouseenter(function(){
        $(this).mouseleave(function(){ //fake -> out
             if (flag){
                 $(overlay).next().stop().animate({'opacity':'1','margin-top':m_top},200);
                 $(overlay)
                     .stop()
                     .animate({'height':'0px','margin-top':$(target).height()},time)
                     .finish(function(){
                       $(overlay).addClass('hidden');
                 });
                 $(overlay).children(':first').addClass('hidden');
             }
        });

        $(overlay).next().stop().animate({'opacity':'0','margin-top':'-10px'},200);
        $(overlay) // action
            .removeClass('hidden')
            .stop()
            .animate({'height':$(target).height(),'margin-top':'0'},time)
            .finish(function(){
               flag = false;
        });
        $(overlay).children(':first').removeClass('hidden');

        $(overlay).mouseleave(function(){ //out
           $(this).next().stop().animate({'opacity':'1','margin-top':m_top},200);
           $(this)
               .stop()
               .animate({'height':'0px','margin-top':$(target).height()},time)
               .finish(function(){
                  flag = true;
                  $(overlay).addClass('hidden');
                  $(overlay).children(':first').addClass('hidden');
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
       $(this).next().addClass('darkFilter');
          $(this).mouseleave(function(){
             $(this).next().removeClass('darkFilter');
        });
    });

   // overlaySlider('.servicePhoto.first','.darkOverlay.first',250);
    overlaySlider('.servicePhoto.sec','.darkOverlay.sec',250);
    overlaySlider('.servicePhoto.third','.darkOverlay.third',250);
});