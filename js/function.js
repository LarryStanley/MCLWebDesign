var linkData = ["實驗室簡介", "使用守則", "教室使用表", "列印服務", "大一值班"];
var linkFuction = ["introduction", "rule", "classAgenda","printService", "duty"];

var linkTimes = 0;
var barFixed = true;
function showLink() {
    setTimeout(function() {
        $("#linkBar").append("<li class='animated fadeIn'><a onclick='movePage(" + linkTimes + ")'>" + linkData[linkTimes] + "</a></li>");
        linkTimes++;
        if (linkTimes < linkData.length)
            showLink();
    }, 500);
    changeLinkToAbsolute();
}

function getWindowPercentage() {
    return $(window).scrollTop()/ $(window).height();
}

function changeTitleOpacity(windowPercentage) {
    if (windowPercentage < 0.5)
        $(".centerTitle").children().css({opacity:(0.5-windowPercentage)/0.5});
    else
        $(".centerTitle").children().css({opacity:0});

}

function changeLinkToFix() {
    if (!barFixed){
        $(".link").fadeOut("fast",function(){
            $(".link").css({"position":"fixed","top":"0","bottom":"","z-index":9999}).fadeIn();
             $("#linkBar").append("<li class='animated fadeIn' id='top'><a onclick='movePage(-1)'>Top</a></li>");
        });
        barFixed = true;
    }
}

function changeLinkToAbsolute() {
    if (barFixed) {
        $("#top").fadeOut(300,function() {
                $(this).remove();
        });
        $(".link").fadeOut("fast",function(){
            $(".link").css({"position":"absolute","top":"","bottom":"0","z-index":9999}).fadeIn();
        });
        barFixed = false;
    }
}

function movePage(index) {
    $(".main").moveTo(index+2);
}
