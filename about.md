---
layout: default
title: About Me
permalink: /about/
---

<div class="hero-section" style="padding: 80px 0 40px; background: var(--background-color); border-bottom: 1px solid var(--border-color); text-align: center;">
    <div class="container" style="display: flex; flex-direction: column; align-items: center;">
        
        <img src="{{ '/assets/images/profile.jpg' | relative_url }}" alt="Pranav Shukla" style="width: 150px; height: 150px; border-radius: 50%; object-fit: cover; border: 4px solid var(--accent-color); box-shadow: 0 8px 20px var(--shadow-color); margin-bottom: 25px;">

        <h1 style="font-size: var(--font-size-3xl); letter-spacing: -0.02em; color: var(--text-primary); margin-bottom: 20px;">Pranav Shukla</h1>
        
        <div style="max-width: 800px; margin: 0 auto; text-align: center;">
            <p style="color: var(--text-primary); font-size: 1.2rem; font-weight: 500; margin-bottom: 15px;">
                Robotics Engineer & AI Researcher specializing in Embodied AI, Reinforcement Learning, and Mechatronics.
            </p>
            <p style="color: var(--text-secondary); line-height: 1.6; margin-bottom: 30px;">
                I focus on bridging the gap between advanced artificial intelligence and physical robotic execution. My recent work at the <strong>GRAIL Lab (NYU Courant)</strong> and <strong>FAMS NYU</strong> involves developing cutting-edge frameworks for Embodied AI, multi-robot coordination, and sim-to-real reinforcement learning. My expertise lies in zero-shot LLM/VLM-driven control systems, bimanual teleoperation, robust optimal control (MPC/SQP), and designing custom hardware solutions like stabilized 3D LiDARs and multi-axis mobile manipulators.
            </p>
        </div>

        <div style="display: flex; gap: var(--spacing-md); justify-content: center; flex-wrap: wrap;">
            <a href="{{ '/assets/projects/CV_NYU_NEW-3.pdf' | relative_url }}" class="btn-primary" target="_blank">
                <i class="fas fa-file-pdf"></i> Download Full Resume
            </a>
            <a href="{{ '/projects/' | relative_url }}" class="btn-primary">
                <i class="fas fa-th"></i> View Projects
            </a>
        </div>
    </div>
</div>

