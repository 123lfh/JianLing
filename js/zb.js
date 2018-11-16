/**
 * Created by Administrator on 2018/11/13 0013.
 */
window.onload=function(){
//下消息滚动
    (function () {

        var scrtime;

        $(".list3").hover(function(){

            clearInterval(scrtime);

        },function(){

            scrtime = setInterval(function(){

                var $ul =$(".list3");

                var liHeight =$ul.find("li:last").height();

                $ul.animate({marginTop :liHeight+"px"},800,function(){

                    $ul.find("li:last").prependTo($ul);

                    $ul.find("li:first").hide();

                    $ul.css({marginTop:0});

                    $ul.find("li:first").fadeIn(1000);

                });

                $ul.find("li").eq(":last").fadeOut(1000);

            },2400);

        }).trigger("mouseleave");


    })();

     $(".all-class").mouseenter(function(){
            $(".top-submenu").show()
        })
     $(".top-submenu").mouseleave(function(){
                $(".top-submenu").hide()
            })


$(window).scroll(function(){
    if($(window).scrollTop()>300){
        $(".toptop").addClass("on in")

    }else{
        $(".toptop").removeClass("on in")

    }

});

    //$(function(){
    //    $(window).scroll(function(){
    //        if($(window).scrollTop()>500){
    //            $(".nav_bar").addClass("on")
    //        }else{
    //            $(".nav_bar").removeClass("on")
    //        }
    //    })
    //});



}