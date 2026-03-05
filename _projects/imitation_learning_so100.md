---
layout: project
title: "Generalizable Imitation Learning for Domestic Tasks"
order: 7
description: "High-performance computing pipeline using LeRobot to train Action Chunking Transformers (ACT) for a mobile SO-100 robotic arm."
date: 2025-07-20
categories: [Embodied AI, Imitation Learning, Robotics]
gallery:
  - type: "video"
    file: "/assets/projects/Imitation_Learning/Imitation_demos.mp4"
    description: "Autonomous domestic task execution"
  - type: "video"
    file: "/assets/projects/Imitation_Learning/sandwich_compiled.mp4"
    description: "Generalizing the 'making a sandwich' task"
 
---

## Project Overview
Focused on Embodied AI, I built a high-performance computing pipeline (using LeRobot) to train a sequence of utility models for a mobile SO-100 robotic arm. The architecture utilized Action Chunking Transformers linked to event triggers to govern autonomous behaviors.

## Technical Details
I built a High-Performance Computing (HPC) pipeline using LeRobot to train various imitation models, including VQ-Bet, ACT (Action Chunking Transformers), and Diffusion.

**Generalization**: The models successfully achieved generalization on complex tasks from teleoperated data[cite: 51].
**Tasks Executed**: Included ‘making a sandwich’, object-pickup and drop-off, and cleaning

By training on teleoperated data, the system successfully generalized across complex, multi-stage domestic tasks. The mobile platform was capable of fetching specific objects for a human, wiping down surfaces with a cloth, and autonomously clearing cluttered areas by picking up littered items and returning them to their designated storage locations.