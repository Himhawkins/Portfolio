---
layout: project
title: "WiFi RSSI-Based Localization"
order: 17
description: "ESP-based system triangulating a ground bot's position within a 10cm error margin."
date: 2024-10-30
categories: [Localization, Arduino, ESP]
featured_image: "/assets/images/projects/wifi-localization/featured.jpg"
github_url: "https://github.com/yourusername/wifi-localization"
demo_url: "https://youtu.be/your-demo-video"

# 3D Models
models: []

# Circuit Schematics
schematics:
  - file: "/assets/schematics/wifi-localization/nodes.png"
    description: "ESP node placement"

# Code Files
code_files:
  - name: "Triangulation Logic"
    file: "triangulate.cpp"
    language: "cpp"
    download_url: "https://github.com/yourusername/wifi-localization/blob/main/src/triangulate.cpp"
    content: |
      # RSSI parsing and triangulation math

# Components List
components:
  - name: "ESP32/ESP8266 Modules"
    quantity: 3
    description: "WiFi nodes"
    link: ""

# Media gallery with images, videos, and GIFs
gallery:
  - type: "image"
    file: "/assets/images/projects/wifi-localization/heatmap.jpg"
    description: "RSSI mapping visualization"
---

## Project Overview
I designed a localization system leveraging an ESP-based hardware stack. The core goal was to track a ground robot accurately using WiFi signals.

## Technical Details
* **Accuracy**: The system successfully triangulates a ground bot's position utilizing WiFi RSSI data, operating within a highly accurate 20cm error margin.