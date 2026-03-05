---
layout: project
title: "6-DOF Robotic Kinematics and Simulation"
order: 13
description: "A comprehensive MATLAB simulation environment for a 6-Degree-of-Freedom robotic arm covering forward/inverse kinematics and dynamics."
date: 2024-05-10
categories: [Kinematics, MATLAB, Simulation, Dynamics]
---


## Project Overview
Developed in MATLAB, this project established a comprehensive kinematic and dynamic simulation environment for a 6-Degree-of-Freedom robotic arm. 

## Technical Details
I implemented both forward kinematics (mapping joint angles to end-effector position) and inverse kinematics (calculating required joint angles for a desired spatial pose) with robust error handling for out-of-workspace coordinates.

The system was extended to include inverse dynamics using the Jacobian matrix, allowing for the calculation of necessary joint torques based on external wrenches applied to the end-effector. Additionally, the software calculated and rendered the robot's complete 3D spatial workspace and included a custom path-planning module to generate optimized motion profiles based on minimal time or torque criteria.