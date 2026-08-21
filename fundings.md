---
layout: page
permalink: /fundings/index.html
title: 科研项目
description: 方海川参与的科研项目。
---

{% for funding in site.data.profile.fundings %}
<section class="standalone-entry">
  <p class="entry-meta">{{ funding.category }} · {{ funding.period }}</p>
  <h2>{{ funding.title }}</h2>
  <p>项目编号 {{ funding.number }} · {{ funding.role }}</p>
</section>
{% endfor %}
