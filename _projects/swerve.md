---
layout: project
title: "Swerve Drive Simulator"
description: "4-wheel swerve holonomic drive framework with integrated kinematics, dynamics, and continuous potential-based obstacle avoidance."
date: 2025-10-30
categories: [Simulation, Kinematics, Path Planning]
# featured: True
featured_image: "/assets/images/projects/swerve/pure.gif"
github_url: "https://github.com/yourusername/swerve-drive"
demo_url: "https://youtu.be/your-demo-video"

# 3D Models
models: []

# Circuit Schematics
schematics: []

# Code Files
# code_files:
#   - name: "Path Planning"
#     file: "planner.cpp"
#     language: "cpp"
#     download_url: "https://github.com/yourusername/swerve-drive/blob/main/src/planner.cpp"
#     content: |
#       # A* and pure pursuit implementation

# Components List
# components: []

# Media gallery with images, videos, and GIFs
gallery:
#   - type: "image"
#     file: "/assets/images/projects/swerve/maze.jpg"
#     description: "Procedurally generated obstacle maze navigation"
  - type: "video"
    file: "/assets/images/projects/swerve/pure.webm"
    description: "Path Tracking on Potenial map"
  - type: "video"
    file: "/assets/images/projects/swerve/dynamic.webm"
    description: "Dynamic Obstacle Avoidance"
  - type: "video"
    file: "/assets/images/projects/swerve/adaptive.webm"
    description: "Adaptive Torque COntrol for varying ground friction"
  - type: "image"
    file: "/assets/images/projects/swerve/fbd.png"
    description: "FBD for kinematics Design"
---

## Project Overview
I designed and simulated a complete 4-wheel swerve holonomic drive framework. The simulator features integrated kinematics, dynamics, and a dedicated simulation environment.

## Technical Details
* **Control Stack**: Utilizes a cascade adaptive+PID controller.
* **Pathing & Navigation**: Features pure pursuit path tracking and $A^*$ based path planning operating over a procedurally generated obstacle maze.
* **Obstacle Avoidance**: Implements dynamic obstacle avoidance utilizing continuous potential based obstacles.