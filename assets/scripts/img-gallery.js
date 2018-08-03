var conHeight = $(".gallery-img").height();
var imgHeight = $(".gallery-img img").height();
var gap = (imgHeight - conHeight) / 2;
$(".gallery-img img").css("margin-top", -gap);
