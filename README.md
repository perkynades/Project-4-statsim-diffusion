# Project-4-statsim-diffusion

## Overview of the project

In this project the goal is to studiy diffusion in two dimentions, The project will contain: 

1. A probability distrubution for how a particle moves in one time step.
2. A visualisation of the consentration of particles over time steps.
3. A probability distrubution for where each particle is placed after "*t = 1, 2, 3, 4, 5*" timesteps.
4. A reflection with:  
a. An explenation on why i have simulated and why. Hvor many particles must the simulation start with to get good results. \
b. Compare the analytical results with the simulation. \
c. Consider what you have learned and what you can take with you as a computer scientis.
___

## Particle modeling
The particle model i have chosen to follow is juice being poured into water. \
Some ajustments have to be made before we can begin:
1. The juice and water live in a 2D space.
2. The juice and water have the same mass.
3. The juice has no force experinced upon it when interacting with the water.

The particle of the juice will have a probability of how they will move, which will be indipendent from each other.
1. Up = 30%
2. Down = 20%
3. Right = 15%
4. Left = 15%
5. Staying in the same place = 20%


