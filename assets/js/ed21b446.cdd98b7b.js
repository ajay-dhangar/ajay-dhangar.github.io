"use strict";(self.webpackChunkcode_harbor_hub=self.webpackChunkcode_harbor_hub||[]).push([[63176],{9064:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>t,metadata:()=>i,toc:()=>c});var a=r(17624),s=r(4552);const t={id:"arrays-in-javascript",title:"Arrays in JavaScript for Beginners",sidebar_label:"Arrays",sidebar_position:15,tags:["JavaScript","Arrays","Array Methods","Array Destructuring","Array Properties","Array Methods","Array Iterators","Array Object","Array Destructuring","Array Length","Access Array Elements","Change Array Elements","Add Array Elements","Remove Array Elements","Loop Through Array","Array Methods","Array Destructuring"],description:"In the JavaScript programming language, arrays are used to store multiple values in a single variable. In this section, you will learn how to create and manipulate arrays in JavaScript. You will also learn about the different methods that can be used to manipulate arrays. We are going to cover the following topics in this section:"},l=void 0,i={id:"javascript/arrays-in-javascript",title:"Arrays in JavaScript for Beginners",description:"In the JavaScript programming language, arrays are used to store multiple values in a single variable. In this section, you will learn how to create and manipulate arrays in JavaScript. You will also learn about the different methods that can be used to manipulate arrays. We are going to cover the following topics in this section:",source:"@site/docs/javascript/arrays.md",sourceDirName:"javascript",slug:"/javascript/arrays-in-javascript",permalink:"/code-harbor-hub/docs/javascript/arrays-in-javascript",draft:!1,unlisted:!1,editUrl:"https://github.com/Ajay-Dhangar/code-harbor-hub/edit/main/docs/javascript/arrays.md",tags:[{label:"JavaScript",permalink:"/code-harbor-hub/docs/tags/java-script"},{label:"Arrays",permalink:"/code-harbor-hub/docs/tags/arrays"},{label:"Array Methods",permalink:"/code-harbor-hub/docs/tags/array-methods"},{label:"Array Destructuring",permalink:"/code-harbor-hub/docs/tags/array-destructuring"},{label:"Array Properties",permalink:"/code-harbor-hub/docs/tags/array-properties"},{label:"Array Iterators",permalink:"/code-harbor-hub/docs/tags/array-iterators"},{label:"Array Object",permalink:"/code-harbor-hub/docs/tags/array-object"},{label:"Array Length",permalink:"/code-harbor-hub/docs/tags/array-length"},{label:"Access Array Elements",permalink:"/code-harbor-hub/docs/tags/access-array-elements"},{label:"Change Array Elements",permalink:"/code-harbor-hub/docs/tags/change-array-elements"},{label:"Add Array Elements",permalink:"/code-harbor-hub/docs/tags/add-array-elements"},{label:"Remove Array Elements",permalink:"/code-harbor-hub/docs/tags/remove-array-elements"},{label:"Loop Through Array",permalink:"/code-harbor-hub/docs/tags/loop-through-array"}],version:"current",lastUpdatedBy:"ajay-dhangar",lastUpdatedAt:1709995643,formattedLastUpdatedAt:"Mar 9, 2024",sidebarPosition:15,frontMatter:{id:"arrays-in-javascript",title:"Arrays in JavaScript for Beginners",sidebar_label:"Arrays",sidebar_position:15,tags:["JavaScript","Arrays","Array Methods","Array Destructuring","Array Properties","Array Methods","Array Iterators","Array Object","Array Destructuring","Array Length","Access Array Elements","Change Array Elements","Add Array Elements","Remove Array Elements","Loop Through Array","Array Methods","Array Destructuring"],description:"In the JavaScript programming language, arrays are used to store multiple values in a single variable. In this section, you will learn how to create and manipulate arrays in JavaScript. You will also learn about the different methods that can be used to manipulate arrays. We are going to cover the following topics in this section:"},sidebar:"javascript",previous:{title:"Numbers",permalink:"/code-harbor-hub/docs/javascript/all-about-numbers"},next:{title:"Objects",permalink:"/code-harbor-hub/docs/javascript/objects-in-javascript"}},o={},c=[{value:"Access the Elements of an Array",id:"access-the-elements-of-an-array",level:2},{value:"Change an Array Element",id:"change-an-array-element",level:2},{value:"Add an Array Element",id:"add-an-array-element",level:2},{value:"Remove an Array Element",id:"remove-an-array-element",level:2},{value:"Array Length",id:"array-length",level:2},{value:"Loop Through an Array",id:"loop-through-an-array",level:2},{value:"Array Methods",id:"array-methods",level:2},{value:"<code>toString()</code>",id:"tostring",level:3},{value:"<code>join()</code>",id:"join",level:3},{value:"<code>pop()</code>",id:"pop",level:3},{value:"<code>push()</code>",id:"push",level:3},{value:"<code>shift()</code>",id:"shift",level:3},{value:"<code>unshift()</code>",id:"unshift",level:3},{value:"<code>concat()</code>",id:"concat",level:3},{value:"<code>slice()</code>",id:"slice",level:3},{value:"<code>splice()</code>",id:"splice",level:3},{value:"<code>sort()</code>",id:"sort",level:3},{value:"<code>reverse()</code>",id:"reverse",level:3},{value:"<code>indexOf()</code>",id:"indexof",level:3},{value:"<code>lastIndexOf()</code>",id:"lastindexof",level:3},{value:"<code>includes()</code>",id:"includes",level:3},{value:"<code>find()</code>",id:"find",level:3},{value:"<code>findIndex()</code>",id:"findindex",level:3},{value:"<code>every()</code>",id:"every",level:3},{value:"<code>some()</code>",id:"some",level:3},{value:"<code>filter()</code>",id:"filter",level:3},{value:"<code>map()</code>",id:"map",level:3},{value:"<code>reduce()</code>",id:"reduce",level:3},{value:"<code>reduceRight()</code>",id:"reduceright",level:3},{value:"<code>forEach()</code>",id:"foreach",level:3},{value:"<code>isArray()</code>",id:"isarray",level:3},{value:"<code>from()</code>",id:"from",level:3},{value:"<code>of()</code>",id:"of",level:3},{value:"<code>fill()</code>",id:"fill",level:3},{value:"<code>copyWithin()</code>",id:"copywithin",level:3},{value:"<code>entries()</code>",id:"entries",level:3},{value:"<code>keys()</code>",id:"keys",level:3},{value:"<code>values()</code>",id:"values",level:3},{value:"Array Destructuring",id:"array-destructuring",level:2},{value:"Conclusion",id:"conclusion",level:2}];function d(e){const n={admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,s.M)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"Arrays are used to store multiple values in a single variable. They are written with square brackets."}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",metastring:'title="index.js"',children:'let fruits = ["Apple", "Banana", "Mango", "Orange"];\n'})}),"\n",(0,a.jsx)(n.h2,{id:"access-the-elements-of-an-array",children:"Access the Elements of an Array"}),"\n",(0,a.jsx)(n.p,{children:"You can access an array element by referring to the index number."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",metastring:'title="index.js"',children:'let fruits = ["Apple", "Banana", "Mango", "Orange"];\nconsole.log(fruits[0]); // Apple\nconsole.log(fruits[1]); // Banana\nconsole.log(fruits[2]); // Mango\nconsole.log(fruits[3]); // Orange\n'})}),"\n",(0,a.jsx)(n.h2,{id:"change-an-array-element",children:"Change an Array Element"}),"\n",(0,a.jsx)(n.p,{children:"You can change the value of an array element by referring to the index number."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",metastring:'title="index.js"',children:'let fruits = ["Apple", "Banana", "Mango", "Orange"];\nfruits[0] = "Cherry";\nconsole.log(fruits); // ["Cherry", "Banana", "Mango", "Orange"]\n'})}),"\n",(0,a.jsx)(n.h2,{id:"add-an-array-element",children:"Add an Array Element"}),"\n",(0,a.jsxs)(n.p,{children:["You can add an element to an array using the ",(0,a.jsx)(n.code,{children:"push()"})," method."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",metastring:'title="index.js"',children:'let fruits = ["Apple", "Banana", "Mango", "Orange"];\nfruits.push("Cherry");\nconsole.log(fruits); // ["Apple", "Banana", "Mango", "Orange", "Cherry"]\n'})}),"\n",(0,a.jsx)(n.h2,{id:"remove-an-array-element",children:"Remove an Array Element"}),"\n",(0,a.jsxs)(n.p,{children:["You can remove an element from an array using the ",(0,a.jsx)(n.code,{children:"pop()"})," method."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",metastring:'title="index.js"',children:'let fruits = ["Apple", "Banana", "Mango", "Orange"];\nfruits.pop();\nconsole.log(fruits); // ["Apple", "Banana", "Mango"]\n'})}),"\n",(0,a.jsx)(n.h2,{id:"array-length",children:"Array Length"}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"length"})," property returns the length of an array (number of elements)."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",metastring:'title="index.js"',children:'let fruits = ["Apple", "Banana", "Mango", "Orange"];\nconsole.log(fruits.length); // 4\n'})}),"\n",(0,a.jsx)(n.h2,{id:"loop-through-an-array",children:"Loop Through an Array"}),"\n",(0,a.jsxs)(n.p,{children:["You can use a ",(0,a.jsx)(n.code,{children:"for"})," loop to loop through all the elements of an array."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",metastring:'title="index.js"',children:'let fruits = ["Apple", "Banana", "Mango", "Orange"];\n\nfor (let i = 0; i < fruits.length; i++) {\n  console.log(fruits[i]);\n}\n'})}),"\n",(0,a.jsx)(n.h2,{id:"array-methods",children:"Array Methods"}),"\n",(0,a.jsx)(n.p,{children:"JavaScript has a number of built-in methods for working with arrays."}),"\n",(0,a.jsx)(n.h3,{id:"tostring",children:(0,a.jsx)(n.code,{children:"toString()"})}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"toString()"})," method converts an array to a string of (comma separated) array values."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",metastring:'title="index.js"',children:'let fruits = ["Apple", "Banana", "Mango", "Orange"];\nconsole.log(fruits.toString()); // Apple,Banana,Mango,Orange\n'})}),"\n",(0,a.jsx)(n.h3,{id:"join",children:(0,a.jsx)(n.code,{children:"join()"})}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"join()"})," method joins all the elements of an array into a string."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",metastring:'title="index.js"',children:'let fruits = ["Apple", "Banana", "Mango", "Orange"];\nconsole.log(fruits.join(" * ")); // Apple * Banana * Mango * Orange\n'})}),"\n",(0,a.jsx)(n.h3,{id:"pop",children:(0,a.jsx)(n.code,{children:"pop()"})}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"pop()"})," method removes the last element from an array."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",metastring:'title="index.js"',children:'let fruits = ["Apple", "Banana", "Mango", "Orange"];\n\nlet lastFruit = fruits.pop();\nconsole.log(lastFruit); // Orange\nconsole.log(fruits); // ["Apple", "Banana", "Mango"]\n'})}),"\n",(0,a.jsx)(n.h3,{id:"push",children:(0,a.jsx)(n.code,{children:"push()"})}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"push()"})," method adds a new element to an array (at the end)."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",metastring:'title="index.js"',children:'let fruits = ["Apple", "Banana", "Mango", "Orange"];\n\nfruits.push("Cherry");\nconsole.log(fruits); // ["Apple", "Banana", "Mango", "Orange", "Cherry"]\n'})}),"\n",(0,a.jsx)(n.h3,{id:"shift",children:(0,a.jsx)(n.code,{children:"shift()"})}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"shift()"})," method removes the first element from an array."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",metastring:'title="index.js"',children:'let fruits = ["Apple", "Banana", "Mango", "Orange"];\n\nlet firstFruit = fruits.shift();\nconsole.log(firstFruit); // Apple\nconsole.log(fruits); // ["Banana", "Mango", "Orange"]\n'})}),"\n",(0,a.jsx)(n.h3,{id:"unshift",children:(0,a.jsx)(n.code,{children:"unshift()"})}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"unshift()"})," method adds a new element to an array (at the beginning)."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",metastring:'title="index.js"',children:'let fruits = ["Apple", "Banana", "Mango", "Orange"];\n\nfruits.unshift("Cherry");\nconsole.log(fruits); // ["Cherry", "Apple", "Banana", "Mango", "Orange"]\n'})}),"\n",(0,a.jsx)(n.h3,{id:"concat",children:(0,a.jsx)(n.code,{children:"concat()"})}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"concat()"})," method joins two or more arrays, and returns a new array."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",metastring:'title="index.js"',children:'let fruits1 = ["Apple", "Banana", "Mango", "Orange"];\nlet fruits2 = ["Cherry", "Grapes", "Pineapple"];\n\nlet allFruits = fruits1.concat(fruits2);\nconsole.log(allFruits); // ["Apple", "Banana", "Mango", "Orange", "Cherry", "Grapes", "Pineapple"]\n'})}),"\n",(0,a.jsx)(n.h3,{id:"slice",children:(0,a.jsx)(n.code,{children:"slice()"})}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"slice()"})," method slices out a piece of an array into a new array."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",metastring:'title="index.js"',children:'let fruits = ["Apple", "Banana", "Mango", "Orange", "Cherry", "Grapes", "Pineapple"];\n\nlet citrusFruits = fruits.slice(2, 5);\nconsole.log(citrusFruits); // ["Mango", "Orange", "Cherry"]\n'})}),"\n",(0,a.jsx)(n.h3,{id:"splice",children:(0,a.jsx)(n.code,{children:"splice()"})}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"splice()"})," method adds/removes items to/from an array, and returns the removed item(s)."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",metastring:'title="index.js"',children:'let fruits = ["Apple", "Banana", "Mango", "Orange", "Cherry", "Grapes", "Pineapple"];\n\nfruits.splice(2, 2, "Lemon", "Kiwi");\n\nconsole.log(fruits); // ["Apple", "Banana", "Lemon", "Kiwi", "Cherry", "Grapes", "Pineapple"]\n'})}),"\n",(0,a.jsx)(n.h3,{id:"sort",children:(0,a.jsx)(n.code,{children:"sort()"})}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"sort()"})," method sorts the elements of an array."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",metastring:'title="index.js"',children:'let fruits = ["Banana", "Orange", "Apple", "Mango"];\nconsole.log(fruits.sort()); // ["Apple", "Banana", "Mango", "Orange"]\n'})}),"\n",(0,a.jsx)(n.h3,{id:"reverse",children:(0,a.jsx)(n.code,{children:"reverse()"})}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"reverse()"})," method reverses the order of the elements in an array."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",metastring:'title="index.js"',children:'let fruits = ["Apple", "Banana", "Mango", "Orange"];\n\nconsole.log(fruits.reverse()); // ["Orange", "Mango", "Banana", "Apple"]\n'})}),"\n",(0,a.jsx)(n.h3,{id:"indexof",children:(0,a.jsx)(n.code,{children:"indexOf()"})}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"indexOf()"})," method searches the array for an element and returns its position."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",metastring:'title="index.js"',children:'let fruits = ["Apple", "Banana", "Mango", "Orange"];\n\nconsole.log(fruits.indexOf("Mango")); // 2\n'})}),"\n",(0,a.jsx)(n.h3,{id:"lastindexof",children:(0,a.jsx)(n.code,{children:"lastIndexOf()"})}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"lastIndexOf()"})," method searches the array for an element, starting at the end, and returns its position."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",metastring:'title="index.js"',children:'let fruits = ["Apple", "Banana", "Mango", "Orange"];\n\nconsole.log(fruits.lastIndexOf("Banana")); // 1\n'})}),"\n",(0,a.jsx)(n.h3,{id:"includes",children:(0,a.jsx)(n.code,{children:"includes()"})}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"includes()"})," method checks if an array contains a specified element."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",metastring:'title="index.js"',children:'let fruits = ["Apple", "Banana", "Mango", "Orange"];\n\nconsole.log(fruits.includes("Mango")); // true\nconsole.log(fruits.includes("Cherry")); // false\n'})}),"\n",(0,a.jsx)(n.h3,{id:"find",children:(0,a.jsx)(n.code,{children:"find()"})}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"find()"})," method returns the value of the first element in an array that passes a test (provided as a function)."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",metastring:'title="index.js"',children:"let ages = [3, 10, 18, 20];\n\nfunction checkAdult(age) {\n  return age >= 18;\n}\n\nconsole.log(ages.find(checkAdult)); // 18\n"})}),"\n",(0,a.jsx)(n.h3,{id:"findindex",children:(0,a.jsx)(n.code,{children:"findIndex()"})}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"findIndex()"})," method returns the index of the first element in an array that passes a test (provided as a function)."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",metastring:'title="index.js"',children:"let ages = [3, 10, 18, 20];\n\nfunction checkAdult(age) {\n  return age >= 18;\n}\n\nconsole.log(ages.findIndex(checkAdult)); // 2\n"})}),"\n",(0,a.jsx)(n.h3,{id:"every",children:(0,a.jsx)(n.code,{children:"every()"})}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"every()"})," method checks if all elements in an array pass a test (provided as a function)."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",metastring:'title="index.js"',children:"let ages = [32, 33, 16, 40];\n\nfunction checkAdult(age) {\n  return age >= 18;\n}\n\nconsole.log(ages.every(checkAdult)); // false\n"})}),"\n",(0,a.jsx)(n.h3,{id:"some",children:(0,a.jsx)(n.code,{children:"some()"})}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"some()"})," method checks if some elements in an array pass a test (provided as a function)."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",metastring:'title="index.js"',children:"let ages = [3, 10, 18, 20];\n\nfunction checkAdult(age) {\n  return age >= 18;\n}\n\nconsole.log(ages.some(checkAdult)); // true\n"})}),"\n",(0,a.jsx)(n.h3,{id:"filter",children:(0,a.jsx)(n.code,{children:"filter()"})}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"filter()"})," method creates a new array with all elements that pass a test (provided as a function)."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",metastring:'title="index.js"',children:"let ages = [32, 33, 16, 40];\n\nfunction checkAdult(age) {\n  return age >= 18;\n}\n\nconsole.log(ages.filter(checkAdult)); // [32, 33, 40]\n"})}),"\n",(0,a.jsx)(n.h3,{id:"map",children:(0,a.jsx)(n.code,{children:"map()"})}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"map()"})," method creates a new array with the result of calling a function for each array element."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",metastring:'title="index.js"',children:"let numbers = [4, 9, 16, 25];\n\nfunction myFunction(value) {\n  return value * 2;\n}\n\nconsole.log(numbers.map(myFunction)); // [8, 18, 32, 50]\n"})}),"\n",(0,a.jsx)(n.h3,{id:"reduce",children:(0,a.jsx)(n.code,{children:"reduce()"})}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"reduce()"})," method reduces the array to a single value (going left-to-right)."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",metastring:'title="index.js"',children:"let numbers = [175, 50, 25];\n\nfunction myFunction(total, num) {\n  return total - num;\n}\n\nconsole.log(numbers.reduce(myFunction)); // 100\n"})}),"\n",(0,a.jsx)(n.h3,{id:"reduceright",children:(0,a.jsx)(n.code,{children:"reduceRight()"})}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"reduceRight()"})," method reduces the array to a single value (going right-to-left)."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",metastring:'title="index.js"',children:"let numbers = [175, 50, 25];\n\nfunction myFunction(total, num) {\n  return total - num;\n}\n\nconsole.log(numbers.reduceRight(myFunction)); // -50\n"})}),"\n",(0,a.jsx)(n.h3,{id:"foreach",children:(0,a.jsx)(n.code,{children:"forEach()"})}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"forEach()"})," method calls a function once for each array element."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",metastring:'title="index.js"',children:'let fruits = ["Apple", "Banana", "Mango", "Orange"];\n\nfruits.forEach(function (value, index, array) {\n  console.log(value);\n});\n'})}),"\n",(0,a.jsx)(n.h3,{id:"isarray",children:(0,a.jsx)(n.code,{children:"isArray()"})}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"isArray()"})," method checks if an object is an array."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",metastring:'title="index.js"',children:'let fruits = ["Apple", "Banana", "Mango", "Orange"];\n\nconsole.log(Array.isArray(fruits)); // true\n'})}),"\n",(0,a.jsx)(n.h3,{id:"from",children:(0,a.jsx)(n.code,{children:"from()"})}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"from()"})," method creates a new Array instance from an array-like or iterable object."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",metastring:'title="index.js"',children:'let myArr = Array.from("ABCDEFG");\n\nconsole.log(myArr); // ["A", "B", "C", "D", "E", "F", "G"]\n'})}),"\n",(0,a.jsx)(n.h3,{id:"of",children:(0,a.jsx)(n.code,{children:"of()"})}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"of()"})," method creates a new Array instance with a variable number of arguments."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",metastring:'title="index.js"',children:"let myArr = Array.of(1, 2, 3, 4, 5);\n\nconsole.log(myArr); // [1, 2, 3, 4, 5]\n"})}),"\n",(0,a.jsx)(n.h3,{id:"fill",children:(0,a.jsx)(n.code,{children:"fill()"})}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"fill()"})," method fills the elements of an array with a static value."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",metastring:'title="index.js"',children:'let fruits = ["Apple", "Banana", "Mango", "Orange"];\n\nconsole.log(fruits.fill("Cherry")); // ["Cherry", "Cherry", "Cherry", "Cherry"]\n'})}),"\n",(0,a.jsx)(n.h3,{id:"copywithin",children:(0,a.jsx)(n.code,{children:"copyWithin()"})}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"copyWithin()"})," method copies array elements within the array, to and from specified positions."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",metastring:'title="index.js"',children:'let fruits = ["Apple", "Banana", "Mango", "Orange"];\n\nconsole.log(fruits.copyWithin(2, 0)); // ["Apple", "Banana", "Apple", "Banana"]\n'})}),"\n",(0,a.jsx)(n.h3,{id:"entries",children:(0,a.jsx)(n.code,{children:"entries()"})}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"entries()"})," method returns a new Array Iterator object that contains the key/value pairs for each index in the array."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",metastring:'title="index.js"',children:'let fruits = ["Apple", "Banana", "Mango", "Orange"];\n\nlet iterator = fruits.entries();\n\nfor (let e of iterator) {\n  console.log(e);\n}\n'})}),"\n",(0,a.jsx)(n.h3,{id:"keys",children:(0,a.jsx)(n.code,{children:"keys()"})}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"keys()"})," method returns a new Array Iterator object that contains the keys for each index in the array."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",metastring:'title="index.js"',children:'let fruits = ["Apple", "Banana", "Mango", "Orange"];\n\nlet iterator = fruits.keys();\n\nfor (let e of iterator) {\n  console.log(e);\n}\n'})}),"\n",(0,a.jsx)(n.h3,{id:"values",children:(0,a.jsx)(n.code,{children:"values()"})}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"values()"})," method returns a new Array Iterator object that contains the values for each index in the array."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",metastring:'title="index.js"',children:'let fruits = ["Apple", "Banana", "Mango", "Orange"];\n\nlet iterator = fruits.values();\n\nfor (let e of iterator) {\n  console.log(e);\n}\n'})}),"\n",(0,a.jsx)(n.h2,{id:"array-destructuring",children:"Array Destructuring"}),"\n",(0,a.jsx)(n.p,{children:"Array destructuring is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",metastring:'title="index.js"',children:'let fruits = ["Apple", "Banana", "Mango", "Orange"];\n\nlet [first, second, third, fourth] = fruits;\n\nconsole.log(first); // Apple\nconsole.log(second); // Banana\nconsole.log(third); // Mango\nconsole.log(fourth); // Orange\n'})}),"\n",(0,a.jsxs)(n.admonition,{title:"\ud83d\udcdd Note",type:"info",children:[(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Best Practice"})}),(0,a.jsxs)(n.p,{children:["It is best practice to use the ",(0,a.jsx)(n.code,{children:"const"})," keyword when declaring arrays, as the array values are not expected to change."]}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",metastring:'title="index.js"',children:'    const fruits = ["Apple", "Banana", "Mango", "Orange"];\n'})})]}),"\n",(0,a.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,a.jsx)(n.p,{children:"In this section, you learned how to create and manipulate arrays in JavaScript. You also learned about the different methods that can be used to manipulate arrays. You can now use arrays to store multiple values in a single variable and perform various operations on them."})]})}function h(e={}){const{wrapper:n}={...(0,s.M)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},4552:(e,n,r)=>{r.d(n,{I:()=>i,M:()=>l});var a=r(11504);const s={},t=a.createContext(s);function l(e){const n=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),a.createElement(t.Provider,{value:n},e.children)}}}]);