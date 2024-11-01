# Pomodoro Clock

A responsive 25 + 5 Pomodoro Clock built with React, styled with CSS, and deployed on GitHub Pages. This project fulfills the freeCodeCamp 25 + 5 Clock requirements, providing a simple and functional timer for work and break intervals.

## Project Overview

This Pomodoro Clock allows users to set work (session) and break intervals, start/pause the timer, and reset to default settings. The timer cycles between "Session" and "Break" states, playing a sound at the end of each interval. The app is designed to be responsive, ensuring usability on both desktop and mobile devices.

### Live Demo

Check out the live version of the app [here](https://SyntaxStrategist.github.io/pomodoro-clock).

## Features

- **Session and Break Length Controls**: Customize lengths for work (session) and break intervals.
- **Timer Display**: Countdown timer shown in "mm:ss" format.
- **Start/Pause and Reset**: Controls to start/pause the timer and reset it to default settings.
- **Auto Switch Between Session and Break**: The timer automatically transitions between work and break intervals.
- **Sound Notification**: Plays a sound when each interval ends.

## Project Structure

- **`src/Clock.js`**: Main component containing the Pomodoro Clock logic and layout.
- **`src/Clock.css`**: Custom CSS for styling the clock.
- **`public/index.html`**: Contains a link to the freeCodeCamp test suite and other meta information.

## Installation and Setup

To run this project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/SyntaxStrategist/pomodoro-clock.git
   ```

2. Navigate into the project directory:
   ```bash
   cd pomodoro-clock
   ```

3. Install the required dependencies:
   ```bash
   npm install
   ```

4. Start the application:
   ```bash
   npm start
   ```

5. Open your browser and navigate to `http://localhost:3000` to use the Pomodoro Clock.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Special thanks to freeCodeCamp for providing the framework for this project and enhancing my coding skills.
- Thanks to the React community for their invaluable resources and support.
