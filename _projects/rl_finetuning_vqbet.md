---
layout: project
title: "Residual Reinforcement Learning for VQ-BET Fine-Tuning"
order: 2
description: "Improving grasp accuracy of a pre-trained VQ-BET base policy by layering a residual RL component trained via Soft Actor-Critic (SAC)."
date: 2025-12-10
categories: [Reinforcement Learning, Machine Learning, Sim-to-Real]
featured_image: "/assets/projects/RL_Finetuning/Screencast From 2025-12-12 11-51-37.webm"
gallery:
  - type: "video"
    file: "/assets/projects/RL_Finetuning/Screencast From 2025-12-12 11-51-37.webm"
    description: "Policy Evaluation"
  - type: "video"
    file: "/assets/projects/RL_Finetuning/Screencast From 2025-12-05 02-16-18.webm"
    description: "Training in simulated environments"
  - type: "video"
    file: "/assets/projects/RL_Finetuning/Screencast From 2025-11-07 13-02-24.webm"
    description: "Residual behavior adjustments"
  - type: "image"
    file: "/assets/projects/RL_Finetuning/Screenshot From 2026-03-01 21-22-47.png"
    description: "Loss and Reward Plots"
  - type: "image"
    file: "/assets/projects/RL_Finetuning/Screenshot From 2026-03-01 21-22-27.png"
    description: "Training Metrics"
---

## Project Overview
This ongoing research at the GRAIL Lab (NYU Courant) seeks to close the sim-to-real gap for robotic manipulation. The core objective was to improve the grasp accuracy of a pre-trained VQ-BET base policy by layering a residual reinforcement learning component trained via Soft Actor-Critic (SAC) optimizations.

## Technical Details
Initial training occurred in a highly augmented visual simulation environment, followed by real-world fine-tuning using an auto-reset data collection setup with an XARM in a green-screen cage. The methodology incorporated offline RL critic initialization (evaluating Conservative Q-Learning and Implicit Q-Learning) alongside buffer mixing strategies. Furthermore, I implemented Low-Rank Adaptation (LoRA) and rejection-sampling-based iterative fine-tuning to continuously augment the trajectory data and improve corrective behaviors.