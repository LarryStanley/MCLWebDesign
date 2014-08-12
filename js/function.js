var linkData = ["實驗室介紹", "使用守則", "教室使用表", "列印服務", "大一值班"];

var linkTimes = 0;
function showLink() {
    setTimeout(function() {
        $("#linkBar").append("<li class='animated fadeIn'><a href=''>" + linkData[linkTimes] + "</a></li");

        linkTimes++;
        if (linkTimes < linkData.length)
            showLink();
    }, 500)
}

function getWindowPercentage() {
    return $(window).scrollTop()/ $(window).height();
}

function changeTitleOpacity(WindowPercentage) {
    if (WindowPercentage < 0.5)
        $(".centerTitle").css({opacity:(1-WindowPercentage)/2});
    else
        $(".centerTitle").fadeIn({opacity:0});

}
