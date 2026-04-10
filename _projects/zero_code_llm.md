---
layout: project
title: "Zero-Shot LLM-Driven Multi-Robot Coordination"
order: 1
description: "A framework enabling users to orchestrate a fleet of sensor-less, differential-drive mobile robots using natural language."
date: 2025-11-30
categories: [Multi-Robot Systems, LLM, Control Systems]
featured_image: "/assets/projects/3-robot-combined.mp4"
gallery:
  - type: "video"
    file: "/assets/projects/Mobile-Manipulation/combined_F.mp4"
    description: "Collaborative multi-robot task execution"
  - type: "video"
    file: "/assets/projects/3-robot-combined.mp4"
    description: "Swarm of 3 robots coordinating with multi agent architecture"
  - type: "video"
    file: "/assets/projects/Mobile-Manipulation/Screencast From 2025-12-01 11-44-01.webm"
    description: "System interface and tracking"
---

## Project Overview
This research presented a comprehensive "zero-shot" framework enabling users to orchestrate a fleet of sensor-less, differential-drive mobile robots using purely natural language instructions through a Python-based GUI. The system bridged the gap between abstract, high-level user intent and precise, low-level physical execution by delegating task decomposition to Large Language Models.

## System Architecture
The framework integrates LLM tool-calling, perception, planning, and control layers.These layers are connected over a high-frequency RPC layer, which allows the system to create, schedule, and execute tasks directly from user text inputs.

The perception layer relied on an overhead multi-camera setup calibrated using a Charuco board and stitched into a unified top-down view using homography alignment. Robot localization was handled externally by tracking ArUco tags mounted on the chassis. 

High-level cognitive reasoning was powered by **Gemini 2.5 Pro**, which decomposed complex user prompts into actionable sub-tasks, while Moondream handled VLM-based object queries. An RPC server was established to coordinate task, robot, and data services, communicating with the physical hardware via an ESP32 bridge supporting Wi-Fi, BLE, and ESP-NOW.

For physical execution, the framework utilized a highly responsive motion stack combining an **RRT* planner** with online replanning. A hybrid controller was deployed utilizing Pure Pursuit for general navigation and a tuned PID terminal controller to ensure millimeter-precision alignment. The framework was rigorously validated through complex physical experiments, including collaboratively ordering numbered blocks and two-robot color-sorting with live collision avoidance.

**Technologies Used**: Gemini API, ZMQ, RRT*, and Control-Systems.