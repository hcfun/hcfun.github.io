---
title: "About"
layout: gridlay
sitemap: false
permalink: /about/
---

## About

{% assign experiences = site.data["edu&pro"].experiences %}
{% if experiences %}
<div class="section-card">
<h3>Educational and Professional Experiences</h3>
<ul>
{% for experience in experiences %}
<li><strong>{{ experience.period | replace: "-", "&#8211;" }}</strong> &mdash; {{ experience.position }}{% if experience.detail %}, {{ experience.detail }}{% endif %}, {{ experience.organization }}</li>
{% endfor %}
</ul>
</div>
{% endif %}

{% if site.data.awards %}
<div class="section-card">
<h3>Awards and Honors</h3>
<ul>
{% for award in site.data.awards %}
<li>{{ award.name | replace: "-", "&#8211;" }}</li>
{% endfor %}
</ul>
</div>
{% endif %}

{% assign funding_groups = site.data.funding.funding %}
{% if funding_groups %}
<div class="section-card">
<h3>Fundings</h3>
{% for funding_group in funding_groups %}
<h4>{{ funding_group.name }}</h4>
<ul>
{% for item in funding_group.items %}
<li>{% if item.role %}({{ item.role }}) {% endif %}{% if item.period %}{{ item.period | replace: "-", "&#8211;" }} {% endif %}<strong>{{ item.title }}</strong>{% if item.number %} ({{ item.number }}){% endif %}</li>
{% endfor %}
</ul>
{% endfor %}
</div>
{% endif %}

{% assign academic_service_groups = site.data.academic.academic_services %}
{% if academic_service_groups %}
<div class="section-card">
<h3>Academic Services</h3>
{% for service_group in academic_service_groups %}
<h4>{{ service_group.name }}</h4>
<ul>
{% for item in service_group.items %}
<li>{{ item }}</li>
{% endfor %}
</ul>
{% endfor %}
</div>
{% endif %}
