---
layout: default
title: All Projects
permalink: /projects/
---

<div class="page-header" style="padding: 80px 0 40px; background: var(--background-color); border-bottom: 1px solid var(--border-color); text-align: center;">
  <div class="container">
    <h1 style="font-size: var(--font-size-3xl); color: var(--text-primary); letter-spacing: -0.02em;">All Projects</h1>
    <p style="color: var(--text-secondary); opacity: 0.8; max-width: 600px; margin: 15px auto 0; font-weight: 300;">
      A complete archive of my research, hardware designs, and software frameworks.
    </p>
  </div>
</div>

<div class="projects-showcase" style="padding: 60px 0;">
  <div class="container">
    
    <div class="projects-grid-featured">
      {% assign all_projects = site.projects | sort: "date" | reverse %}
      {% for project in all_projects %}
        <div class="project-card-featured">
          
          <div class="project-media">
            {% if project.featured_image %}
              {% assign file_ext = project.featured_image | split: '.' | last | downcase %}
              {% if file_ext == 'mp4' or file_ext == 'webm' or file_ext == 'mov' or file_ext == 'avi' %}
                <video class="project-image" autoplay loop muted playsinline style="object-fit: cover; width: 100%; height: 100%;">
                  <source src="{{ project.featured_image | relative_url }}" type="video/{{ file_ext }}">
                </video>
              {% else %}
                <img src="{{ project.featured_image | relative_url }}" alt="{{ project.title }}" class="project-image" style="object-fit: cover; width: 100%; height: 100%;">
              {% endif %}
            {% elsif project.gallery.first.type == 'video' %}
                <video class="project-image" autoplay loop muted playsinline style="object-fit: cover; width: 100%; height: 100%;">
                  <source src="{{ project.gallery.first.file | relative_url }}" type="video/mp4">
                </video>
            {% elsif project.models.first %}
              <div class="model-preview-small">
                <model-viewer 
                  src="{{ project.models.first.file | relative_url }}"
                  alt="{{ project.title }}"
                  camera-controls
                  auto-rotate
                  class="preview-model-small">
                </model-viewer>
              </div>
            {% else %}
              <div class="project-placeholder-small">
                <i class="fas fa-robot"></i>
              </div>
            {% endif %}
            
            <div class="project-overlay">
              <a href="{{ project.url | relative_url }}" class="project-link-overlay">
                <i class="fas fa-arrow-right"></i>
              </a>
            </div>
          </div>
          
          <div class="project-info-featured">
            <div class="project-categories-small">
              {% for category in project.categories limit:3 %}
                <span class="category-tag-small">{{ category }}</span>
              {% endfor %}
            </div>
            
            <h3 class="project-title-featured">
              <a href="{{ project.url | relative_url }}">{{ project.title }}</a>
            </h3>
            
            <p class="project-excerpt-small">{{ project.description | truncate: 100 }}</p>
            
            <div class="project-features-small">
              {% if project.models %}
                <span class="feature-badge-small" title="3D Models">
                  <i class="fas fa-cube"></i> {{ project.models.size }}
                </span>
              {% endif %}
              {% if project.schematics %}
                <span class="feature-badge-small" title="Schematics">
                  <i class="fas fa-microchip"></i> {{ project.schematics.size }}
                </span>
              {% endif %}
              {% if project.code_files %}
                <span class="feature-badge-small" title="Code Files">
                  <i class="fas fa-code"></i> {{ project.code_files.size }}
                </span>
              {% endif %}
            </div>
          </div>
        </div>
      {% endfor %}
    </div>
    
  </div>
</div>