<div class="about-content">
    <div class="container">
        
        <section class="about-section">
            <h2>Professional Experience</h2>
            <div class="timeline">
                
                <div class="timeline-item">
                    <div class="timeline-date">Aug 2025 - Present</div>
                    <div class="timeline-content">
                        <h3>Researcher</h3>
                        <h4>GRAIL Lab | NYU Center for Data Science (CDS), NYU Courant</h4>
                        <ul>
                            <li>Enhanced Behavioral Cloning model (VqBET) performance via Residual Reinforcement learning and Iterative finetuning and implementing action chunking.</li>
                        </ul>
                    </div>
                </div>

                <div class="timeline-item">
                    <div class="timeline-date">Jan 2025 - Present</div>
                    <div class="timeline-content">
                        <h3>Research Assistant & Graduate Adjunct</h3>
                        <h4>MCRL & Automatic Control Lab | NYU Tandon</h4>
                        <ul>
                            <li>Developed Mobile Manipulation frameworks using VLM/LLM based planning, scheduling, and command interpretation.</li>
                            <li>Instructed ME-UY 3411: Experiments in data acquisition, PID & LQR controls, and system analysis on MATLAB/Simulink.</li>
                        </ul>
                    </div>
                </div>

                <div class="timeline-item">
                    <div class="timeline-date">2021 - 2024</div>
                    <div class="timeline-content">
                        <h3>Data Analyst & Data Science Intern</h3>
                        <h4>Axis Bank | Business Intelligence Unit</h4>
                        <ul>
                            <li>Developed pre-qualified banking product strategies leveraging customer demographic and credit data using Big Data, SAS, and CICD frameworks; managed monthly releases and automation.</li>
                            <li>Ran simulations to identify DB enhancements and coordinated implementation with Business, DE, DS, and Risk teams.</li>
                            <li>Implemented and validated 3 ML models (DT, MLP, Random Forest) for credit prediction, optimized for biased datasets.</li>
                        </ul>
                    </div>
                </div>

                <div class="timeline-item">
                    <div class="timeline-date">2019 - 2022</div>
                    <div class="timeline-content">
                        <h3>Embedded Team Head</h3>
                        <h4>Swarm Robotics Research Group | IIT Kharagpur</h4>
                        <ul>
                            <li>Led the embedded team developing hardware stacks and control systems for vision-based swarm-bots (ROS, Arduino).</li>
                            <li>Managed a budget of ~$20,000 USD, overseeing procurement, logistics, and deployment.</li>
                        </ul>
                    </div>
                </div>

            </div>
        </section>

        <section class="about-section">
            <h2>Education</h2>
            <div class="education-grid">
                <div class="education-card">
                    <h3>New York University (NYU) Tandon School of Engineering</h3>
                    <p class="degree">M.S. in Mechatronics and Robotics</p>
                    <p class="date">May 2026 (Est.) | New York, NY</p>
                </div>
                <div class="education-card">
                    <h3>Indian Institute of Technology (IIT) Kharagpur</h3>
                    <p class="degree">B.Tech and M.Tech (Dual Degree) in Structural Engineering</p>
                    <p class="minor">Minor: Computer Science and Engineering | Micro-Specialization: Embedded Control, Software and Design</p>
                    <p class="date">2017 - 2022 | Kharagpur, India</p>
                </div>
            </div>
        </section>

        <section class="about-section">
            <h2>Skills & Expertise</h2>
            <div class="skills-list">
                <div class="skill-category-card">
                    <h3><i class="fas fa-code"></i> Languages</h3>
                    <p>Python, C++, C, Bash, SQL, VBA, JavaScript, APL, XML</p>
                </div>
                <div class="skill-category-card">
                    <h3><i class="fas fa-brain"></i> ML & AI</h3>
                    <p>PyTorch, TensorFlow, RL, Behavioral Cloning, Gemini, VLA, Moondream, OpenAI API, Ollama, CrewAI, ACT, GROOT, Diffusion, HPC, Generative AI</p>
                </div>
                <div class="skill-category-card">
                    <h3><i class="fas fa-robot"></i> Robotics & CV</h3>
                    <p>ROS, LeRobot, SLAM, VIO, MPPI, A*, RANSAC, Kalman Filter, OpenCV, MAVROS</p>
                </div>
                <div class="skill-category-card">
                    <h3><i class="fas fa-microchip"></i> Hardware & Platforms</h3>
                    <p>Mechatronics, Arduino, RPi, ESP32, Linux, Gazebo, MATLAB, Simulink, Solidworks, GCP</p>
                </div>
            </div>
        </section>

        <section class="about-section">
            <h2>Extracurricular Leadership & Teaching</h2>
            <div class="leadership-list">
                <ul>
                    <li><strong>Instructor for Summer Program (NYU Tandon):</strong> Instructed SPARC, Summer program for robotics and automation under the NYU Tandon K12 Stem Education Program.</li>
                    <li><strong>Teaching Assistant (NYU Tandon):</strong> TA for Advanced Mechatronics under Professor V. Kapila.</li>
                    <li><strong>Teaching Assistant (IIT Kharagpur):</strong> Monte Carlo Simulations; Construction Planning & Management.</li>
                    <li><strong>Governor, Technology Literary Society:</strong> Led a society of 80+ students; Editor of campus magazine Alankar.</li>
                    <li><strong>Captain, Product Design Team:</strong> Led hall team for the Technology General Championship (2019-20).</li>
                    <li><strong>Volunteer, National Service Scheme:</strong> Conducted village camps, surveys, and donation drives.</li>
                </ul>
            </div>
        </section>

        <div style="text-align: center; padding: var(--spacing-2xl) 0; border-top: 1px solid var(--border-color); margin-top: var(--spacing-3xl);">
            <h3 style="color: var(--text-primary); margin-bottom: var(--spacing-lg);">Explore My Work</h3>
            <a href="{{ '/projects/' | relative_url }}" class="btn-primary-large">
                <i class="fas fa-th"></i> View All Projects
            </a>
        </div>

    </div>
</div>

<style>
.about-content { padding: var(--spacing-2xl) 0; }
.about-section { margin-bottom: var(--spacing-3xl); }
.about-section h2 { color: var(--text-primary); margin-bottom: var(--spacing-lg); padding-bottom: var(--spacing-sm); border-bottom: 1px solid var(--border-color); font-size: var(--font-size-2xl); }

/* Timeline Styles */
.timeline { position: relative; max-width: 800px; margin: 0 auto; padding: var(--spacing-md) 0; }
.timeline::after { content: ''; position: absolute; width: 2px; background-color: var(--border-color); top: 0; bottom: 0; left: 20px; margin-left: -1px; }
.timeline-item { padding: 10px 40px; position: relative; width: 100%; box-sizing: border-box; }
.timeline-item::after { content: ''; position: absolute; width: 16px; height: 16px; left: 12px; background-color: var(--surface-color); border: 4px solid var(--accent-color); top: 15px; border-radius: 50%; z-index: 1; }
.timeline-date { font-weight: bold; color: var(--accent-color); margin-bottom: 5px; }
.timeline-content { padding: 20px; background-color: var(--surface-color); border-radius: var(--radius-lg); border: 1px solid var(--border-color); box-shadow: 0 4px 15px var(--shadow-color); }
.timeline-content h3 { margin-top: 0; color: var(--text-primary); margin-bottom: 5px; }
.timeline-content h4 { margin-top: 0; color: var(--text-secondary); font-weight: 500; font-size: 1rem; margin-bottom: 15px; }
.timeline-content ul { margin-top: 10px; padding-left: 20px; color: var(--text-secondary); }
.timeline-content li { margin-bottom: 8px; line-height: 1.5; }

