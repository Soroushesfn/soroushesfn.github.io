---
layout: profile
permalink: /cv/
title: Curriculum Vitae
description: Current academic CV of Soroush Esfahanian, with research-focused versions.
nav: false
---

<div class="subpage">
  <h1>Curriculum vitae</h1>
  <p>Choose the version closest to your research focus. The experience and publications are identical across all four versions.</p>
  <div class="cv-downloads">
    {% for cv in site.data.homepage.cv %}
      <a href="{{ cv.file | prepend: '/assets/pdf/' | relative_url }}" download>{{ cv.label }} <span class="file-label">PDF ↓</span></a>
    {% endfor %}
  </div>
  <p>For a brief overview, see my <a href="{{ '/#research' | relative_url }}">research experience</a> and <a href="{{ '/#background' | relative_url }}">background</a>.</p>
</div>
