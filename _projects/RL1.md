---
layout: project
title: "Hybrid BC-RL Model"
description: "Enhanced VQBET Imitation Learning Policy with a residual RL layer for corrective behaviors."
date: 2024-10-30
categories: [Robotics, Machine Learning, Imitation Learning]
featured_image: "/assets/images/projects/hybrid-bc-rl/featured.jpg"
github_url: "https://github.com/yourusername/hybrid-bc-rl"
demo_url: "https://youtu.be/your-demo-video"

# 3D Models
models: []

# Circuit Schematics
schematics: []

# Code Files
code_files:
  - name: "Training Pipeline"
    file: "train.py"
    language: "python"
    download_url: "https://github.com/yourusername/hybrid-bc-rl/blob/main/src/train.py"
    content: |
      # LoRA and iterative finetuning implementation

# Components List
components: []

# Media gallery with images, videos, and GIFs
gallery:
  - type: "image"
    file: "/assets/images/projects/hybrid-bc-rl/plot.png"
    description: "Imitation accuracy improvements"
---

## Project Overview
[cite_start]Conducted at the GRAIL Lab (NYU Courant), this project focused on enhancing a VQBET model (an Imitation Learning Policy)[cite: 48]. [cite_start]By integrating a residual Reinforcement Learning (RL) layer, the model achieved boosted imitation accuracy and gained the ability to perform corrective behaviors[cite: 48].

## Technical Details
* [cite_start]Implemented LoRA (Low-Rank Adaptation)[cite: 49].
* [cite_start]Implemented rejection-sampling based Iterative finetuning[cite: 49].