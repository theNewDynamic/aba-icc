var options = {
  valueNames: ['category', 'title',   'publication'],
  listClass: 'list-filter'
};
var entryList = new List('entry-list-countries', options);
  // cycle through  categories to generate filter

{% for link in site.countries  %}
if (document.getElementById("filter-{{link.country_code }}")) {
    document.getElementById("filter-{{link.country_code }}").onclick=function(){
        entryList.filter(function(item) {
           if (item.values().category == "{{link.country_code }}" ) {
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