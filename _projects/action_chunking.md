---
layout: project
title: "Action Chunking for Imitation Learning"
order: 4
description: "Enhancing VQ-BET performance via action chunking, hyperparameter sweeps, and temporal moving averages at NYU GRAIL Lab."
date: 2025-04-15
categories: [Robotics, Imitation Learning, Machine Learning]
featured_image: /assets/projects/ActionChunk/smallskip.mp4
gallery:
  - type: "video"
    file: "/assets/projects/ActionChunk/action9.mp4"
    description: "Action chunking execution and inference smoothness"
  - type: "video"
    file: "/assets/projects/ActionChunk/bigskip.mp4"
    description: "Model performance using a 7-step long skip (bigskip)"
  - type: "video"
    file: "/assets/projects/ActionChunk/smallskip.mp4"
    description: "Model performance using a short skip configuration"
---

## Project Overview
Conducted at the GRAIL Lab at NYU Courant under Professor Lerrel Pinto, this research focused on enhancing the performance of a vanilla Vector Quantized Behavioral Transformer (VQ-BET) model. I implemented action chunking—a technique where the model predicts a sequence of future actions rather than a single step—to significantly improve inference smoothness and mitigate compounding execution errors.

## Technical Details
The experimentation phase involved extensive hyperparameter sweeps across blend and buffer decay factors, temporal moving averages, and chunk lengths. By testing models with various time skips (e.g., short, zero, and 7-step long skips), the project identified the optimal configurations for stable, long-horizon imitation learning tasks.