/* Education Styles */
.education-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: var(--spacing-lg); }
.education-card { padding: var(--spacing-xl); background-color: var(--surface-color); border-radius: var(--radius-lg); border: 1px solid var(--border-color); }
.education-card h3 { color: var(--primary-color); margin-bottom: 10px; }
.education-card .degree { font-weight: 600; color: var(--text-primary); margin-bottom: 5px;}
.education-card .minor { font-size: 0.9em; color: var(--text-secondary); margin-bottom: 10px;}
.education-card .date { color: var(--text-muted); font-size: 0.9em; }

/* Skills Styles */
.skills-list { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: var(--spacing-lg); }
.skill-category-card { padding: var(--spacing-lg); background-color: var(--surface-color); border-radius: var(--radius-lg); border: 1px solid var(--border-color); }
.skill-category-card h3 { display: flex; align-items: center; gap: 10px; color: var(--text-primary); margin-bottom: 15px; }
.skill-category-card h3 i { color: var(--accent-color); }
.skill-category-card p { color: var(--text-secondary); line-height: 1.6; }

/* Leadership Styles */
.leadership-list ul { padding-left: 20px; color: var(--text-secondary); line-height: 1.8; }
.leadership-list li { margin-bottom: 10px; }
.leadership-list strong { color: var(--text-primary); }

@media (max-width: 768px) {
    .timeline::after { left: 15px; }
    .timeline-item { padding: 10px 10px 10px 40px; }
    .timeline-item::after { left: 7px; }
}


.tech-stack { display: flex; flex-wrap: wrap; gap: var(--spacing-lg); justify-content: center; margin-top: var(--spacing-lg); }
.tech-item { display: flex; flex-direction: column; align-items: center; gap: var(--spacing-sm); padding: var(--spacing-lg); background-color: var(--surface-color); border-radius: var(--radius-lg); border: 1px solid var(--border-color); min-width: 120px; }
.tech-item i { font-size: var(--font-size-2xl); color: var(--accent-color); }
.tech-item span { font-weight: var(--font-weight-medium); color: var(--text-primary); }

.about-content {
    padding: var(--spacing-2xl) 0;
}

.about-section {
    margin-bottom: var(--spacing-3xl);
}

.about-section h2 {
    color: var(--text-primary);
    margin-bottom: var(--spacing-lg);
    padding-bottom: var(--spacing-sm);
    border-bottom: 1px solid var(--border-color);
    font-size: var(--font-size-2xl);
    letter-spacing: -0.01em;
}

.features-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: var(--spacing-xl);
    margin-top: var(--spacing-lg);
}

.feature-item {
    padding: var(--spacing-lg);
    background-color: var(--surface-color);
    border-radius: var(--radius-sm);
    border: none;
    box-shadow: 0 4px 20px var(--shadow-color);
    transition: transform var(--transition-normal), box-shadow var(--transition-normal);
}

.feature-item:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 30px var(--shadow-hover);
}

.feature-item h3 {
    display: flex;
    align-items: center;
    gap: var(--spacing-sm);
    color: var(--text-primary);
    margin-bottom: var(--spacing-md);
}

.feature-item h3 i {
    color: var(--primary-color);
    font-size: var(--font-size-lg);
}

.perfect-for-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: var(--spacing-lg);
    margin-top: var(--spacing-lg);
}

.perfect-for-item {
    text-align: center;
    padding: var(--spacing-lg);
    background-color: var(--surface-color);
    border-radius: var(--radius-lg);
    border: 1px solid var(--border-color);
}

.perfect-for-item h4 {
    color: var(--primary-color);
    margin-bottom: var(--spacing-sm);
}

.tech-stack {
    display: flex;
    flex-wrap: wrap;
    gap: var(--spacing-lg);
    justify-content: center;
    margin-top: var(--spacing-lg);
}

.tech-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--spacing-sm);
    padding: var(--spacing-lg);
    background-color: var(--surface-color);
    border-radius: var(--radius-lg);
    border: 1px solid var(--border-color);
    min-width: 120px;
}

.tech-item i {
    font-size: var(--font-size-2xl);
    color: var(--accent-color);
}

.tech-item span {
    font-weight: var(--font-weight-medium);
    color: var(--text-primary);
}

.getting-started-steps {
    background-color: var(--surface-color);
    padding: var(--spacing-xl);
    border-radius: var(--radius-lg);
    border: 1px solid var(--border-color);
    margin: var(--spacing-lg) 0;
}

.getting-started-steps li {
    margin-bottom: var(--spacing-md);
    line-height: var(--line-height-relaxed);
}

.cta-buttons {
    display: flex;
    gap: var(--spacing-md);
    justify-content: center;
    flex-wrap: wrap;
    margin-top: var(--spacing-xl);
}

@media (max-width: 640px) {
    .features-list {
        grid-template-columns: 1fr;
    }
    
    .perfect-for-grid {
        grid-template-columns: 1fr;
    }
    
    .tech-stack {
        justify-content: center;
    }
    
    .cta-buttons {
        flex-direction: column;
        align-items: center;
    }
}
</style>