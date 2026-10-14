---
layout: profile
title: News
permalink: /news/
description: Research updates from Soroush Esfahanian.
---

<div class="subpage">
  <h1>News</h1>
  <ol class="news-list">
    {% assign updates = site.news | sort: 'date' | reverse %}
    {% for item in updates %}
      <li><time datetime="{{ item.date | date: '%Y-%m-%d' }}">{{ item.date | date: '%d %b %Y' }}</time><div>{{ item.content }}</div></li>
    {% endfor %}
  </ol>
</div>
