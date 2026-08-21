---
layout: page
permalink: /publications/index.html
title: 学术论文
description: 方海川发表的代表性期刊与会议论文。
---

<p>以下为代表性学术论文，按发表年份排序。</p>

{% for paper in site.data.publications %}
<section class="standalone-entry">
  <p class="entry-meta">{{ paper.type }} · {{ paper.year }}</p>
  <h2><a href="{{ paper.url }}">{{ paper.title }}</a></h2>
  <div>{{ paper.authors | markdownify }}</div>
  <p><em>{{ paper.venue }}</em></p>
</section>
{% endfor %}
