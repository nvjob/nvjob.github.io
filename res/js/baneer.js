
/*!
 * #NVJOB Promo Banner
 * (c) 2016 - 2019 #NVJOB Nicholas Veselov https://nvjob.github.io
 * Attribution-NonCommercial-NoDerivs 2.0 Generic (CC BY-NC-ND 2.0)
 * https://creativecommons.org/licenses/by-nc-nd/2.0/
 */


$(document).ready(function() {
function click(e) {
if (document.all) {
if (event.button == 2) {
return false;}
}
if (document.layers) {
if (e.which == 3) {
alert(message);
return false;}
}
}
if (document.layers)
{document.captureEvents(Event.MOUSEDOWN);}
document.onmousedown=click;
document.oncontextmenu=function(e){return false};
if (navigator.userAgent.indexOf("Explorer") != -1 || navigator.userAgent.indexOf("Trident") != -1) {
$('.scene').css({
position: 'absolute'
});
}
$.browser.chrome = /chrom(e|ium)/.test(navigator.userAgent.toLowerCase());
chromefix();
function chromefix() {
if ($.browser.chrome && navigator.appVersion.indexOf("Win") != -1 && $(window).width() >= 1400) {
$(".typelayer").show();
} else {
$(".typelayer").show();
}
}
$image = $(".scene img");
var headerchecker = 0;
var rotation = function() {
}
rotation();
imagevibar();
layers_loaded = 0;
function on_layer_load() {}
function imagevibar() {
if (headerchecker == 0) {
$(".astro_0").attr("src", "/res/images/a0.png").bind('onreadystatechange load', on_layer_load);
$(".astro_1").attr("src", "/res/images/a1.png").bind('onreadystatechange load', on_layer_load);
$(".astro_2").attr("src", "/res/images/a2.png").bind('onreadystatechange load', on_layer_load);
$(".astro_3").attr("src", "/res/images/a3.png").bind('onreadystatechange load', on_layer_load);
$(".astro_4").attr("src", "/res/images/a4.png").bind('onreadystatechange load', on_layer_load);
}
}
$(window).load(function() {
setTimeout(function() {
parallax();
}, 800);
});
$(window).load(function() {
setTimeout(function() {
$(".loadercontent").stop().animate({opacity: "0"}, 1500);
parallax();
}, 500);
setTimeout(function() {
$(".loadercontent").remove();
}, 2000);
});
function parallax() {
$(".typelayer").width($(window).width());
if ($(window).width() * 0.5625 >= $(window).height()) {
$image.width($(window).width());
$image.height($(window).width() * 0.5625);
$("img.astro_00,img.astro_0,img.astro_1,img.astro_2").width($(window).width() * 1.15);
$("img.astro_00,img.astro_0,img.astro_1,img.astro_2").height($(window).width() * 0.5625 * 1.15);
$("img.astro_00,img.astro_0,img.astro_1").css("margin-left", -$(window).width() * 0.07);
$("img.astro_00,img.astro_0,img.astro_1").css("margin-top", -$(window).height() * 0.07);
$("img.astro_2").css("margin-left", -$(window).width() * 0.06);
$("img.astro_2").css("margin-top", -$(window).height() * 0.05);
} else if ($(window).width() * 0.5625 < $(window).height()) {
$image.height($(window).height());
$image.width($(window).height() * 1.777);
$("img.astro_00,img.astro_0,img.astro_1,img.astro_2").height($(window).height() * 1.15);
$("img.astro_00,img.astro_0,img.astro_1,img.astro_2").width($(window).height() * 1.777 * 1.15);
$("img.astro_00,img.astro_0,img.astro_1").css("margin-left", -$(window).width() * 0.07);
$("img.astro_00,img.astro_0,img.astro_1").css("margin-top", -$(window).height() * 0.07);
$("img.astro_2").css("margin-top", -$(window).height() * 0.05);
}
$(".banner_top").css("height", $(window).height());
width = $image.width();
height = $image.height();
$(".scene").css({
left: $(window).width() / 2 - width / 2,
top: $(window).height() / 2 - height / 2,
});
$(".typelayer").css({
left: 25 + width / 2 - $(window).width() / 2,
top: height / 2
});
}
$(window).resize(function() {
chromefix();
parallax();
});
$(window).scroll(function(event) {
/*
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
}
else{
$(".typelayer").css({
top: height/2 - $(document).scrollTop()/2
});
}
*/
});
/*
animUp();
function animUp() {
$(".banner_top_arrow").animate({
bottom: "30px"
}, 1200, "swing", animDown);
}
function animDown() {
$(".banner_top_arrow").animate({
bottom: "45px"
}, 1200, "swing", animUp);
}
*/
});