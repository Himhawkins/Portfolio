---
layout: project
title: "Vision-Based Gerontechnology"
order: 16
description: "cv2-dnn based face-tracking Raspberry Pi module to detect falls and trigger fail-safes."
date: 2024-10-30
categories: [Computer Vision, Raspberry Pi, Healthcare Tech]
featured_image: "/assets/images/projects/gerontech/featured.jpg"
github_url: "https://github.com/yourusername/gerontech-vision"
demo_url: "https://youtu.be/your-demo-video"

# 3D Models
models:
  - file: "/assets/models/gerontech/casing.stl"
    description: "Wall-mountable case for the Pi and camera"

# Circuit Schematics
schematics:
  - file: "/assets/schematics/gerontech/failsafe.png"
    description: "Fail-safe trigger relay circuit"

# Code Files
code_files:
  - name: "Fall Detection"
    file: "detect.py"
    language: "python"
    download_url: "https://github.com/yourusername/gerontech-vision/blob/main/src/detect.py"
    content: |
      # OpenCV face-tracking implementation

# Components List
components:
  - name: "Raspberry Pi"
    quantity: 1
    description: "Main processing unit"
    link: ""
  - name: "Pi Camera Module"
    quantity: 1
    description: "Video input"
    link: ""

# Media gallery with images, videos, and GIFs
gallery:
  - type: "image"
    file: "/assets/images/projects/gerontech/tracking.jpg"
    description: "Face-tracking bounding box"
---

## Project Overview
[cite_start]I built a specialized hardware module focused on assisting the elderly (Gerontechnology)[cite: 63]. [cite_start]The system acts as an automated observer that can detect falls and trigger appropriate fail-safes[cite: 63].

## Technical Details
* [cite_start]**Technology**: Built on a Raspberry Pi using a cv2-dnn based face-tracking framework[cite: 63].