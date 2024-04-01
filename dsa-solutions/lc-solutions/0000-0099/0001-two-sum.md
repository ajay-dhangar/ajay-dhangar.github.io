---
id: two-sum
title: 0001 - Two Sum (Easy)
sidebar_label: 0001 - Two Sum
tags:
  - Two Sum
  - Hash Table
  - Two Pointer
  - Array
  - LeetCode
  - JavaScript
  - TypeScript
---

This is a solution to the [Two Sum](https://leetcode.com/problems/two-sum/) problem on LeetCode.

## Problem

### Problem Description

Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

### Examples

```text
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1].
```

```text
Input: nums = [3,2,4], target = 6
Output: [1,2]
```

```text
Input: nums = [3,3], target = 6
Output: [0,1]
```

### Constraints

- `2 <= nums.length <= 10^4`
- `-10^9 <= nums[i] <= 10^9`
- `-10^9 <= target <= 10^9`
- Only one valid answer exists.

## Solution

### Approach 1: Brute Force (Naive)

The brute force approach is simple. We iterate through each element `nums[i]` and check if there is another element `nums[j]` such that `nums[i] + nums[j] == target`. If we find such a pair, we return the indices `[i, j]`.

#### Implementation

```jsx live
function twoSumProblem() {
  const nums = [2, 7, 11, 15];
  const target = 9;

    const twoSum = function (nums, target) {
        for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
            return [i, j];
            }
        }
        }
    
        return [];
    };

  const result = twoSum(nums, target);
  return (
    <div>
      <p><b>Input:</b> nums = {"[", nums.join(", "), "]"}, target = {target}</p>
      <p><b>Output:</b> {"[", result.join(", "), "]"}</p>
    </div>
  );
}
```

#### Code

```javascript title="Two Sum Problem" showLineNumbers
function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }

  return [];
}
```


#### Complexity Analysis

- Time Complexity: **_O(n<sup>2</sup>)_**
- Space Complexity: **_O(1)_**
- Where `n` is the length of the input array `nums`.
- The time complexity is **_O(n<sup>2</sup>)_** because we are iterating through the array twice.
- The space complexity is **_O(1)_** because we are not using any extra space.
- This approach is not efficient and is not recommended for large inputs.

