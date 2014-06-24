---
---
{% include scripts/jquery/dist/jquery.min.js %}
{% include scripts/jquery.backstretch.min.js %}
{% include scripts/nav-top-mobile.js %}
{% include scripts/smooth-scroll.js %}






{% comment %}
$("aside.sidebar-right").backstretch("/assets/img/document.write=(splash_image);",{fade:'fast'});

{% capture splash_image %}{{ page.splash_image }}{% endcapture %}

{% assign the_splash_image == {{page.splash_image}} %}
//title: {{splash_image}}
//title2: {{page.title}} {{the_splash_image}}

{% include scripts/jquery.backstretch.local.html splash_image="ff" %}



			{% include scripts/jquery/dist/jquery.min.js %}
			<script type="text/javascript" src="/assets/js/jquery.cycle2.min.js"></script>
			<script type="text/javascript" src="/assets/js/jquery.cycle2.carousel.min.js"></script>
			{% include scripts/widow-control.js %}
			{% include scripts/nav-top-mobile.js %}
			{% include scripts/smooth-scroll.js %}
			{% include scripts/d3.min.js %}
{% endcomment %}
