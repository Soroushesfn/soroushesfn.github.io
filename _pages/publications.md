---
layout: profile
permalink: /publications/
title: Publications & Manuscripts
description: Publications and manuscripts by Soroush Esfahanian.
nav: false
---

<div class="subpage">
  <h1>Publications & manuscripts</h1>
  <div class="section-content">
    {% for paper in site.data.homepage.publications %}
      <article class="publication-entry">
        <p class="publication-status">{{ paper.year }} / {{ paper.status }}</p>
        <h3>{{ paper.title }}</h3>
        <div class="authors">{{ paper.authors | markdownify }}</div>
        {% if paper.note %}<p class="paper-note">{{ paper.note }}</p>{% endif %}
        <p>{{ paper.description }}</p>
        {% if paper.citation %}<p class="paper-note">{{ paper.citation }}</p>{% endif %}
        <div class="inline-links">{% for link in paper.links %}<a href="{{ link.url }}">{{ link.label }} ↗</a>{% endfor %}</div>
      </article>
    {% endfor %}
  </div>
</div>
