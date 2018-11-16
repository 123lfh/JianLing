/**
 * Created by Administrator on 2018/11/5 0005.
 */
$(function(){
    //视频
   $(".video").on("click",function(){
       $(".shipin").show();
       $('#video').trigger('play');

   });
    $(".pop-close").on("click",function(){
        $(".shipin").hide();
        $('#video').trigger('pause');
    });
});
//吸顶盒
$(function(){
    $(window).scroll(function(){
        if($(window).scrollTop()>500){
            $(".nav_bar").addClass("on")
        }else{
            $(".nav_bar").removeClass("on")
        }
    })
});
//c3动画
$(function(){
    $(window).scroll(function(){
        if ($(window).scrollTop()>550){
        $(".content_li1").removeClass("anLeft")
        }else{
            $(".content_li1").addClass("anLeft anShow")
        }
    })
});
$(function(){
    $(window).scroll(function(){
        if ($(window).scrollTop()>550){
            $(".content_li2").removeClass("anBottom")
        }else{
            $(".content_li2").addClass("anBottom anShow")
        }
    })
});
$(function(){
    $(window).scroll(function(){
        if ($(window).scrollTop()>550){
            $(".content_li3").removeClass("anRight")
        }else{
            $(".content_li3").addClass("anRight anShow")
        }
    })
});
$(function(){
    $(window).scroll(function(){
        if ($(window).scrollTop()>1000){
            $(".step1").removeClass("anLeft")
        }else{
            $(".step1").addClass("anLeft anShow")
        }
    })
});
$(function(){
    $(window).scroll(function(){
        if ($(window).scrollTop()>1000){
            $(".step1-img").removeClass("anRight")
        }else{
            $(".step1-img").addClass("anRight anShow")
        }
    })
});
$(function(){
    $(window).scroll(function(){
        if ($(window).scrollTop()>1400){
            $(".step2").removeClass("anLeft")
        }else{
            $(".step2").addClass("anLeft anShow")
        }
    })
});
$(function(){
    $(window).scroll(function(){
        if ($(window).scrollTop()>1400){
            $(".step2-img").removeClass("anRight")
        }else{
            $(".step2-img").addClass("anRight anShow")
        }
    })
});
$(function(){
    $(window).scroll(function(){
        if ($(window).scrollTop()>1800){
            $(".step3").removeClass("anLeft")
        }else{
            $(".step3").addClass("anLeft anShow")
        }
    })
});
$(function(){
    $(window).scroll(function(){
        if ($(window).scrollTop()>1800){
            $(".step3-img").removeClass("anRight")
        }else{
            $(".step3-img").addClass("anRight anShow")
        }
    })
});
$(function(){
    $(window).scroll(function(){
        if ($(window).scrollTop()>2200){
            $(".step4").removeClass("anLeft")
        }else{
            $(".step4").addClass("anLeft anShow")
        }
    })
});
$(function(){
    $(window).scroll(function(){
        if ($(window).scrollTop()>2200){
            $(".step4-img").removeClass("anRight")
        }else{
            $(".step4-img").addClass("anRight anShow")
        }
    })
});
$(function(){
    $(window).scroll(function(){
        if ($(window).scrollTop()>3200){
            $(".pro").removeClass("anBottom")
        }else{
            $(".pro").addClass("anBottom anShow")
        }
    })
});