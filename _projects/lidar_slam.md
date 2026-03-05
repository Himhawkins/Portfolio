---
layout: project
title: "Low-Cost Software-Stabilized 3D LiDAR"
order: 9
description: "A highly functional, cost-effective, and perturbation-resistant LiDAR system optimized for indoor SLAM."
date: 2024-11-20
categories: [Hardware, SLAM, ROS, Sensing]
featured_image: "/assets/projects/lidar/imu_pcf.mp4"
gallery:
  - type: "video"
    file: "/assets/projects/lidar/imu_pcf.mp4"
    description: "Point cloud generation with IMU stabilization"
  - type: "video"
    file: "/assets/projects/lidar/dynamic.mp4"
    description: "Dynamic mapping in action"
  - type: "image"
    file: "/assets/projects/lidar/whole.png"
    description: "Completed LiDAR Assembly"
  - type: "image"
    file: "/assets/projects/lidar/internal.png"
    description: "Internal Wiring and Mechanics"


---

## Project Overview
I engineered a novel, low-cost 3D-stabilized LiDAR system. The hardware facilitates low-cost 3D point cloud mapping.
This hardware engineering project successfully delivered a highly functional, cost-effective, and perturbation-resistant LiDAR system optimized for indoor SLAM (Simultaneous Localization and Mapping). The custom sensor module fused a TF LUNA 1D Time-of-Flight sensor, a Kalman Filter-stabilized IMU, and a Parallax continuous servo with optical encoder feedback.

## Software Integration
The system operates by fusing data from a spinning ID LiDAR, a Kalman Filter-stabilized IMU, and a rotary encoder.
The system's brains ran on a BS2 BOE microcontroller communicating with a comprehensive, custom-built **ROS driver package**. The software suite handled serial data publishing, calibration, transformation frames (TF/Odometry), and laser scan generation for RViz visualization. The IMU data allowed the system to dynamically recalculate measured distances in the original plane of measurement to correct for physical perturbations, while also supporting a manual 3D spatial modeling mode.