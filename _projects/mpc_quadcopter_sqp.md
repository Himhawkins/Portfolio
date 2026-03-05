---
layout: project
title: "MPC-Based Quadcopter Control using SQP"
order: 9
description: "Designed a Sequential Quadratic Programming (SQP) solver from scratch to drive an MPC framework for advanced aerial maneuvers."
date: 2025-03-01
categories: [Control Systems, Optimal Control, UAV]
featured_image: "/assets/projects/RL_QUAD/quad_sqp.mp4"
gallery:
  - type: "video"
    file: "/assets/projects/RL_QUAD/quad_mpc.mp4"
    description: "MPC tracking performance"
  - type: "video"
    file: "/assets/projects/RL_QUAD/quad_sqp.mp4"
    description: "360-degree flip execution"
  - type: "image"
    file: "/assets/projects/RL_QUAD/Screenshot From 2026-03-01 19-27-12.png"
    description: "System States and Control Inputs"
---

## Project Overview
This project tackled the challenge of advanced aerial maneuvers through optimal control theory. I designed and implemented a Sequential Quadratic Programming (SQP) solver entirely from scratch to drive a Model Predictive Control (MPC) framework for a simulated 2D quadcopter.

## Technical Details
Focused on advanced trajectory control, I designed and simulated an MPPI (Model Predictive Path Integral) controller.

The controller was validated on complex quadcopter maneuvers, specifically flips, as well as end-effector control for a 3-DOF robotic arm

The controller successfully executed a stable 360-degree flip followed by an immediate return to a stable hover. This required careful mathematical formulation to balance the optimization cost function against strict, real-time constraints on minimum altitude, thrust forces, and acceleration bounds throughout the maneuver's execution.