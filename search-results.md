---
layout: page
title: "Search Results"
permalink: /search-results/
---
{% include forms/search.html %}
<section id="search-results" style="display: none;">
  <h3>Search results</h3>
  <div class="entries">
  </div>
</section>
{% raw %}
<script id="search-results-template" type="text/mustache">
  {{#entries}}
    <article>
      <h3>
        {{#date}}<small><time datetime="{{pubdate}}" pubdate>{{displaydate}}</time></small>{{/date}}
        <a href="{{url}}">{{title}}</a>
      </h3>
    </article>
  {{/entries}}
</script>
{% endraw %}
