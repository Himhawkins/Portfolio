---
layout: project
title: "Autonomous Indoor Drone (Flipkart GRID 2.0)"
order: 15
description: "VIO framework for GPS-denied indoor localization using stereo camera and IMU fusion."
date: 2024-10-30
categories: [UAV, Localization, Computer Vision]
featured_image: "/assets/images/projects/indoor-drone/featured.jpg"
github_url: "https://github.com/yourusername/indoor-drone"
demo_url: "https://youtu.be/your-demo-video"

# 3D Models
models: []

# Circuit Schematics
schematics: []

# Code Files
code_files:
  - name: "VIO Processing"
    file: "vio.cpp"
    language: "cpp"
    download_url: "https://github.com/yourusername/indoor-drone/blob/main/src/vio.cpp"
    content: |
      # VIO localization algorithm

# Components List
components:
  - name: "Stereo Camera"
    quantity: 1
    description: "Visual input for odometry"
    link: ""

# Media gallery with images, videos, and GIFs
gallery:
  - type: "video"
    file: "/assets/images/projects/indoor-drone/window-traversal.mp4"
    description: "Drone autonomously traversing a window"
---

## Project Overview
Developed as part of Flipkart GRID 2.0, I implemented a Visual Inertial Odometry (VIO) framework to enable autonomous navigation in GPS-denied environments. 

## Technical Details
* **Sensor Fusion**: Fused stereo camera and IMU data to achieve indoor localization.
* **Milestone**: Successfully enabled autonomous window traversal for the drone.