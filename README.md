# 📱 Reels UI Project

## 📌 Project Overview

The **Reels UI Project** is a front-end web development project inspired by the short-video reels feature of popular social media platforms like Instagram. It displays multiple reels in a modern, social-media-style interface using dynamically generated HTML elements with JavaScript DOM manipulation.

The project uses an array of objects to store reel information such as usernames, video URLs, profile pictures, likes, comments, captions, shares, and follow status. JavaScript's `forEach()` method and template literals are used to dynamically generate and display reel cards on the webpage.

This project is created to practice and improve JavaScript DOM manipulation, arrays of objects, loops, template literals, and dynamic content rendering.

## ✨ Features

- 📹 Multiple Reels Display
- 👤 User Profile Pictures
- ❤️ Like Count Display
- 💬 Comment Count Display
- 🔄 Share Count Display
- ➕ Follow / Unfollow Button UI
- 📝 Dynamic Captions
- 🎬 Autoplay and Loop Video Playback
- ❤️ Dynamic Like Icon Based on Like Status
- ⚡ Dynamic HTML Generation Using JavaScript
- 📱 Social Media-Inspired User Interface

## 🛠️ Technologies Used

- **HTML5** – For webpage structure.
- **CSS3** – For styling and layout.
- **JavaScript (ES6)** – For dynamic content generation and DOM manipulation.
- **Remix Icon** – For social media icons.

## 📂 Project Structure

```text
Reels-Project/
│
├── index.html
├── style.css
├── script.js
│
└── reel/
    ├── video1.mp4.mp4
    ├── video2.mp4.mp4
    ├── video3.mp4.mp4
    ├── video4.mp4.mp4
    └── video5.mp4.mp4
```

## ⚙️ How It Works

1. An array named `reels` contains 10 objects with different reel information.
2. Each object stores username, like count, like status, comment count, caption, video URL, profile picture, share count, and follow status.
3. The `forEach()` method iterates through the reels array.
4. Template literals generate dynamic HTML for each reel.
5. The generated HTML is stored in a string variable.
6. Finally, `innerHTML` inserts all the dynamically generated reels into the `.allreels` container.

## 🧠 JavaScript Concepts Practiced

- Arrays
- Arrays of Objects
- `forEach()` Method
- Template Literals
- String Concatenation
- Conditional (Ternary) Operator
- DOM Manipulation
- `querySelector()`
- `innerHTML`
- Dynamic HTML Rendering

## 🚀 How to Run the Project

1. Clone this repository:

   ```bash
   git clone YOUR_REPOSITORY_URL
   ```

2. Open the project folder in VS Code.

3. Make sure all video files are placed inside the `reel` folder.

4. Open `index.html` using Live Server.

5. Enjoy the Reels UI Project!

## 🎯 Project Purpose

The main purpose of this project is to strengthen my JavaScript fundamentals, especially DOM manipulation and dynamic element creation. It helps me understand how real-world social media interfaces can be structured using arrays of objects and JavaScript.

## 🔮 Future Improvements

- Implement Like and Unlike functionality.
- Add Follow and Unfollow functionality.
- Add a working Comment section.
- Implement Share functionality.
- Add double-click to like feature.
- Add keyboard navigation between reels.
- Improve responsive design for mobile devices.
- Add smooth scrolling between reels.
- Add video mute/unmute controls.

## 👨‍💻 Author

**Amit Kumar**

Aspiring Web Developer | Learning JavaScript & Frontend Development

---

⭐ If you like this project, don't forget to give this repository a star!
