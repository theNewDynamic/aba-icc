---
layout: null
---

 // add all your code to this method, as this will ensure that page is loaded
    AmCharts.ready(function() {
        // create AmMap object
        var map = new AmCharts.AmMap();
        // set path to images
        map.pathToImages = "/assets/img/ammap/";

        /* create data provider object
         map property is usually the same as the name of the map file.

         getAreasFromMap indicates that amMap should read all the areas available
         in the map data and treat them as they are included in your data provider.
         in case you don't set it to true, all the areas except listed in data
         provider will be treated as unlisted.
        */
        var dataProvider = {
            map: "worldLow",
            getAreasFromMap:false,
            {% include map/map-data-state-parties.json %}
        };
        // pass data provider to the map object
        map.dataProvider = dataProvider;

        /* create areas settings
         * autoZoom set to true means that the map will zoom-in when clicked on the area
         * selectedColor indicates color of the clicked area.
         */
        map.areasSettings = {
            autoZoom: false,
            selectedColor: "#bababa",
            descriptionWindowTop: 60,
            descriptionWindowLeft: 10,
            outlineThickness: 0.3,
            outlineColor: "#bababa"
        };

    //     valueLegend: {
    //     right: 10,
    //     minValue: "little",
    //     maxValue: "a lot!"
    // }
        map.zoomControl = {
            buttonFillColor: "#0e486d"
        }
            {% assign stateParties = site.data.state-parties-map %}
            {% assign statePartiesSigned = stateParties | where: 'date_signed', -'' %}
            {% assign statePartiesRatified = stateParties | where: 'state_party', 'Y' %}
            {% assign statePartiesSignedNotRatified = stateParties | where: 'signed_but_not_ratified', 'Y' %}

        map.legend = {
            width: "72%",
            marginRight:12,
            marginLeft:12,
            equalWidths:false,
            backgroundAlpha: 0.7,
            backgroundColor: "#CCC",
            borderColor: "#ffffff",
            borderAlpha: 1,
            top: 10,
            left: 90,
            horizontalGap: 10
            ,
            data: [{
                title: "{% if stateParties.size > 0 %}{{ statePartiesRatified.size }} state parties to the Rome Statute.{% endif %}",
                color: "#074b7b"
            }, {
                title: "{% if stateParties.size > 0 %}{{ statePartiesSignedNotRatified.size }} Signed but not ratified or acceded.{% endif %}",
                color: "#6fa4c7"
            } ]
    };


        // let's say we want a small map to be displayed, so let's create it
        //map.smallMap = new AmCharts.SmallMap();

        // write the map to container div
        map.write("map-stateparties");
    });