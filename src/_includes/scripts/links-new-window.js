//opens non-local links in new window
$('a:not([href^="{{site.baseurl}}"]):not([href^="#"]):not([href^="/"])').attr("target","_blank");
