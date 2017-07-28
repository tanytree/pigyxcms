/**
 * Created by tanytree on 2015/7/15.
 */
$(function(){
    var i=0;
    var oLi=$(".fesTag .scrollBox li");
    var oLiW=oLi.outerWidth(true);
    var oLiLen=oLi.length;
    var oUl=$(".fesTag .scrollBox  ul");
    var oUlW=oUl.width(oLiLen*oLiW);

    var hdText=$(".fesHd .row");

    var scrollText=$(".info .scrollRow");
    var scrollTextRow=$(".info .scrollRow .row");
    var scrollTextRowH=scrollTextRow.height();
    var scrollTextRowLen=scrollTextRow.length;
    scrollText.height(scrollTextRowH*scrollTextRowLen);

    var imgSroll = $(".imgHolder .imgScroll ul");
    var phoneLI = imgSroll.find(" li");
    var phoneLiLen = phoneLI.length;
    var phoneLiW = phoneLI.width();
    imgSroll.width(phoneLiLen*phoneLiW);

    function up() {
        i++;
        if (i == oLi.length) {
            i = 0
        }
    }
    function down() {
        i--;
        if (i < 0) {
            i = oLi.length - 1
        }
    }
    /*ÇÐ»»·½·¨*/
    function run() {
        if(i>3){
            oUl.animate({
                "margin-left":-(i*oLiW-3*oLiW)
            })
        }else if(i<3){
            oUl.animate({
                "margin-left":0
            })
        }
        oLi.eq(i).addClass("on").siblings().removeClass("on");
        imgSroll.stop().animate({ //Í¼Æ¬ÇÐ»»
                'left': -phoneLiW * i + 'px'
            },
            1000);
        hdText.eq(i).fadeIn(300).siblings().fadeOut(300).hide();
        scrollText.animate({
            "margin-top":-i*scrollTextRowH
        });

    };

    oLi.click(function(){
        var index=0;
        index=oLi.index(this);
        i = index;
        run();
    }).eq(0).trigger("click");
    $(".fesBd .btn a").hover(function(){
        $(this).find('.tdc').fadeIn(300);
    },function(){
        $(this).find('.tdc').fadeOut(300);
    });
    var infoH=$(".fesBd .info").height();
    $(".fesBd .info").find(".setHeight").each(function(){
        var rowH= $(this).height();
        var topVal=(infoH-rowH)*0.5;
        $(this).css({
            paddingTop:topVal
        });
    })

});


$(function(){
    $(".insideScroll").each(function(){
        var i=0;
        var t=0;
        var pageI=$(this).find(".scrollPage i");
        var imgLi=$(this).find("ol li");
        function right() {
            i++;
            if (i == imgLi.length) {
                i = 0
            }
        }
        function left() {
            i--;
            if (i < 0) {
                i = imgLi.length - 1
            }
        }
        function run(){
            pageI.eq(i).addClass("on").siblings().removeClass("on");
            imgLi.eq(i).fadeIn(1000).siblings().fadeOut(1000).hide();
        }
        pageI.each(function(index){
            $(this).click(function(){
                i=index;
                run();
            });
        }).eq(0).trigger("click");
    })
});
