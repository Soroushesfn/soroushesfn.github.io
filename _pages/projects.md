---
layout: profile
title: Selected Projects
permalink: /projects/
description: Selected NLP and machine-learning projects by Soroush Esfahanian.
nav: false
---

<div class="subpage">
  <h1>Selected projects</h1>
  <div class="section-content">
    {% for project in site.data.homepage.projects %}
      <article><h3><a href="{{ project.url }}">{{ project.title }} ↗</a></h3><p>{{ project.description }}</p></article>
    {% endfor %}
    <article><h3><a href="https://github.com/Soroushesfn/SSL-in-a-3D-Multi-Surface-Environment">3D sound source localization ↗</a></h3><p>Learning-based localization using audio timing and spectral features. Published at ICRoM 2024. See the <a href="{{ '/#publications' | relative_url }}">publication</a> for results and citation.</p></article>
  </div>
</div>
