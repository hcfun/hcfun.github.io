---
title: "About"
layout: gridlay
sitemap: false
permalink: /about/
---

## About

<div class="section-card about-section-card">
<div class="pi-card">
<img src="{{ site.url }}{{ site.baseurl }}/images/{{ site.photo }}" class="pi-photo" alt="{{ site.name }}" loading="lazy">
<div>
<h3 class="pi-name">{{ site.name }}</h3>
<p style="font-style: italic; color: var(--text-secondary);">{{ site.title }}, {{ site.institution }}</p>
<div class="pi-links">
{% if site.email %}<a href="mailto:{{ site.email }}" class="icon-link" title="Email"><i class="fa-solid fa-envelope"></i></a>{% endif %}
{% if site.links.cv and site.links.cv != "" %}<a href="{{ site.url }}{{ site.baseurl }}/{{ site.links.cv }}" class="icon-link" title="CV"><i class="ai ai-cv"></i></a>{% endif %}
{% if site.links.google_scholar and site.links.google_scholar != "" %}<a href="{{ site.links.google_scholar }}" class="icon-link" title="Google Scholar"><i class="ai ai-google-scholar"></i></a>{% endif %}
{% if site.links.github and site.links.github != "" %}<a href="{{ site.links.github }}" class="icon-link" title="GitHub"><i class="fa-brands fa-github"></i></a>{% endif %}
{% if site.links.researchgate and site.links.researchgate != "" %}<a href="{{ site.links.researchgate }}" class="icon-link" title="ResearchGate"><i class="ai ai-researchgate"></i></a>{% endif %}
</div>
{% if site.data.pi[0].education %}
<ul style="margin-top: var(--space-4);">
{% for education in site.data.pi[0].education %}
<li>{{ education | replace: "-", "&#8211;" }}</li>
{% endfor %}
</ul>
{% endif %}
</div>
</div>
</div>

{% assign experiences = site.data.experiences.experiences %}
{% if experiences %}
<div class="section-card about-section-card">
<h3>Educational and Professional Experiences</h3>
<ul>
{% for experience in experiences %}
<li>{{ experience.period | replace: "-", "&#8211;" }}, {{ experience.position }}{% if experience.detail %}, {{ experience.detail }}{% endif %}, {{ experience.organization }}</li>
{% endfor %}
</ul>
</div>
{% endif %}

{% if site.data.awards %}
<div class="section-card about-section-card">
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
<div class="section-card about-section-card">
<h3>Fundings</h3>
{% for funding_group in funding_groups %}
<h4>{{ funding_group.name }}</h4>
<ul>
{% for item in funding_group.items %}
<li>{% if item.role %}({{ item.role }}) {% endif %}{% if item.period %}{{ item.period | replace: "-", "&#8211;" }}, {% endif %}<strong>{{ item.title }}</strong>{% if item.number %} ({{ item.number }}){% endif %}</li>
{% endfor %}
</ul>
{% endfor %}
</div>
{% endif %}

{% assign academic_service_groups = site.data.academic.academic_services %}
{% if academic_service_groups %}
<div class="section-card about-section-card">
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
