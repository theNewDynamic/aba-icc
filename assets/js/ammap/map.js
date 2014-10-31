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
            {% include site-specific/map-data.json %}
        };
        // pass data provider to the map object
        map.dataProvider = dataProvider;

        /* create areas settings
         * autoZoom set to true means that the map will zoom-in when clicked on the area
         * selectedColor indicates color of the clicked area.
         */
        map.areasSettings = {
            autoZoom: true,
            selectedColor: "#bababa",
            descriptionWindowTop: 120,
            descriptionWindowLeft: 10,
            outlineThickness: 0.5,
            outlineColor: "#bababa"
        };

    //     valueLegend: {
    //     right: 10,
    //     minValue: "little",
    //     maxValue: "a lot!"
    // }



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
            horizontalGap: 10,
            data: [{
                title: "Party to the Rome Statute",
                color: "#074b7b"
            }, {
                title: "Signed but not Ratified or Acceded",
                color: "#6fa4c7"
            }, {
                title: "Not a Signatory",
                color: "#FFF"
            } ]
    };


        // let's say we want a small map to be displayed, so let's create it
        //map.smallMap = new AmCharts.SmallMap();

        // write the map to container div
        map.write("map-stateparties");
    });