---
layout: compress
---
{% assign countries = site.countries | sort: 'title' %}
{% comment %}Lichtenstein{% endcomment %}
{% assign li = site.countries | where: 'iso_code', 'LI' %}

{% assign preliminary_examinations_color = 'green' %}
{% assign trials_color = 'black' %}
AmCharts.makeChart( "map-output", {
   "type": "map",

   "titles": [
		{
			"text": "State Parties to the ICC",
			"size": 18
		},
    {
      "text": "click on a country for details, or see the list below",
      "size": 11
    }
	],

   "areasSettings": {
    "autoZoom": false,
    "selectedColor": "#bababa",
    "descriptionWindowTop": 60,
    "descriptionWindowLeft": 10,
    "outlineThickness": 0.3,
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

    "getAreasFromMap":false,



    "images":

    [
    {% for country in li %}
      {% if country.iso_code %}
        {
          latitude:47.141667, longitude:9.523333,scale:0.5, type:"rectangle",zoomLevel:5,

          title: "{{ country.title }}"

        {% if country.ratified_or_acceded_date  %}

        ,"color":"#000"

        {% elsif country.signed_date %}

        ,"color":"#000"

        {% else %}

        ,"color":"#FFF"

        {% endif %}

        {% capture description %}
        ,"description":"
        {% if country.signed_date %}
          <p><strong>Signature:</strong> {{ country.signed_date | date: '%B %d, %Y' | strip_newlines }}</p>

          <p>
            {% if country.ratified_or_acceded_date %}
            <strong>Ratification or Accenssion:</strong> {{ country.ratified_or_acceded_date | date: '%B %d, %Y' | strip_newlines }}

            {% else %}
            Not Ratified or Acceded

            {% endif %}
          </p>

          {% else %}

          <p>Not a Signatory<br />
            {% if country.ratified_or_acceded_date %}

            <strong>Ratification or Accenssion:</strong> {{ country.ratified_or_acceded_date | date: '%B %d, %Y' | strip_newlines }}

            {% else %}

            <br />Not Ratified or Acceded

            {% endif %}
          </p>
          {% endif %}

          {% if country.genocide || country.crimes_against_humanity || country.aggression || country.war_crimes %}

            <h5>Domestic Atrocity Crime Legislation</h5>

            {% if country.genocide %}
            <strong>Genocide</strong><br />{{ country.genocide | markdownify | strip_newlines | replace: '"', "'" }}

            {% endif %}

            {% if country.crimes_against_humanity %}

            <strong>Crimes against Humanity</strong><br />{{ country.crimes_against_humanity | markdownify | strip_newlines | replace: '"', "'" }}

            {% endif %}

            {% if country.aggression %}
              <strong>Aggression</strong><br />{{ country.aggression | markdownify | strip_newlines | replace: '"', "'" }}

            {% endif %}

            {% if country.war_crimes %}
              <strong>War Crimes</strong><br />{{ country.war_crimes | markdownify | strip_newlines | replace: '"', "'"}}
            {% endif %}
              <br /><a href='{{ country.url }}'>(country page)</a>
          {% endif %}"
          {% endcapture %}
          {{ description | strip | strip_newlines }}
          } {% unless forloop.last %},{% endunless %}{% endif %}{% endfor %}

        ],








    "areas": [
      {% for country in countries %}

        {% if country.iso_code %}
        {
          "id":"{{ country.iso_code }}"

          {% if country.ratified_or_acceded_date %}

          ,"color":"#074b7b"

          {% elsif country.signed_date %}

          ,"color":"#6fa4c7"

          {% else %}

          ,"color":"#FFF"

          {% endif %}
          {% comment %} Capture the description and output it without whitespace for valid JS {% endcomment %}

          {% capture description %}
          ,"description":"
          {% if country.signed_date %}
            <p><strong>Signature:</strong> {{ country.signed_date | date: '%B %d, %Y' | strip_newlines }}</p>

            <p>
              {% if country.ratified_or_acceded_date %}
              <strong>Ratification or Accenssion:</strong> {{ country.ratified_or_acceded_date | date: '%B %d, %Y' | strip_newlines }}

              {% else %}
              Not Ratified or Acceded

              {% endif %}
            </p>

            {% else %}

            <p>Not a Signatory<br />
              {% if country.ratified_or_acceded_date %}

              <strong>Ratification or Accenssion:</strong> {{ country.ratified_or_acceded_date | date: '%B %d, %Y' | strip_newlines }}

              {% else %}

              <br />Not Ratified or Acceded

              {% endif %}
            </p>
            {% endif %}

            {% if country.genocide || country.crimes_against_humanity || country.aggression || country.war_crimes %}

              <h5>Domestic Atrocity Crime Legislation</h5>

              {% if country.genocide %}
              <strong>Genocide</strong><br />{{ country.genocide | markdownify | strip_newlines | replace: '"', "'" }}

              {% endif %}

              {% if country.crimes_against_humanity %}

              <strong>Crimes against Humanity</strong><br />{{ country.crimes_against_humanity | markdownify | strip_newlines | replace: '"', "'" }}

              {% endif %}

              {% if country.aggression %}
                <strong>Aggression</strong><br />{{ country.aggression | markdownify | strip_newlines | replace: '"', "'" }}

              {% endif %}

              {% if country.war_crimes %}
                <strong>War Crimes</strong><br />{{ country.war_crimes | markdownify | strip_newlines | replace: '"', "'"}}
              {% endif %}
                <br /><a href='{{ country.url }}'>(country page)</a>
            {% endif %}"
            {% endcapture %}
            {{ description | strip | strip_newlines }}

        }


          {% unless forloop.last %},{% endunless %}

          {% endif %}

        {% endfor %}
      ]











































}
});
