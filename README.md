# Pomodoro Clock

A responsive 25 + 5 Pomodoro Clock built with React, styled with CSS, and deployed on GitHub Pages. This project fulfills the freeCodeCamp 25 + 5 Clock requirements and provides a simple, functional timer for work and break intervals.

## Project Overview

This Pomodoro Clock allows users to set work (session) and break intervals, start/pause the timer, and reset to default settings. The timer cycles between "Session" and "Break" states, playing a sound at the end of each interval. The app is designed to be responsive and works well on both desktop and mobile devices.

### Live Demo

Check out the live version of the app [here](https://SyntaxStrategist.github.io/pomodoro-clock).

## Features

- **Session and Break Length Controls**: Set custom lengths for work (session) and break intervals.
- **Timer Display**: Countdown timer displayed in "mm:ss" format.
- **Start/Pause and Reset**: Controls to start/pause the timer and reset it to default settings.
- **Auto Switch Between Session and Break**: The timer automatically switches between work and break intervals.
- **Sound Notification**: Plays a sound when each interval ends.

## Project Structure

- **`src/Clock.js`** - Main component with the Pomodoro Clock logic and layout.
- **`src/Clock.css`** - Custom CSS for styling the clock.
- **`public/index.html`** - Includes a link to the freeCodeCamp test suite.

## Installation and Setup

To run this project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/SyntaxStrategist/pomodoro-clock.git
