# ⏱️ Stopwatch Web Application

A simple and interactive **Stopwatch Web Application** developed using HTML, CSS, and JavaScript. This application allows users to measure elapsed time accurately with Start, Pause, Reset, and Lap functionalities.

The stopwatch displays time in minutes, seconds, and milliseconds through a clean and user-friendly interface.

---

## 📌 Table of Contents

- [Project Overview](#-project-overview)
- [Project Objective](#-project-objective)
- [Project Goals](#-project-goals)
- [Key Features](#-key-features)
- [Technology Stack](#-technology-stack)
- [Project Folder Structure](#-project-folder-structure)
- [How to Run the Project](#-how-to-run-the-project)
- [Application Workflow](#-application-workflow)
- [Working Mechanism](#-working-mechanism)
- [Learning Outcomes](#-learning-outcomes)
- [Future Enhancements](#-future-enhancements)
- [Author](#-author)

---

## 📖 Project Overview

The **Stopwatch Web Application** is a frontend-based time measurement tool designed to help users track elapsed time easily.

It provides an interactive stopwatch interface where users can start the timer, pause it, reset it, and record lap times while the stopwatch is running.

The application displays time in the following format:

`MM : SS : MS`

Where:
- **MM:** Minutes
- **SS:** Seconds
- **MS:** Milliseconds (hundredths of a second)

This project is developed using basic web technologies without requiring any backend server, database, or external JavaScript framework.

## 🎯 Project Objective

The main objective of this project is to develop a simple, efficient, and user-friendly stopwatch application that allows users to measure and monitor elapsed time.

The project aims to demonstrate the practical implementation of JavaScript timing functions, event handling, DOM manipulation, and dynamic webpage updates.

It also provides an opportunity to understand how HTML, CSS, and JavaScript work together to create an interactive web application.

## 🚀 Project Goals

The major goals of this project are:

1. **Time Measurement:** Develop a digital stopwatch that measures elapsed time.
2. **Start Functionality:** Allow users to start the stopwatch whenever required.
3. **Pause Functionality:** Enable users to pause the timer without losing the recorded time.
4. **Reset Functionality:** Provide an option to reset the stopwatch and return it to zero.
5. **Lap Recording:** Allow users to record individual lap times while the stopwatch is running.
6. **Real-Time Updates:** Display the timer continuously without refreshing the webpage.
7. **User-Friendly Design:** Create a simple and understandable interface.
8. **Practical JavaScript Implementation:** Understand JavaScript functions, event handling, and timing mechanisms.

## ✨ Key Features

### 1. Start Stopwatch
- Starts the stopwatch when the Start button is clicked.
- Begins measuring elapsed time.
- Prevents multiple timer intervals from running simultaneously.

### 2. Pause Stopwatch
- Stops the stopwatch temporarily.
- Preserves the current elapsed time.
- Allows users to resume timing using the Start button.

### 3. Reset Stopwatch
- Stops the running timer.
- Resets minutes, seconds, and milliseconds to zero.
- Clears previously recorded lap entries.

### 4. Lap Time Recording
- Allows users to record lap times while the stopwatch is running.
- Displays recorded lap times below the stopwatch.
- Maintains previously recorded laps until the stopwatch is reset.

### 5. Millisecond Display
- Displays time in minutes, seconds, and hundredths of a second.
- Updates the display at regular intervals using JavaScript.

### 6. Simple User Interface
- Clean and centered stopwatch layout.
- Clearly visible digital time display.
- Separate buttons for Start, Pause, Reset, and Lap.
- Different button colors for easy identification.

## 💻 Technology Stack

The following technologies are used to develop this project:

| Technology | Purpose |
|---|---|
| HTML5 | Creates the structure of the stopwatch application. |
| CSS3 | Provides styling, layout, colors, and visual appearance. |
| JavaScript | Implements stopwatch functionality and time calculations. |
| DOM Manipulation | Dynamically updates the timer and lap records. |
| JavaScript Timer Functions | Uses `setInterval()` and `clearInterval()` to control timing. |

### Technologies Explained

**HTML5:** Used to create the stopwatch container, digital time display, control buttons, and lap display area.

**CSS3:** Used to design the stopwatch interface with Flexbox, background colors, spacing, button styles, and box shadows.

**JavaScript:** Handles the complete stopwatch functionality, including starting, pausing, resetting, and recording lap times.

**DOM Manipulation:** Used to update the time display and dynamically add lap records to the webpage.

**JavaScript Timer Functions:** The `setInterval()` function updates the stopwatch at regular intervals, while `clearInterval()` stops the running timer.

## 📂 Project Folder Structure

The repository follows a simple and organized structure:

```text
Stopwatch/
│
├── stopwatch.html       # Main HTML file
│
├── stopwatch.css        # CSS styling file
│
├── stopwatch.js         # JavaScript functionality
│
└── README.md            # Project documentation
```

### File Description

| File Name | Description |
|---|---|
| `stopwatch.html` | Contains the HTML structure and stopwatch elements. |
| `stopwatch.css` | Contains the styling and layout of the application. |
| `stopwatch.js` | Contains the stopwatch logic and event handling. |
| `README.md` | Contains project information and instructions. |

## ⚙️ How to Run the Project

Follow these steps to run the Stopwatch Web Application on your computer.

### Prerequisites

Before running the project, make sure you have:

- A computer or laptop.
- A modern web browser such as Google Chrome, Microsoft Edge, or Firefox.
- Visual Studio Code (optional).
- Git installed (optional, for cloning the repository).

**Note:** Node.js, npm, and database installation are not required.

### Step 1: Clone the Repository

Open Command Prompt or Terminal and execute:

```bash
git clone https://github.com/Ritu8527/Stopwatch.git
```

### Step 2: Navigate to the Project Folder

```bash
cd Stopwatch
```

### Step 3: Open the Project in Visual Studio Code

```bash
code .
```

Alternatively, open the downloaded project folder manually in your code editor.

### Step 4: Run the Application

Locate the following file:

`stopwatch.html`

Double-click the file to open it in your default web browser.

Alternatively:

1. Open the project folder in Visual Studio Code.
2. Install the Live Server extension if necessary.
3. Right-click `stopwatch.html`.
4. Select **Open with Live Server**.

### Step 5: Use the Stopwatch

Once the application opens, you can use the following buttons:

| Button | Function |
|---|---|
| Start | Starts the stopwatch. |
| Pause | Temporarily pauses the stopwatch. |
| Reset | Resets the timer and clears lap records. |
| Lap | Records the current time as a lap. |

## 🔄 Application Workflow

The application follows a simple workflow:

1. The user opens the stopwatch application.
2. The stopwatch initially displays `00:00:00`.
3. The user clicks the Start button.
4. JavaScript starts the timer using `setInterval()`.
5. The timer updates milliseconds, seconds, and minutes.
6. The user can pause the stopwatch whenever required.
7. The user can record lap times while the stopwatch is running.
8. Clicking Reset stops the timer and clears the display and lap records.

## ⚡ Working Mechanism

The stopwatch uses JavaScript timing functions to measure elapsed time.

### 1. setInterval()

The `setInterval()` function executes a given function repeatedly after a specified time interval.

In this project, it updates the stopwatch every 10 milliseconds.

Example:

```javascript
intervalId = setInterval(() => {
    milisec++;
}, 10);
```

### 2. clearInterval()

The `clearInterval()` function stops the repeated execution of the timer function.

Example:

```javascript
clearInterval(intervalId);
intervalId = null;
```

### 3. Time Calculation

The stopwatch uses three variables:

```javascript
let milisec = 0;
let second = 0;
let minute = 0;
```

The time is calculated using the following conditions:

- When milliseconds reach 100, the seconds increase by one.
- When seconds reach 60, the minutes increase by one.
- The display is updated dynamically using DOM manipulation.

### 4. Lap Recording

When the user clicks the Lap button:

- The current minute, second, and millisecond values are collected.
- The values are formatted into a time string.
- A new HTML element is created.
- The lap time is displayed inside the lap history section.

## 📚 Learning Outcomes

Through this project, the following concepts and skills are demonstrated:

- Understanding HTML5 document structure.
- Applying CSS3 styling properties.
- Writing JavaScript functions.
- Understanding variables and conditional statements.
- Using `setInterval()` and `clearInterval()`.
- Performing DOM manipulation.
- Handling button click events.
- Updating webpage content dynamically.
- Understanding basic time calculation.
- Creating an interactive frontend application.

## 🔮 Future Enhancements

The application can be improved further by adding:

1. **Dark and Light Mode:** Allow users to switch between different themes.
2. **Lap Numbering:** Display a separate serial number for every recorded lap.
3. **Lap Comparison:** Compare different recorded lap times.
4. **Responsive Design:** Improve the layout for mobile phones and tablets.
5. **Keyboard Shortcuts:** Control the stopwatch using keyboard keys.
6. **Lap History Management:** Add an option to clear individual or all lap records.
7. **Time Formatting:** Add hour support for longer stopwatch sessions.

These enhancements can make the application more advanced and convenient.

## 👩‍💻 Author

**Ritu**

GitHub Profile: [@Ritu8527](https://github.com/Ritu8527)

Project Repository: [Stopwatch](https://github.com/Ritu8527/Stopwatch)

---

## 📄 License

This project is developed for educational and learning purposes.

---

⭐ If you find this project useful, consider giving the repository a star!

**Thank you for visiting this project!**
