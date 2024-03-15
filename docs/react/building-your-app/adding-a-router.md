---
id: adding-a-router
title: Adding a Router
sidebar_position: 8
tags: [react, create-react-app, react-router, routing, navigation, single-page application, SPA, react-router-dom, BrowserRouter, Routes, Route, Link, NotFound, 404 page, React Router, React Router DOM, React Router v6, React Router v5, React Router v4, React Router v3, React Router v2, React Router v1, React Router v0, React Router documentation, React Router tutorial, React Router guide, React Router example, React Router code, React Router snippet, React Router demo, React Router live preview, React Router sandbox, React Router CodeSandbox, React Router GitHub, React Router contribution, React Router community, React Router project, React Router source code, React Router app, React Router application, React Router website, React Router theme, React Router setup, React Router configuration, React Router environment, React Router development, React Router production, React Router deployment, React Router build, React Router installation, React Router quick start, React Router getting started, React Router how to, React Router learn, React Router step by step, React Router beginner, React Router intermediate, React Router advanced, React Router expert, React Router best practices, React Router tips, React Router tricks, React Router use cases, React Router examples, React Router projects, React Router components, React Router pages, React Router views, React Router navigation, React Router routing, React Router links, React Router paths, React Router URLs, React Router virtual GPS, React Router dynamic, React Router user-friendly, React Router theme park, React Router attractions, React Router main entrance, React Router information booth, React Router helpline, React Router secret portal, React Router lost URLs, React Router 404 page, React Router routing capabilities, React Router multi-page applications, React Router full-page refreshes, React Router single-page app]
description: "Learn how to add routing capabilities to your React app using React Router. Create multiple pages and navigate between them without reloading the entire page."
---

## Introduction:
Welcome, fellow Code Mastermind! Today, we embark on an exciting journey to enhance our React app by adding routing capabilities. Routing allows us to create dynamic, multi-page applications without the need for full-page refreshes. Buckle up, and let's dive into the world of React Router!

### 1: What is React Router?
React Router is a popular library that enables navigation and routing within a React application. It provides a seamless way to create multiple pages while maintaining a single-page app feel. Think of it as a virtual GPS system for your app, guiding users to different views without reloading the entire page.

### 2: Getting Started
Before we hit the road, let's set up our project! Make sure you have Node.js and npm installed. If not, visit Node.js' official website and follow their easy installation guide.

Once you have everything set up, create your React app using Create React App (CRA). In your terminal, type:

```bash
npx create-react-app my-awesome-app
cd my-awesome-app
```

Now, we're ready to install React Router. Execute the following command:

```bash
npm install react-router-dom
```

### 3: Creating Our Routes
Imagine your app is a fantastic theme park, and each attraction represents a different page. Let's map out our routes accordingly:

1. **Home:** The main entrance to our park, where visitors start their journey.
2. **About:** An information booth to learn more about our park's history.
3. **Contact:** A helpline where visitors can reach out for any queries.
4. **NotFound:** A secret portal to another dimension for lost URLs (404 page).

### 4: Setting Up the Router
Now that we have our routes planned out, let's integrate React Router into our app. Open the `src/App.js` file, and let the routing magic begin:

```jsx title="src/App.js"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import NotFound from './components/NotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Routes>
    </Router>
  );
}
```

### 5: Creating Our Components
To keep our code organized, let's create separate components for each route we defined earlier. For instance, create `Home.js`, `About.js`, `Contact.js`, and `NotFound.js` in the `src/components` folder. Don't forget to sprinkle some code wizardry into each component to make them shine!

### 6: Linking It All Together
Now that we have our routes and components set up, we need navigation links for our visitors to explore the park. Update your `src/components/Home.js` with the following code:

```jsx title="src/components/Home.js"
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Welcome to Code Mastermind Theme Park!</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
```
### 7: Celebrate Your Success!
Congratulations, Code Mastermind! You've successfully added React Router to your app, making it dynamic and user-friendly. Now, users can roam freely through your theme park without ever getting lost.

<!-- ## Live Preview: -->

<!-- <iframe src="https://codesandbox.io/embed/github/React-js-Mastery/react-app/main?autoresize=1&fontsize=14&hidenavigation=1&theme=dark" style={{
            width: '100%',
            height: '600px',
            border: '0',
            borderRadius: 8,
            overflow: 'hidden',
            position: 'static',
            zIndex: 0,
          }} title="React App"
          allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
          sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
    ></iframe> -->

<!-- 
<iframe src="https://codesandbox.io/embed/github/Ajay-Dhangar/react-blog-app/main?autoresize=1&fontsize=14&hidenavigation=1&theme=dark" style={{
            width: '100%',
            height: '600px',
            border: '0',
            borderRadius: 8,
            overflow: 'hidden',
            position: 'static',
            zIndex: 0,
          }} title="React App"
          allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
          sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
    ></iframe> -->

### Apply your Idea's

[Contribution Now](https://github.com/Ajay-Dhangar/react-blog-app/tree/main/)

## Conclusion:
Routing in React is like a thrilling roller coaster ride for developers. We've just scratched the surface of what React Router can do. So keep exploring, experimenting, and creating breathtaking experiences for your users. Until next time, happy coding, Code Masterminds! 🎢🚀
