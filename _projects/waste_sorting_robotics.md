---
layout: project
title: "Automated Waste Detection and Sorting System"
order: 11
description: "End-to-end automated pipeline for waste detection, classification, and physical sorting using a network of XARM robots."
date: 2025-08-15
categories: [Computer Vision, ROS2, Robotics]
gallery:
  - type: "video"
    file: "/assets/projects/Waste_Sorting/working_real.mp4"
    description: "Real-world sorting execution"
  - type: "video"
    file: "/assets/projects/Waste_Sorting/llm_hri_f.mp4"
    description: "LLM Human-Robot Interaction interface"
  - type: "video"
    file: "/assets/projects/Waste_Sorting/detect_long.mp4"
    description: "YOLO detection tracking"
---

## Project Overview
Working alongside Prof. Rui Li at FAMS NYU, this project focused on building an end-to-end automated pipeline for waste detection, classification, and physical sorting. The physical system utilized a network of six XARM robotic arms managed via **ROS2 and Gazebo**, utilizing kinematics for precise pick-and-place operations informed by Time-of-Flight (ToF) proximity sensors.

## Perception & Interaction
To handle the perception layer, I fine-tuned a **YOLO model** specifically for identifying and segmenting paper, metal, and plastic waste. A rolling average filter was implemented across the detection horizon to mitigate noise and prevent misclassification of fast-moving objects on the live conveyor belt.

Additionally, this project explored Human-Robot Interaction (HRI). By integrating an edge LLM (Llama 3 Instruct) and a Pydantic-based **CrewAI multi-agent framework**, the system can interpret and execute natural language commands, allowing users to verbally dictate which waste categories the robots should target and where they should be deposited.