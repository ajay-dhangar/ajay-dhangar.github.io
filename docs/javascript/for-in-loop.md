---
id: for-in-loop-in-javascript
title: For In Loop
sidebar_label: For In Loop
sidebar_position: 22
tags:
  [
    JavaScript,
    For In Loop,
    Loop,
    Iteration,
    Control,
    Flow,
    Iterative,
    Statements,
    Loops,
    Iteration,
    Iterating,
    Iterations,
  ]
description: "In this tutorial, we will learn about the for...in loop in JavaScript. We will learn how to use the for...in loop to iterate over the properties of an object in JavaScript."
---

In JavaScript, the `for...in` loop is used to iterate over the properties of an object. It is often used when you want to perform an action on each property of an object.

## Syntax

The syntax of the `for...in` loop is as follows:

```js title="app.js"
for (variable in object) {
  // code to be executed
}
```

- The `for...in` loop starts with the `for` keyword followed by parentheses.
- Inside the parentheses, you need to specify a `variable` to hold the property name and the `object` over which you want to iterate.
- The `variable` will be assigned the property name of the object on each iteration.
- The code inside the loop will be executed for each property of the object.
- The loop will iterate over all enumerable properties of the object, including inherited properties from the object's prototype chain.
- The order of iteration is not guaranteed and may vary between different JavaScript engines.
- The `for...in` loop should not be used to iterate over arrays, as it may not iterate over the elements in the array in a predictable order.
- The `for...in` loop should be used only for objects.

## Example

The following example demonstrates how to use the `for...in` loop to iterate over the properties of an object:

```js title="app.js"
const person = {
  name: "Shiva",
  age: 25,
  profession: "Developer",
};

for (let key in person) {
  console.log(key + ": " + person[key]);
}
```

In this example, the `for...in` loop iterates over the properties of the `person` object. On each iteration, the `key` variable is assigned the property name of the object, and the code inside the loop logs the property name and its value to the console.

The output of the above example will be:

```plaintext title="Output"
name: Shiva
age: 25
profession: Developer
```

In this example, the `for...in` loop iterates over the `name`, `age`, and `profession` properties of the `person` object and logs their names and values to the console.

:::info 📝 Note
The `for...in` loop is a powerful tool for iterating over the properties of an object and performing actions on each property. However, it should be used with caution, as it may iterate over inherited properties and may not guarantee a specific order of iteration.

In modern JavaScript, the `for...in` loop is often replaced with the `for...of` loop when iterating over arrays and other iterable objects, as it provides more predictable and controllable iteration behavior. However, the `for...in` loop remains a useful tool for iterating over the properties of an object.
:::


## Conclusion

In this tutorial, we learned about the `for...in` loop in JavaScript and how to use it to iterate over the properties of an object. We also explored the syntax of the `for...in` loop and saw an example of how to use it to perform actions on each property of an object. We also discussed the precautions to be taken when using the `for...in` loop and its limitations when iterating over arrays.
