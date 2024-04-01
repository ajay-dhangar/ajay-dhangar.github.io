---
id: arrays-intro
title: Arrays Introduction in DSA
sidebar_label: Arrays Introduction
sidebar_position: 2
description: "Arrays are the most basic data structure in computer science. They are used to store a collection of elements of the same type. In this tutorial, we will learn about arrays, their properties, and the problems related to arrays in Data Structures and Algorithms. We will also discuss the problems for practice."
tags: [dsa, arrays, data-structures, algorithms, programming-skills, introduction, properties, problems, practice, collection]
---

In this tutorial, we will learn about arrays, their properties, and the problems related to arrays in Data Structures and Algorithms. We can write a program to store a collection of elements of the same type in an array. We will also discuss the problems for practice.

## What is an Array?

An array is a collection of elements of the same type stored in contiguous memory locations. The elements in an array are stored in a sequence and can be accessed using an index. The index of the first element in an array is 0, and the index of the last element is `n-1`, where `n` is the number of elements in the array.

## Properties of Arrays

1. **Homogeneous Data Structure**: An array is a homogeneous data structure, which means that it can store elements of the same type. For example, an array of integers can only store integers, and an array of characters can only store characters.
2. **Fixed Size**: The size of an array is fixed at the time of declaration, and it cannot be changed during the execution of the program.
3. **Random Access**: The elements in an array can be accessed randomly using an index. The time complexity of accessing an element in an array is O(1).
4. **Contiguous Memory Allocation**: The elements in an array are stored in contiguous memory locations. This allows for efficient memory access and cache utilization.
5. **Efficient for Insertion and Deletion at the End**: Insertion and deletion of elements at the end of an array are efficient operations with a time complexity of O(1).
6. **Inefficient for Insertion and Deletion in the Middle**: Insertion and deletion of elements in the middle of an array are inefficient operations with a time complexity of O(n), where n is the number of elements in the array.
7. **Memory Wastage**: If the size of the array is larger than the number of elements it stores, there is memory wastage.
8. **Memory Fragmentation**: If the size of the array is smaller than the number of elements it stores, there can be memory fragmentation.

## Problems on Arrays

Here are some common problems related to arrays that you can practice:

### Reverse an Array 

Given an array of integers, write a program to reverse the array in-place.

```plaintext title="Input"
Array: [1, 2, 3, 4, 5]
```

```js title="Reverse an Array"
function reverseArray(arr) {
    let start = 0;
    let end = arr.length - 1;

    while (start < end) {
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }

    return arr;
}

const arr = [1, 2, 3, 4, 5];

console.log(reverseArray(arr)); // Output: [5, 4, 3, 2, 1]
```

### Find the Maximum Element in an Array

Given an array of integers, write a program to find the maximum element in the array.

```plaintext title="Input"
Array: [5, 3, 9, 1, 7]
```

```js title="Find the Maximum Element in an Array"
function findMaxElement(arr) {
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    return max;
}

const arr = [5, 3, 9, 1, 7];

console.log(findMaxElement(arr)); // Output: 9
```

## Conclusion

In this tutorial, we learned about arrays, their properties, and the problems related to arrays in Data Structures and Algorithms. We also discussed the problems for practice. Arrays are the most basic data structure in computer science and are used to store a collection of elements of the same type. Arrays are widely used in programming and are an essential concept to understand for any programmer.