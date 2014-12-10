{% assign countries = site.data.situations-and-cases-countries %}
var options = {
  valueNames: ['country', 'title',   'publication'],
  listClass: 'list-filter'
};
var entryList = new List('cases', options);

var optionsCountries = {
  valueNames: ['country', 'title',   'publication'],
  listClass: 'list-filter-countries',
  page: 300
};

var entryListCountries = new List('cases', optionsCountries);
  // cycle through  categories to generate filter

var countryInfo = $('#country-info').hide();
var filtersButton = $('#filter-countries-none').hide();

{% for link in countries  %}
if (document.getElementById("filter-{{link.ISO_code }}")) {
    document.getElementById("filter-{{link.ISO_code }}").onclick=function(){
        entryList.filter(function(item) {
           if (item.values().country == "{{link.ISO_code }}" ) {
             return true;
             } else {
             return false;
          }
      });
        entryListCountries.filter(function(item) {
           if (item.values().country == "{{link.ISO_code }}" ) {
             return true;
             } else {
             return false;
          }
      });
          countryInfo.show();
          filtersButton.show();
    };
  }
{% endfor %}
    //and clear the filters
if (document.getElementById("filter-countries-none")) {
 document.getElementById("filter-countries-none").onclick=function(){
     entryList.filter();
     countryInfo.hide();
    };
  }