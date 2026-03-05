---
layout: project
title: "AI-Enabled Mobile Robotics Platform (VLM Servo)"
description: "A mobile manipulator integrated with a multi-layered, AI-driven software stack using Gemini 2.5 Pro and Moondream VLM."
date: 2025-10-30
categories: [Embodied AI, VLM, Mobile Manipulation, Hardware]
gallery:
  - type: "video"
    file: "/assets/projects/Mobile Manipulator with VLM Servo/Gemini_VLM_Astar_Navigation.mp4"
    description: "Gemini VLM A* Navigation"
  - type: "video"
    file: "/assets/projects/Mobile Manipulator with VLM Servo/Description_based_tracking_interact.mp4"
    description: "Description-based tracking and interaction"
  - type: "video"
    file: "/assets/projects/Mobile Manipulator with VLM Servo/Aruco_marker_based_tracking.mp4"
    description: "ArUco marker-based tracking"
  - type: "video"
    file: "/assets/projects/Mobile Manipulator with VLM Servo/TEXT_ONLY_LLM_CONTROL_and_scheduling.mp4"
    description: "Text-only LLM control and task scheduling"
---

## Project Overview
Developed as a comprehensive, deployable foundation for autonomous assistive care, this project integrated a dynamic mobile manipulator with a multi-layered, AI-driven software stack. The hardware featured both vertical and horizontal mobility, paired with a multi-axis robotic arm capable of complex environmental interactions. The core objective was to build a modular platform that translates high-level natural language instructions into physical, real-world execution.
It is an engineered a multi-modal agent designed to tackle complex, multi-step environments. The system relies on LLM function calling and VLM scene understanding to decompose and execute long-horizon tasks

## Technical Details
The platform's spatial reasoning and high-level navigation were driven by **Gemini 2.5 Pro**. In simulated environments, the model achieved a 95% success rate in dynamic maze solving and obstacle avoidance based on top-down visual feeds. To mitigate real-world latency, the physical navigation stack was augmented with classical algorithms, implementing **A* path planning** combined with OpenCV-based color detection and ArUco markers for robust, real-time self-localization.

For specialized perception and manipulation, the system utilized **Moondream**, a lightweight Vision Language Model (VLM), providing high-speed, forward-facing feature detection to actively track human subjects. The robotic arm's dexterity was trained using the **LeRobot framework** and an Action Chunking Transformer (ACT), teaching the arm complex social/physical tasks via imitation learning.
Capabilities: Enables the execution of tasks such as multi-object pick-and-place, as well as search and interact routines
Finally, to ensure seamless Human-Robot Interaction (HRI), I engineered a fully localized, zero-latency voice control pipeline using **OpenWakeWord**, **Whisper.cpp**, and a local **Gemma 2B** model via Llama.cpp for natural language understanding.