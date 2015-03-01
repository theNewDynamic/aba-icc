---
layout: null
---

//============================= Situations & Cases ====================================\\
// add all your code to this method, as this will ensure that page is loaded
    AmCharts.ready(function() {
        // create AmMap object
        var map2 = new AmCharts.AmMap();
        // set path to images
        map2.pathToImages = "/assets/img/ammap/";

        /* create data provider object
         map property is usually the same as the name of the map file.

         getAreasFromMap indicates that amMap should read all the areas available
         in the map data and treat them as they are included in your data provider.
         in case you don't set it to true, all the areas except listed in data
         provider will be treated as unlisted.
        */
        //map2.addTitle("Preliminary Examinations, Cases, and Situations before the ICC", 22);

        var dataSituationsandCases = {
            map: "worldLow",
            zoomLevel: 1.45,
            zoomLongitude: 10,
            zoomLatitude: 1,
            getAreasFromMap:false,
            {% include map/map-data-situations-and-cases.json %}
        };
        // pass data provider to the map object
        map2.dataProvider = dataSituationsandCases;

        /* create areas settings
         * autoZoom set to true means that the map will zoom-in when clicked on the area
         * selectedColor indicates color of the clicked area.
         */
        map2.areasSettings = {

            //autoZoom: true,
            //centerMap: false,
            selectedColor: "#bababa",
            descriptionWindowBottom: 120,
            descriptionWindowLeft: 10,
            outlineThickness: 0.5,
            outlineColor: "#bababa"
        };

    //     valueLegend: {
    //     right: 10,
    //     minValue: "little",
    //     maxValue: "a lot!"
    // }
        map2.zoomControl = {
            buttonFillColor: "#0e486d"
        }

        {% assign cases = site.data.situations-and-cases-cases %}
         map2.legend = {
            width: "90%",
            marginRight:12,
            marginLeft:12,
            equalWidths:false,
            backgroundAlpha: 1,
            backgroundColor: "#eee",
            color: "#0e486d",
            fontSize: 14,
            borderColor: "#eee",
            borderAlpha: 1,
            top: 480,
            left: 10,
            horizontalGap: 10,
            data: [{
                title: "{% if cases.size > 0 %}There are currently {{ cases.size }} cases before the court.{% endif %} See sidebar for phases of preliminary examination.",
                color: "#eee"
                
            }

            ]
    };

        

        // write the map to container div
        map2.write("map-situations-and-cases");
    });
