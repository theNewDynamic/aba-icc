var options = {
  valueNames: ['country', 'title',   'publication'],
  listClass: 'list-filter'
};
var entryList = new List('cases', options);

var optionsCountries = {
  valueNames: ['country', 'title',   'publication'],
  listClass: 'list-filter-countries',
  page: 0
};
var entryListCountries = new List('cases', optionsCountries);
  // cycle through  categories to generate filter

{% for link in site.countries  %}
if (document.getElementById("filter-{{link.country_code }}")) {
    document.getElementById("filter-{{link.country_code }}").onclick=function(){
        

        entryList.filter(function(item) {
           if (item.values().country == "{{link.country_code }}" ) {
             return true;
             } else {
             return false;
          }
      });

        entryListCountries.filter(function(item) {
           if (item.values().country == "{{link.country_code }}" ) {
             return true;
             } else {
             return false;
          }
      });





    };
  }
{% endfor %}
    //and clear the filters
if (document.getElementById("filter-countries-none")) {
 document.getElementById("filter-countries-none").onclick=function(){
     entryList.filter();
    };
  }