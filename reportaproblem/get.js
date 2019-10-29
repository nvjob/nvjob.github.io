/*!
 * GET URL Js 0.0.2
 * (c) 2016 - 2019 #NVJOB Nicholas Veselov https://nvjob.github.io
 * Licensed under MIT (https://nvjob.github.io/mit-license)
 */

$(document).ready(function() {

var get = window.location.search.replace('?','').split('&');
get = get.reduce(function(p,e){ var a = e.split('='); p[ decodeURIComponent(a[0])] = decodeURIComponent(a[1]); return p;},{});

if (get['success'] == "true") {
document.getElementById('success').innerHTML=('<div id="successfully">Question sent successfully.<br>Thanks, I will try to solve this problem in the near future.</div>');
}
else if (get['success'] == "false") {
document.getElementById('success').innerHTML=('<div id="successfully">Not success!<br>Please check that all fields are filled in correctly!</div>');
}

});