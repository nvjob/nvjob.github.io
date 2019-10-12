

var isMobile = /iPhone|iPad|iPod|webOS|BlackBerry|Windows Phone|mobile|meego|bada|iemobile|kindle|maemo|phone|pocket|psp|symbian|Android/i.test(navigator.userAgent);


if (isMobile) {
//document.getElementById('topBannerIn').style.display= "none";
document.write ('<div class="bannermob"><span id="typed" class="banner_top_arrow"></span><script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.9"></script><script type="text/javascript" src="/res/js/baneer.text.js"></script></div>');
}
else {
document.write ('<div class="bannerpc"><iframe width="100%" height="100%" src="/res/banner-frame.html" frameborder="0" class="topBannerIn"></iframe></div>');
}




