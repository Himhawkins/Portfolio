---
layout: project
title: "Generalizable Imitation Learning (SO-100 Arm)"
description: "HPC pipeline for training imitation models on complex teleoperated tasks."
date: 2024-10-30
categories: [Robotics, Embodied AI, HPC]
featured_image: "/assets/images/projects/so100-arm/featured.jpg"
github_url: "https://github.com/yourusername/so100-imitation"
demo_url: "https://youtu.be/your-demo-video"

# 3D Models
models: []

# Circuit Schematics
# schematics: []

# Code Files
code_files:
  - name: "LeRobot Pipeline"
    file: "pipeline.py"
    language: "python"
    download_url: "https://github.com/yourusername/so100-imitation/blob/main/src/pipeline.py"
    content: |
      # Training pipeline configuration

# Components List
components:
  - name: "SO-100 Robotic Arm"
    quantity: 1
    description: "Hardware used for teleoperation and testing"
    link: ""

# Media gallery with images, videos, and GIFs
gallery:
  - type: "video"
    file: "/assets/images/projects/so100-arm/sandwich.mp4"
    description: "Arm generalizing the 'making a sandwich' task"
---

## Project Overview
[cite_start]I built a High-Performance Computing (HPC) pipeline using LeRobot to train various imitation models, including VQ-Bet, ACT (Action Chunking Transformers), and Diffusion[cite: 50]. 

## Technical Details
* [cite_start]**Generalization**: The models successfully achieved generalization on complex tasks from teleoperated data[cite: 51].
* [cite_start]**Tasks Executed**: Included 'making a sandwich', object-pickup and drop-off, and cleaning[cite: 51].