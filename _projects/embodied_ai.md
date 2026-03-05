---
layout: project
title: "VLA-Powered Agentic Framework"
description: "Modular robotics control framework with integrated LLM tool-calling, perception, planning, and control layers."
date: 2024-10-30
categories: [Robotics, Embodied AI, Control Systems]
featured_image: "/assets/images/projects/vla-agent/featured.jpg"
github_url: "https://github.com/yourusername/vla-agentic-framework"
demo_url: "https://youtu.be/your-demo-video"

# 3D Models
models:
  - file: "/assets/models/vla-agent/model.stl"
    description: "Robotic arm end-effector CAD model"

# Circuit Schematics
schematics:
  - file: "/assets/schematics/vla-agent/circuit.png"
    description: "Hardware RPC communication layout"

# Code Files
code_files:
  - name: "RPC Communication Layer"
    file: "rpc_layer.py"
    language: "python"
    download_url: "https://github.com/yourusername/vla-agent/blob/main/src/rpc_layer.py"
    content: |
      # Add your ZMQ/RPC implementation here

# Components List
components:
  - name: "Compute Node"
    quantity: 1
    description: "Hardware running Gemini API and VLA models"
    link: ""

# Media gallery with images, videos, and GIFs
gallery:
  - type: "video"
    file: "/assets/images/projects/vla-agent/demo.mp4"
    description: "Executing tasks based on user text input"
---

## Project Overview
[cite_start]I developed a modular robotics control framework that integrates LLM tool-calling, perception, planning, and control layers[cite: 46]. [cite_start]These layers are connected over a high-frequency RPC layer, which allows the system to create, schedule, and execute tasks directly from user text inputs[cite: 46]. 
## Technical Details
* [cite_start]**Technologies Used**: Gemini API, ZMQ, RRT*, and Control-Systems[cite: 47].