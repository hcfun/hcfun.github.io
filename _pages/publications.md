---
title: "Publications"
layout: gridlay
sitemap: false
permalink: /publications/
---

## Publications

<input type="text" class="pub-search" id="pubSearch" placeholder="Filter by title, author, or year...">

<div class="pub-symbol-legend">
  <span><sup>&dagger;</sup> Equal contribution</span>
  <span><sup>*</sup> Corresponding author</span>
</div>

<div class="section-card" id="pubList">
<!-- <h3>Preprints</h3> -->

<!-- {% bibliography --query @unpublished %} -->

<h3>Journal Articles</h3>

{% bibliography --query @article %}

<h3>Conference Proceedings</h3>

{% bibliography --query @inproceedings %}
</div>
