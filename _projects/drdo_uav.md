---
layout: project
title: "Decentralized UAV Swarm (DRDO SASES)"
order: 16
description: "Ad-hoc networked, decentralized swarm of 4 drones for autonomous vision-based search and rescue."
date: 2024-10-30
categories: [UAV, Swarm, Networking]
featured_image: "/assets/images/projects/uav-swarm/featured.jpg"
github_url: "https://github.com/yourusername/uav-swarm"
demo_url: "https://youtu.be/your-demo-video"

# 3D Models
models: []

# Circuit Schematics
schematics: []

# Code Files
code_files:
  - name: "Mesh Routing setup"
    file: "routing.sh"
    language: "bash"
    download_url: "https://github.com/yourusername/uav-swarm/blob/main/src/routing.sh"
    content: |
      # OLSR configuration

# Components List
components:
  - name: "UAV Quadcopters"
    quantity: 4
    description: "Drones used in the swarm"
    link: ""

# Media gallery with images, videos, and GIFs
gallery:
  - type: "video"
    file: "/assets/images/projects/uav-swarm/rescue-demo.mp4"
    description: "Search and rescue simulation"
---

## Project Overview
I developed an ad-hoc networked, decentralized swarm consisting of 4 drones. The system was built for autonomous vision-based search and rescue operations[cite: 54].

## Technical Details
* **Technologies Used**: Utilized MAVROS and OLSR mesh routing to manage the decentralized ad-hoc network between the UAVs.