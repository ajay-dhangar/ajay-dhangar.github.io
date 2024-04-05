---
id: react-intro-lesson-3
title: "Setting up your development environment (Node.js, npm, code editor)"
sidebar_label: Lesson - 3
sidebar_position: 3
description: "Learn how to set up your development environment for React development by installing Node.js, npm, and a code editor."
tags: [courses, react-js, beginner-level, intro-to-react, development-environment, node-js, npm, code-editor]
---

In this lesson, we will learn how to set up your development environment for React development. We will cover the installation of Node.js, npm (Node Package Manager), and a code editor to get started with React development.

## Node.js

Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows you to run JavaScript code outside of a web browser, making it ideal for server-side development, command-line tools, and building JavaScript applications.

To install Node.js, follow these steps:

1. Go to the [Node.js website](https://nodejs.org/) and download the LTS (Long-Term Support) version for your operating system.
2. Run the installer and follow the installation instructions.
3. Verify the installation by opening a terminal or command prompt and running the following commands:

```bash title="Check Node.js version"
node -v
```

```bash title="Check npm version"
npm -v
```

If you see the version numbers for Node.js and npm, the installation was successful.

## npm (Node Package Manager)

npm is the default package manager for Node.js and JavaScript. It allows you to install, manage, and share packages of code with other developers. You can use npm to install libraries, frameworks, tools, and dependencies for your projects.

To install npm, follow these steps:

1. npm is included with Node.js, so you don't need to install it separately.
2. Verify the installation by opening a terminal or command prompt and running the following command:

```bash title="Check npm version"
npm -v
```

If you see the version number for npm, the installation was successful.

## Code editor

A code editor is a tool used by developers to write, edit, and manage code for software development. There are many code editors available, but some popular choices for React development include:

- [Visual Studio Code](https://code.visualstudio.com/) 🚀
- [Atom](https://atom.io/)
- [Sublime Text](https://www.sublimetext.com/)
- [WebStorm](https://www.jetbrains.com/webstorm/)
- [Vim](https://www.vim.org/)
- [Emacs](https://www.gnu.org/software/emacs/)

Choose a code editor that you are comfortable with and that meets your development needs. Visual Studio Code is a popular choice among developers due to its features, extensions, and community support.

## Now run your first JavaScript code using Node.js

Create a new file named `hello.js` and add the following code:

```javascript title="hello.js"
console.log('Hello, Node.js!');
```

Save the file and open a terminal or command prompt in the same directory. Run the following command to execute the JavaScript code using Node.js:

```bash title="Run hello.js with Node.js"
node hello.js
```

You should see the output `Hello, Node.js!` displayed in the terminal. Congratulations! You have successfully run your first JavaScript code using Node.js.

## Conclusion

In this lesson, we learned how to set up our development environment for React development by installing Node.js, npm, and a code editor. We also ran our first JavaScript code using Node.js to verify the installation. Setting up your development environment is the first step towards building React applications, and it is essential to have the right tools and environment to work efficiently.