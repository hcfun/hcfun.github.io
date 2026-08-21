---
layout: page
permalink: /AcademicActivities/index.html
title: 学术服务
description: 方海川参与的期刊审稿工作。
---

<h2>期刊审稿人</h2>

<ul class="service-list">
{% for service in site.data.profile.services %}
  <li>{{ service }}</li>
{% endfor %}
</ul>
