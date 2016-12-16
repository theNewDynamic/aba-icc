---
layout: null
---
{% assign countries = site.situations | group_by: 'country' | sort: 'name' %}
{% assign preliminary_examinations_color = 'green' %}
{% assign trials_color = 'black' %}
AmCharts.makeChart( "map-output", {
   "type": "map",

   "titles": [
		{
			"text": "Situations & Cases",
			"size": 18
		},
    {
      "text": "click on a country for details, or see the list below",
      "size": 11
    }
	],

   "areasSettings": {
     "autoZoom": true,
     "descriptionWindowTop": 1,
     "descriptionWindowLeft": 10,
     "outlineThickness": 0.1,
     "outlineColor": "#bababa"
   },

   "zoomControl" : {
       "buttonFillColor": "#FFF",
       "maxZoomLevel": 3,
       "top": 50,
       "panControlEnabled": false,
       "zoomControlEnabled": true,
       "gridBackgroundAlpha": 0.1,
       "gridAlpha": 0.3,

   },


   "legend" : {
       "width": "72%",
       "marginRight":12,
       "marginLeft":12,
       "equalWidths":false,
       "backgroundAlpha": 0.7,
       "backgroundColor": "#CCC",
       "borderColor": "#ffffff",
       "borderAlpha": 1,
       "top": 10,
       "left": 90,
       "horizontalGap": 10
     },

   "pathToImages" : "/assets/maps/images/",

   "dataProvider": {

    "map": "worldLow",
    "zoomLevel": 1.65,
    "zoomLongitude": 25,
    "zoomLatitude": 10,
    "getAreasFromMap":false,




  "areas":
  [
  {% for country in countries %}
    {% assign situations = country.items %}
    {% assign situationCountry = site.countries | where: 'slug', country.name %}
    {
      {% if situationCountry[0].iso_code %}"id":"{{ situationCountry[0].iso_code }}",{% endif %}
      {% for situation in situations %}
      {% if forloop.index == 1 %}
      {% comment %} Capture the description and output it without whitespace for valid JS {% endcomment %}
      {% capture description %}
        "description":
        "{% if situation.phase %}
          <p><strong>Phase:</strong> {{ situation.phase | escape }}</p>
          {% endif %}

          {% if situation.description %}
            <p><strong>Overview:</strong> {{ situation.description | escape }}</p>
          {% endif %}

          {% if situation.link_to_more_information %}
          <br /><a href='{{ situation.link_to_more_information }}' target='_blank'>link</a>
          {% endif %}
          <hr /><br /><a href='{{ situationCountry[0].url }}'>(Country Page)</a>",
      {% endcapture %}

      {{ description | strip | strip_newlines }}

        {% if situationCountry[0].title %}
          "title": "{{ situationCountry[0].title | escape }}",
        {% endif %}


        "color":
        {% if situation.phase == 'Preliminary Examinations, Initial Assessment' %}"#008AE5"
          {% elsif situation.phase == 'Preliminary Examinations, Admissibility Assessment' %}"#0073BF"
          {% elsif situation.phase == 'Preliminary Examinations, Subject Matter Jurisdiction Assessement' %}"#004D7F"
          {% elsif situation.phase == 'Preliminary Examinations, Closed - Decision Not to Proceed' %}"#003354"
          {% elsif situation.phase == 'Situations & Cases' %}"#000"
        {% endif %}
        {% endif %}
      {% endfor %}

    }{% unless forloop.last %},{% endunless %}{% endfor %}
  ]
}
});
