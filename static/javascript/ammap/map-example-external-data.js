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
        var dataProvider = {};

        function loadData(file){
           var request;
            if (window.XMLHttpRequest) {
                request = new XMLHttpRequest();
                // load
                request.open('GET', file, false);
                request.send();
                setData(request.responseText);
            }
        }

        function setData(data){
            map.dataProvider = JSON.parse(data);
            map.validateNow();
        }
        /* create areas settings
         * autoZoom set to true means that the map will zoom-in when clicked on the area
         * selectedColor indicates color of the clicked area.
         */
        map.areasSettings = {
            autoZoom: true,
            selectedColor: "#CC0000"
        };

        // let's say we want a small map to be displayed, so let's create it
        map.smallMap = new AmCharts.SmallMap();

        // write the map to container div
        map.write("map-stateparties");

        loadData("/api/state-parties.txt");

    });