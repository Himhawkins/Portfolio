---
layout: project
title: "Swerve Drive Simulator"
description: "4-wheel swerve holonomic drive framework with integrated kinematics, dynamics, and continuous potential-based obstacle avoidance."
date: 2025-10-30
categories: [Simulation, Kinematics, Path Planning]
featured_image: "/assets/projects/swerve/pure.gif"
gallery:
  - type: "video"
    file: "/assets/projects/swerve/pure.webm"
    description: "Path Tracking on Potential map"
  - type: "video"
    file: "/assets/projects/swerve/dynamic.webm"
    description: "Dynamic Obstacle Avoidance"
  - type: "video"
    file: "/assets/projects/swerve/adaptive.webm"
    description: "Adaptive Torque Control for varying ground friction"
  - type: "image"
    file: "/assets/projects/swerve/fbd.png"
    description: "Free Body Diagram for kinematics Design"
  - type: "image"
    file: "/assets/projects/swerve/pure.gif"
    description: "Holonomic movement visualization"
---

## Project Overview
I designed and simulated a complete 4-wheel swerve holonomic drive framework. The simulator features integrated kinematics, dynamics, and a dedicated simulation environment.

## Technical Details
* **Control Stack**: Utilizes a cascade adaptive+PID controller.
* **Pathing & Navigation**: Features pure pursuit path tracking and A* based path planning operating over a procedurally generated obstacle maze.
* **Obstacle Avoidance**: Implements dynamic obstacle avoidance utilizing continuous potential based obstacles.