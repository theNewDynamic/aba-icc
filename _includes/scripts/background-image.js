	{% if page.background_image %}
		{% if page.background_image contains 'http' %}
	    {% capture image_url %}{{page.background_image}}{% endcapture %}
	  {% else %}
	    {% capture image_url %}/assets/img/{{page.background_image}}{% endcapture %}
	  {% endif %}
		{% assign image_url = image_url %}


		{% if page.background_image %}
	<img src="/assets/img/{{page.background_image}}" class="bg">
{% endif %}

