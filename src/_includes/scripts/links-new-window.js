//opens non-local links in new window
$('a:not([href^="{{site.url}}"]):not([href^="#"]):not([href^="/"])').attr("target","_blank");
