var linkData = ["實驗室簡介", "使用守則", "教室使用表", "列印服務", "大一值班"];
var linkFuction = ["introduction", "rule", "classAgenda","printService", "duty"];

var linkTimes = 0;
var barFixed = false;
function showLink() {
    setTimeout(function() {
        $("#linkBar").append("<li class='animated fadeIn'><a onclick=showID('#" + linkFuction[linkTimes] + "')>" + linkData[linkTimes] + "</a></li");

        linkTimes++;
        if (linkTimes < linkData.length)
            showLink();
    }, 500)
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
        $(".link").css({"position":"fixed","top":"0","bottom":""});
        $("#linkBar").append("<li class='animated fadeIn' id='top'><a href='#top' onclick='scrollToTop()'>Top</a></li>");
        barFixed = true;
    }
}

function changeLinkToAbsolute() {
    if (barFixed) {
        $(".link").css({"position":"absolute","top":"","bottom":"0"});
        $("#top").fadeOut(300,function() {
                $(this).remove();
        });
        barFixed = false;
    }
}

function showID(scrollID) {
    $('html, body').animate({
        scrollTop: $(scrollID).offset().top
    }, 1000);
}

function scrollToTop() {
    $('html, body').animate({
        scrollTop: 0
    }, 1000);
}
