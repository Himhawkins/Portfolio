---
layout: default
---

<div class="hero-personal" style="padding: 60px 0;">
  <div class="container">
    <div class="hero-content" style="display: flex; align-items: center; gap: 40px; flex-wrap: wrap; justify-content: center;">
      
      <div class="hero-image-wrapper">
        <img src="{{ '/assets/images/profile.jpg' | relative_url }}" alt="Pranav Shukla" style="width: 220px; height: 220px; border-radius: 50%; object-fit: cover; border: 4px solid var(--accent-color); box-shadow: 0 10px 30px var(--shadow-color);">
      </div>

      <div class="hero-info-wrapper" style="flex: 1; min-width: 300px;">
        <div class="hero-text">
           <h1 class="hero-name">{{ site.author | default: "Pranav Shukla" }}</h1>
           <p class="hero-title">Roboticist</p>
        </div>
        
        <div class="hero-actions">
          <a href="{{ '/about/' | relative_url }}" class="btn-secondary">
            About
          </a>
           <a href="mailto:{{ site.email }}" class="btn-secondary">
            Contact
          </a>
        </div>
      </div>

    </div>

    <!-- Scroll Indicator Arrow -->
    <div class="scroll-indicator-container">
      <div class="scroll-arrow">
        <svg width="80" height="80" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="20" r="19" stroke="currentColor" stroke-width="1.5" opacity="0.3"/>
          <path d="M20 12L20 28M20 28L16 24M20 28L24 24" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
    </div>
  </div>
</div>

<div class="projects-showcase">
  <div class="container">
    <div class="section-header">
      <h2>Portfolio</h2>
      <p class="section-subtitle">A curated collection of my research and design</p>
    </div>
    
  <div class="projects-grid-featured">
      {% assign featured_projects = site.projects | where: "featured", true | sort: "order" %}
      {% assign all_projects = site.projects | sort: "order" %}
      {% assign combined_projects = featured_projects | concat: all_projects %}
      {% assign unique_projects = combined_projects | uniq %}
      {% for project in unique_projects limit: 10 %}
        <div class="project-card-featured">
          <div class="project-media" style="background-color: var(--surface-color); display: flex; justify-content: center; align-items: center; overflow: hidden;">
            
            {% if project.featured_image %}
              {% assign file_ext = project.featured_image | split: '.' | last | downcase %}
              {% if file_ext == 'mp4' or file_ext == 'webm' or file_ext == 'mov' or file_ext == 'avi' %}
                <video class="project-image" autoplay loop muted playsinline style="object-fit: cover; width: 100%; height: 100%;">
                  <source src="{{ project.featured_image | relative_url }}" type="video/{{ file_ext }}" onerror="this.parentElement.outerHTML='<img src=\'https://fonts.gstatic.com/s/e/notoemoji/latest/1f916/512.gif\' style=\'width:100px; height:100px; opacity:0.8;\'>'">
                </video>
              {% else %}
                <img src="{{ project.featured_image | relative_url }}" alt="{{ project.title }}" class="project-image" style="object-fit: cover; width: 100%; height: 100%;" onerror="this.onerror=null; this.src='https://fonts.gstatic.com/s/e/notoemoji/latest/1f916/512.gif'; this.style.objectFit='contain'; this.style.width='100px'; this.style.height='100px'; this.style.opacity='0.8';">
              {% endif %}
              
            {% elsif project.gallery.first.type == 'video' %}
                <video class="project-image" autoplay loop muted playsinline style="object-fit: cover; width: 100%; height: 100%;">
                  <source src="{{ project.gallery.first.file | relative_url }}" type="video/mp4" onerror="this.parentElement.outerHTML='<img src=\'https://fonts.gstatic.com/s/e/notoemoji/latest/1f916/512.gif\' style=\'width:100px; height:100px; opacity:0.8;\'>'">
                </video>
                
            {% elsif project.models.first %}
              <div class="model-preview-small" style="width: 100%; height: 100%;">
                <model-viewer 
                  src="{{ project.models.first.file | relative_url }}"
                  alt="{{ project.title }}"
                  camera-controls
                  auto-rotate
                  class="preview-model-small"
                  style="width: 100%; height: 100%;">
                </model-viewer>
              </div>
              
            {% else %}
              <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f916/512.gif" alt="Animated Robot Placeholder" style="width: 100px; height: 100px; opacity: 0.8; object-fit: contain;">
            {% endif %}
            
            <div class="project-overlay">
              <a href="{{ project.url | relative_url }}" class="project-link-overlay">
                <i class="fas fa-arrow-right"></i>
              </a>
            </div>
          </div>
          <div class="project-info-featured">
            <div class="project-categories-small">
              {% for category in project.categories limit:2 %}
                <span class="category-tag-small">{{ category }}</span>
              {% endfor %}
            </div>
            <h3 class="project-title-featured">
              <a href="{{ project.url | relative_url }}">{{ project.title }}</a>
            </h3>
            <p class="project-excerpt-small">{{ project.description | truncate: 80 }}</p>
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
    <div class="showcase-actions">
      <a href="{{ '/projects/' | relative_url }}" class="btn-primary-large">
        <i class="fas fa-th"></i> View All Projects
      </a>
    </div>
  </div>
</div>

<div class="skills-section">
  <div class="container">
    <div class="skills-content">
      <h2>Technical Expertise</h2>
      <div class="skills-grid">
        <div class="skill-category">
          <h3><i class="fas fa-brain"></i> AI & ML</h3>
          <div class="skill-tags">
            <span class="skill-tag">PyTorch</span>
            <span class="skill-tag">RL</span>
            <span class="skill-tag">VLA & LLMs</span>
            <span class="skill-tag">Behavioral Cloning</span>
          </div>
        </div>
        <div class="skill-category">
          <h3><i class="fas fa-robot"></i> Robotics</h3>
          <div class="skill-tags">
            <span class="skill-tag">ROS2</span>
            <span class="skill-tag">SLAM & VIO</span>
            <span class="skill-tag">Gazebo</span>
            <span class="skill-tag">LeRobot</span>
          </div>
        </div>
        <div class="skill-category">
          <h3><i class="fas fa-code"></i> Programming</h3>
          <div class="skill-tags">
            <span class="skill-tag">Python</span>
            <span class="skill-tag">C/C++</span>
            <span class="skill-tag">MATLAB</span>
            <span class="skill-tag">Bash</span>
          </div>
        </div>
        <div class="skill-category">
          <h3><i class="fas fa-microchip"></i> Hardware</h3>
          <div class="skill-tags">
            <span class="skill-tag">Mechatronics</span>
            <span class="skill-tag">Arduino/ESP32</span>
            <span class="skill-tag">RPi</span>
            <span class="skill-tag">SolidWorks</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(12px);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.scroll-indicator-container {
  text-align: center;
  padding: 0 0 5px;
  margin-top: -10px;
  display: none;
}

.scroll-arrow {
  display: inline-block;
  color: var(--accent-color);
  animation: bounce 2.5s ease-in-out infinite, fadeIn 0.8s ease-in-out 0.5s both;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.scroll-arrow:hover {
  transform: scale(1.1);
}

.scroll-arrow svg {
  filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.15));
}

@media (max-width: 768px) {
  .scroll-indicator-container {
    display: block !important;
  }
}
</style>