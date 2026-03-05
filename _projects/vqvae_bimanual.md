---
layout: project
title: "VQ-VAE Hyperparameter Optimization for Bimanual Policies"
description: "Troubleshooting and optimizing bimanual robotic policies on the YOR (Cone-E) hardware using AR Kit visual-inertial localization."
date: 2025-06-20
categories: [Robotics, Simulation, Machine Learning]
gallery:
  - type: "video"
    file: "/assets/projects/vqvae_bimanual/bimanual.mp4"
    description: "Bimanual policy execution"
---

## Project Overview
Conducted at the GRAIL Lab, this project involved troubleshooting and optimizing bimanual robotic policies on the YOR (Cone-E) hardware. Trajectories were recorded using multi-iPhone visual-inertial localization via Apple's AR Kit. To validate these raw trajectory replays, I created a custom MuJoCo simulation environment using available MJCF files.

## Technical Details
During training, I ran comprehensive sweeps on the Vector Quantized Variational Autoencoder (VQ-VAE) hyperparameters within the VQ-BET behavioral cloning policy to isolate encoding bottlenecks. By analyzing variables like codebook size, sequential versus parallel codebooks, and loss weights, I identified that the primary degradation stemmed from AR Toolkit drift. To counter this, I proposed and implemented a targeted normalization strategy for the VQ-VAE input layers.