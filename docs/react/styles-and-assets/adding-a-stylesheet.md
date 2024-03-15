---
id: adding-a-stylesheet
title: Adding A Stylesheet
sidebar_label: Stylesheet
sidebar_position: 1
tags: [react, create-react-app, css, stylesheet, styling, react-scripts, react-dom, react-app]
description: "Learn how to add a stylesheet to your Create React App project. Style your components and make them visually appealing with CSS."
---

## Introduction:
In this guide, we will explore how to add a stylesheet to your React application created with Create React App. Cascading Style Sheets (CSS) allow you to style your components and make them visually appealing. We'll walk through the process step by step, making it easy for beginners to understand.

## Prerequisites:
Before we begin, make sure you have the following installed on your computer:
- Node.js: You can download and install it from https://nodejs.org.
- Create React App: If you don't have it, install it globally by running `npm install -g create-react-app` in your terminal or command prompt.

### Step 1: Create a new React app
If you haven't created a React app yet, open your terminal or command prompt and run the following command:
```
npx create-react-app my-app
```
This command will create a new folder called `my-app` with all the necessary files and dependencies to start your React project.

### Step 2: Open your project folder
Navigate to the project folder by running `cd my-app` in your terminal or command prompt.

### Step 3: Add a CSS file
Inside the `src` folder of your project, create a new file called `styles.css`. This file will hold your CSS styles.

### Step 4: Write some CSS
Open the `styles.css` file in a text editor and add the following CSS code:
```css title="styles.css"
/* styles.css */

/* Example styles */
body {
  background-color: blue;
  font-family: Arial, sans-serif;
}

h1 {
  color: #fff;
  text-align: center;
}
p{
  color: #fff;
}
```
Feel free to modify the styles as per your preferences. These are just basic examples to get you started.

### Step 5: Import the stylesheet
Open the `src/App.js` file in your text editor. At the top of the file, import the CSS file by adding the following line:
```javascript title="App.js"
import './styles.css';
```
This tells React to include the styles from the `styles.css` file in your application.

### Step 6: Apply styles to components
Now that you have your stylesheet imported, you can start applying the styles to your components. Open the `src/App.js` file and find the component you want to style. Add the appropriate CSS classes to the elements you want to style, like this:
```jsx title="App.js"
import React from 'react';
import './styles.css';

function App() {
  return (
    <div>
      <h1 className="title">Welcome to My App</h1>
      <p className="description">This is a sample paragraph.</p>
    </div>
  );
}

export default App;
```
Here, we've added the `title` and `description` classes to the `<h1>` and `<p>` elements, respectively.

### Step 7: Run your React app
To see your styles in action, go back to your terminal or command prompt, make sure you're in the project folder (`my-app`), and run the following command:
```
npm start
```
This will start the development server, and you can view your app in your browser at `http://localhost:3000`.

<BrowserWindow style={{backgroundColor: 'blue', fontFamily: 'Arial, sans-serif'}}>
      
    <div>
      <h1 style={{color: '#fff', textAlign:'center'}}>Welcome to My App</h1>
      <p style={{color: '#fff'}}>This is a sample paragraph.</p>
    </div>
      
 </BrowserWindow>

## Conclusion:
Congratulations! You have successfully added a stylesheet to your React app. Now you can experiment with different CSS styles to enhance the visual appeal of your components. Remember to import the stylesheet and apply the appropriate CSS classes to the elements you want to style.

Please note that the example above is a simplified explanation of adding a stylesheet to a React app. For more advanced styling techniques and best practices, consider exploring CSS frameworks and libraries like Bootstrap or Material-UI.

Remember to have fun and get creative with your styles as you continue your React journey!