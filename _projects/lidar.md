---
layout: project
title: "Low-Cost 3D LiDAR Design"
description: "Novel 3D-stabilized LiDAR fusing spinning ID LiDAR, IMU, and rotary encoder."
date: 2024-10-30
categories: [Hardware, Sensing, 3D Mapping]
featured_image: "/assets/images/projects/lidar-design/featured.jpg"
github_url: "https://github.com/yourusername/lidar-design"
demo_url: "https://youtu.be/your-demo-video"

# 3D Models
models:
  - file: "/assets/models/lidar-design/mount.stl"
    description: "3D printed mount for the spinning assembly"

# Circuit Schematics
schematics:
  - file: "/assets/schematics/lidar-design/wiring.png"
    description: "Encoder and IMU wiring diagram"

# Code Files
code_files:
  - name: "Sensor Fusion"
    file: "fusion.cpp"
    language: "cpp"
    download_url: "https://github.com/yourusername/lidar-design/blob/main/src/fusion.cpp"
    content: |
      # Kalman Filter implementation

# Components List
components:
  - name: "1D LiDAR"
    quantity: 1
    description: "Base sensor"
    link: ""
  - name: "IMU"
    quantity: 1
    description: "Stabilization sensor"
    link: ""
  - name: "Rotary Encoder"
    quantity: 1
    description: "Tracking rotational state"
    link: ""

# Media gallery with images, videos, and GIFs
gallery:
  - type: "image"
    file: "/assets/images/projects/lidar-design/pointcloud.jpg"
    description: "Resulting 3D point cloud map"
---

## Project Overview
[cite_start]I engineered a novel, low-cost 3D-stabilized LiDAR system[cite: 56]. [cite_start] The hardware facilitates low-cost 3D point cloud mapping[cite: 56].

## Technical Details
* [cite_start]**Sensor Fusion**: The system operates by fusing data from a spinning ID LiDAR, a Kalman Filter-stabilized IMU, and a rotary encoder[cite: 56].