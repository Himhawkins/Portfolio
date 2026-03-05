---
layout: project
title: "Neural Network Solutions for Inverse Cauchy Problems"
order: 10
description: "A multi-layer ANN designed to solve a 2D elliptic PDE for detecting material deformations and inhomogeneity."
date: 2024-04-15
categories: [Machine Learning, Mathematics, Deep Learning]
featured_image: "/assets/projects/InverseProblem/result1.png"
gallery:
  - type: "image"
    file: "/assets/projects/InverseProblem/problem.png"
    description: "Problem Boundary Setup"
  - type: "image"
    file: "/assets/projects/InverseProblem/loss.png"
    description: "Loss Function Convergence"
  - type: "image"
    file: "/assets/projects/InverseProblem/result1.png"
    description: "Estimated Material Deformations"
---

## Project Overview
Performed as a thesis at IIT Kharagpur under Professor Biswanath Banerjee, this computationally heavy research validated a methodology for estimating material deformations and inhomogeneities using partial boundary and domain data. The core challenge was solving a 2D elliptic Partial Differential Equation (the Inverse Cauchy problem), which is notoriously ill-posed.


To solve this, I designed a multi-layer Artificial Neural Network with variable width to provide the highly non-linear kernels necessary for accurate mapping. The study successfully demonstrated an iterative procedure that isolates optimal material constants for the domain through the alternating minimization of a novel mathematical cost functional.