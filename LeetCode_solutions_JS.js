'use strict'

////////////////////////////////////////////////////////////////////////////////////////////
/*
// 4. Median of Two Sorted Arrays
// https://leetcode.com/problems/median-of-two-sorted-arrays/
// Hard

// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

// Example 1:
// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.

// Example 2:
// Input: nums1 = [1,2], nums2 = [3,4]
// Output: 2.50000
// Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.

// Example 3:
// Input: nums1 = [0,0], nums2 = [0,0]
// Output: 0.00000

// Example 4:
// Input: nums1 = [], nums2 = [1]
// Output: 1.00000

// Example 5:
// Input: nums1 = [2], nums2 = []
// Output: 2.00000

// Constraints:

// nums1.length == m
// nums2.length == n
// 0 <= m <= 1000
// 0 <= n <= 1000
// 1 <= m + n <= 2000
// -106 <= nums1[i], nums2[i] <= 106

// Follow up: The overall run time complexity should be O(log (m+n)).
*/

// My solution:

// /**
//  * @param {number[]} nums1
//  * @param {number[]} nums2
//  * @return {number}
//  */
// var findMedianSortedArrays = function(nums1, nums2) {
//     let nums = []
//     nums.push(...nums1, ...nums2);
//     nums.sort((a, b) => a - b);
//     return (nums.length % 2 === 1) ? nums[(nums.length - 1) / 2] : (nums[(nums.length) / 2 - 1] + nums[(nums.length) / 2]) / 2;
// };

// // let nums1 = [1, 3];
// // let nums2 = [2];
// // console.log(findMedianSortedArrays(nums1, nums2), 2);

// // let nums1 = [1, 2];
// // let nums2 = [3, 4];
// // console.log(findMedianSortedArrays(nums1, nums2), 2.5);

// let nums1 = [];
// let nums2 = [2];
// console.log(findMedianSortedArrays(nums1, nums2), 2);


/////////////////////////////////////////////////////////////////////////////////////////////
/*
// 3. Longest Substring Without Repeating Characters
// https://leetcode.com/problems/longest-substring-without-repeating-characters/
// Medium

// Given a string s, find the length of the longest substring without repeating characters.

// Example 1:
// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

// Example 2:
// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.

// Example 3:
// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

// Example 4:
// Input: s = ""
// Output: 0
 
// Constraints:
// 0 <= s.length <= 5 * 104
// s consists of English letters, digits, symbols and spaces.
*/

// // My solution:

// /**
//  * @param {string} s
//  * @return {number}
//  */
// var lengthOfLongestSubstring = function(s) {
//     let lenLongest = 0;
//     let strLongest = "";
//     for (let char of s) {
//         strLongest = strLongest.slice(strLongest.indexOf(char) + 1) + char;
//         lenLongest = Math.max(lenLongest, strLongest.length)
//     }
//     return lenLongest;
// };


// console.log(lengthOfLongestSubstring("abcabcbb"), 3);
// console.log(lengthOfLongestSubstring("bbbbbb"), 1);
// console.log(lengthOfLongestSubstring("pwwkew"), 3);
// console.log(lengthOfLongestSubstring(""), 0);
// console.log(lengthOfLongestSubstring("bbbabc"), 3); // 2 3
// console.log(lengthOfLongestSubstring("bbbbbba"), 2);


// // The next approach is completely wrong!
// /**
//  * @param {string} s
//  * @return {number}
//  */
// var lengthOfLongestSubstring = function(s) {
//     let lenLongest = 0;
//     let charsLongest = new Set();
//     for (let char of s) {
//         if (charsLongest.has(char)) {
//             lenLongest = Math.max(lenLongest, charsLongest.size);
//             charsLongest.clear();
//         }   
//         charsLongest.add(char);
//         console.log(charsLongest);
//     }
//     lenLongest = Math.max(lenLongest, charsLongest.size);
//     return lenLongest;
// };

// console.log(lengthOfLongestSubstring("abcabcbb"), 3);
// console.log(lengthOfLongestSubstring("bbbbbb"), 1);
// console.log(lengthOfLongestSubstring("pwwkew"), 3);
// console.log(lengthOfLongestSubstring(""), 0);
// console.log(lengthOfLongestSubstring("bbbabc"), 3); // 2 3
// console.log(lengthOfLongestSubstring("bbbbbba"), 2); 

///////////////////////////////////////////////////////////////////////////////////////////////
/*
// 5. Longest Palindromic Substring
// https://leetcode.com/problems/longest-palindromic-substring/
// Medium

// Given a string s, return the longest palindromic substring in s.

// Example 1:
// Input: s = "babad"
// Output: "bab"
// Note: "aba" is also a valid answer.

// Example 2:
// Input: s = "cbbd"
// Output: "bb"

// Example 3:
// Input: s = "a"
// Output: "a"

// Example 4:
// Input: s = "ac"
// Output: "a"

// Constraints:
// 1 <= s.length <= 1000
// s consist of only digits and English letters (lower-case and/or upper-case)
*/

// // My solution:

// /**
//  * @param {string} s
//  * @return {string}
//  */
//  function longestPalindrome(s) {
//     function isPalindrom(s){
//         let len = s.length;
//         for (let i = 0; i < len / 2; i++) {
//             if (s[i] != s[len - 1 - i]) {
//                 return false;
//             }
//         }
//         return true;
//     }

//     for (let i = s.length; i > 0; i--) {
//         for (let start = 0; start < s.length - i + 1; start++) {
//             let subStr = s.slice(start, start + i);
//             if (isPalindrom(subStr)) {
//                 return subStr;
//             }
//         }
//     }
// };

// console.log(longestPalindrome('tanata'));
// console.log(longestPalindrome('tanat'));
// console.log(longestPalindrome('tana'));
// console.log(longestPalindrome('tan'));
// console.log(longestPalindrome('ta'));
// console.log(longestPalindrome('t'));
//console.log(longestPalindrome(''));

// Some tests with substrings:
// console.log('abcd'.slice(-1, -3, -1)); // '' видимо, slice не умеет "ходить" из начала в конец, а 3-й аргумент вообще лишний
// console.log('abcd'.slice(-1, -3));  // '' видимо, slice не умеет "ходить" из начала в конец, а 3-й аргумент вообще лишний
// console.log('abcd'.slice(1, 3, 2)); // 'bc', да точно 3-й аргумент вообще лишний
// console.log('abcd'.substr(-4, -4)); // '', тоже не умеет обрабатывать отрицательные аргументы
// console.log('abcd'[-1]);


/////////////////////////////////////////////////////////////////////////////////////////////////
/*
// 6. ZigZag Conversion
// https://leetcode.com/problems/zigzag-conversion/  
// Medium

// The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like 
// this: (you may want to display this pattern in a fixed font for better legibility)

// P   A   H   N  
// A P L S I I G  
// Y   I   R  
// And then read line by line: "PAHNAPLSIIGYIR"  

// Write the code that will take a string and make this conversion given a number of rows:  

// string convert(string s, int numRows);
 

// Example 1:  
// Input: s = "PAYPALISHIRING", numRows = 3  
// Output: "PAHNAPLSIIGYIR"  

// Example 2:  
// Input: s = "PAYPALISHIRING", numRows = 4  
// Output: "PINALSIGYAHRPI"  
// Explanation:  
// P     I    N  
// A   L S  I G  
// Y A   H R  
// P     I  

// Example 3:  
// Input: s = "A", numRows = 1  
// Output: "A"
 
// Constraints:  
// 1 <= s.length <= 1000   
// s consists of English letters (lower-case and upper-case), ',' and '.'.  
// 1 <= numRows <= 1000
*/

// // My solution:

// /**
//  * @param {string} s
//  * @param {number} numRows
//  * @return {string}
//  */
// var convert = function(s, numRows) {
//     if (numRows == 1) {   // special case
//         return s;
//     }
//     let resStr = '';
//     let cols = Math.ceil(s.length / (2 * numRows - 2));
//     for (let i = 0; i < numRows; i++) {
//         for(let j = 0; j < cols; j++) {
//             let cur = j * (2 * numRows - 2) + i;
//             resStr += s[cur] || '';
//             if (i != 0 && i != numRows - 1) {
//                 cur = (2 * j + 1) * (2 * numRows - 2) - cur;
//                 resStr += s[cur] || '';
//             }
//         }
//     }
//     return resStr;
// };

// console.log(convert('PAYPALISHIRING', 1), 'PAYPALISHIRING');
// console.log(convert('PAYPALISHIRING', 2), 'PYAIHRNAPLSIIG');
// console.log(convert('PAYPALISHIRING', 3), 'PAHNAPLSIIGYIR');
// console.log(convert('PAYPALISHIRING', 4), 'PINALSIGYAHRPI');

// // Some my test and attempts:
// console.log(Math.floor(4.3)); // 4
// console.log(Math.floor(4.0)); // 4
// console.log(Math.floor(4.7)); // 4
// console.log(Math.floor(Infinity));  // Infinity
// console.log(10 % Infinity); // 10
// console.log(10 / 0);  // Infinity
// console.log(10 % 0);  // NaN
// console.log(Infinity + 10); // Infinity

// let numRows = 3;  // numRows == 1 - особый случай 
// let ind = [];
// let len = 16;
// //let cols = Math.floor(len / (2 * numRows - 2)) + Math.floor(len % (2 * numRows - 2) / numRows);
// let cols = Math.ceil(len / (2 * numRows - 2));
// console.log(cols);
// for (let i = 0; i < numRows; i++) {
//     for(let j = 0; j < cols; j++) {
//         let cur = j * (2 * numRows - 2) + i;
//         ind.push(cur);
//         if (i != 0 && i != numRows - 1) {
//             ind.push((2 * j + 1) * (2 * numRows - 2) - cur)
//         }
//     }
// }
// console.log(ind);

///////////////////////////////////////////////////////////////////////////////////////////
// 20210308     
/*
1. Two Sum
// https://leetcode.com/problems/two-sum/
// Easy

// Given an array of integers nums and an integer target, return indices of the two numbers 
// such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the 
// same element twice.

// You can return the answer in any order.

// Example 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].

// Example 2:
// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// Example 3:
// Input: nums = [3,3], target = 6
// Output: [0,1]

// Constraints:
// 2 <= nums.length <= 103
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.
*/

// // My solution:

// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */
// var twoSum = function(nums, target) {
//     let diff = new Map();
//     for (let i = 0; i < nums.length; i++) {
//         if (diff.has(nums[i])) {
//             return [i, diff.get(nums[i])]
//         } else {
//             diff.set(target - nums[i],  i);
//         }            
//     } 
// };

// console.log(twoSum([2,7,11,15], 9));

/////////////////////////////////////////////////////////////////////////////////////////
// 20210309
/*
15. 3Sum
https://leetcode.com/problems/3sum/
Medium

Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets 
in the array which gives the sum of zero.

Notice that the solution set must not contain duplicate triplets.

Example 1:
Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]

Example 2:
Input: nums = []
Output: []

Example 3:
Input: nums = [0]
Output: []

Constraints:
0 <= nums.length <= 3000
-105 <= nums[i] <= 105
*/
// // My solution:
// /**
//  * @param {number[]} nums
//  * @return {number[][]}
//  */
// var threeSum = function(nums) {
//     let triples = [];
//     let tripleHashes = new Set();
//     for (let i = 0; i < nums.length; i++) {
//         let diffs = new Map();
//         for (let j = 0; j < nums.length; j++) {
//             if (i != j) {
//                 if (diffs.has(nums[j])) {
//                     let triple = [nums[i], nums[j], diffs.get(nums[j])];
//                     let curHash = triple.sort().toString();
//                     if (tripleHashes.has(curHash) === false) {
//                         tripleHashes.add(curHash);
//                         triples.push(triple);
//                     }
//                 } else {
//                     diffs.set(-(nums[i] + nums[j]), nums[j]);
//                 }
//             }
//         }
//     }
//     return triples;
// };

// console.log(threeSum([-1,0,1,2,-1,-4]), [[-1,-1,2],[-1,0,1]])
// console.log(threeSum([]), [])
// console.log(threeSum([0]), [])
// console.log(threeSum([0,0,0]), [[0,0,0]])

////////////////////////////////////////////////////////////////////////////////////
// 20210312
/*
7. Reverse Integer
https://leetcode.com/problems/reverse-integer/
Easy

Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes 
the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

Example 1:
Input: x = 123
Output: 321

Example 2:
Input: x = -123
Output: -321

Example 3:
Input: x = 120
Output: 21

Example 4:
Input: x = 0
Output: 0

Constraints:
-231 <= x <= 231 - 1
*/

// // My solution:

// /**
//  * @param {number} x
//  * @return {number}
//  */
//  var reverse = function(x) {
//     // [-1, 1][x > 0] returns undefined; [-1, 1][Number(x > 0)] - ok
//     // Second multiplier will be implicitly converted in Number
//     x = ((x > 0) ? 1 : -1) * Array(...String(Math.abs(x))).reverse().join(''); 
//     return ((-2)**31 <= x && x <= 2**31 - 1) ? x : 0;
// };

// console.log(reverse(123));
// console.log(reverse(-123));
// console.log(reverse(120));
// console.log(reverse(0));

///////////////////////////////////////////////////////////////////////////////////////
// 20210314
/*
14. Longest Common Prefix
https://leetcode.com/problems/longest-common-prefix/
Easy

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:
Input: strs = ["flower","flow","flight"]
Output: "fl"

Example 2:
Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.

Constraints:
0 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lower-case English letters.
*/

// // My solution:

// /**
//  * @param {string[]} strs
//  * @return {string}
//  */
// var longestCommonPrefix = function(strs) {
//     let prefix = '';
//     if (strs.length > 0) {
//         for (let i = 0; i < strs[0].length; i++) {
//             for (let j = 1; j < strs.length; j++) {
//                 if (strs[0][i] !== strs[j][i]) {
//                     return prefix
//                 }
//             }
//             prefix += strs[0][i];
//         }
//     }
//     return prefix;
// };

// console.log(longestCommonPrefix([]), '');
// console.log(longestCommonPrefix(["flower","flow","flight"]), 'fl');
// console.log(longestCommonPrefix(["dog","racecar","car"]), '');

///////////////////////////////////////////////////////////////////////////////////////
// 20210315
/*
20. Valid Parentheses
https://leetcode.com/problems/valid-parentheses/
Easy

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', 
determine if the input string is valid.

An input string is valid if:
Open brackets must be closed by the same type of brackets. Open brackets must be 
closed in the correct order.

Example 1:
Input: s = "()"
Output: true

Example 2: Input: s = "()[]{}"
Output: true

Example 3:
Input: s = "(]"
Output: false

Example 4:
Input: s = "([)]"
Output: false

Example 5:
Input: s = "{[]}"
Output: true
*/

// // My solution:

// /**
//  * @param {string} s
//  * @return {boolean}
//  */
// var isValid = function(s) {
//    let stack = [];
//    let d = new Map([['(', ')'], ['{', '}'], ['[', ']']]);
//    for (let char of s) {
//         if ('({['.includes(char)) {
//             stack.push(char);
//         } else {
//             if (stack.length === 0 || d.get(stack.pop()) !== char) {
//                 return false;
//             }
//         }
//    }
//    return stack.length === 0;
// };

// console.log(isValid("()"), true);
// console.log(isValid("()[]{}"), true);
// console.log(isValid("(]"), false);
// console.log(isValid("([)]"), false);
// console.log(isValid("{[]}"), true);
// console.log(isValid("]"), false);

/////////////////////////////////////////////////////////////////////////////////////
// 20210316
/*
26. Remove Duplicates from Sorted Array
https://leetcode.com/problems/remove-duplicates-from-sorted-array/
easy

Given a sorted array nums, remove the duplicates in-place such that each element 
appears only once and returns the new length.

Do not allocate extra space for another array, you must do this by modifying the 
input array in-place with O(1) extra memory.

Clarification: Confused why the returned value is an integer but your answer is an array?
Note that the input array is passed in by reference, which means a modification to the 
input array will be known to the caller as well.

Example 1:
Input: nums = [1,1,2]
Output: 2, nums = [1,2]
Explanation: Your function should return length = 2, with the first two elements of 
nums being 1 and 2 respectively. It doesn't matter what you leave beyond the returned length.

Example 2:
Input: nums = [0,0,1,1,1,2,2,3,3,4]
Output: 5, nums = [0,1,2,3,4]
Explanation: Your function should return length = 5, with the first five elements of nums 
being modified to 0, 1, 2, 3, and 4 respectively. It doesn't matter what values are set 
beyond the returned length.

Constraints:
0 <= nums.length <= 3 * 104
-104 <= nums[i] <= 104
nums is sorted in ascending order.
*/

// // My solutions:

// // #1
// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
//  var removeDuplicates = function(nums) {
//     let pr = 0;
//     let cur = 1;
//     let initialLen = nums.length;
//     let deletedAmount = 0;
//     while (cur + deletedAmount < initialLen) {
//         if (nums[cur] !== nums[pr]) {
//             nums.splice(pr + 1, cur - pr - 1);
//             deletedAmount += cur - pr - 1;
//             pr++;
//             cur = pr + 1;
//         }
//         else {
//             cur++;
//         }
//     }
//     nums.splice(pr + 1, cur - pr - 1);
//     return nums.length;
// };

// // #2
// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
//  var removeDuplicates = function(nums) {
//     let pr = 0;
//     let cur = 1;
//     while (nums[cur] !== undefined) {
//         if (nums[cur] !== nums[pr]) {
//             nums.splice(pr + 1, cur - pr - 1);
//             pr++;
//             cur = pr + 1;
//         }
//         else {
//             cur++;
//         }
//     }
//     nums.splice(pr + 1, cur - pr - 1);
//     return nums.length;
// };

// // Almost the #2 but better
// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
//  var removeDuplicates = function(nums) {
//     let pr = 0;
//     let cur = 1;
//     while (cur < nums.length) {
//         if (nums[cur] !== nums[pr]) {
//             nums.splice(pr + 1, cur - pr - 1);
//             pr++;
//             cur = pr + 1;
//         }
//         else {
//             cur++;
//         }
//     }
//     nums.splice(pr + 1, cur - pr - 1);
//     return nums.length;
// };

// console.log(removeDuplicates([1, 1, 2]), 2);
// console.log(removeDuplicates([1, 1, 1, 1, 1]), 1);
// console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]), 5);
// console.log(removeDuplicates([]), 0);

////////////////////////////////////////////////////////////////////////////////////////////
// 20210317
/*
27. Remove Element
https://leetcode.com/problems/remove-element/
Easy

Given an array nums and a value val, remove all instances of that value in-place and return 
the new length.

Do not allocate extra space for another array, you must do this by modifying the input array 
in-place with O(1) 
extra memory.

The order of elements can be changed. It doesn't matter what you leave beyond the new length.

Clarification:

Confused why the returned value is an integer but your answer is an array?

Note that the input array is passed in by reference, which means a modification to the input 
array will be known 
to the caller as well.

Example 1:
Input: nums = [3,2,2,3], val = 3
Output: 2, nums = [2,2]
Explanation: Your function should return length = 2, with the first two elements of nums 
being 2.
It doesn't matter what you leave beyond the returned length. For example if you return 2 with 
nums = [2,2,3,3] or 
nums = [2,2,0,0], your answer will be accepted.

Example 2:
Input: nums = [0,1,2,2,3,0,4,2], val = 2
Output: 5, nums = [0,1,4,0,3]
Explanation: Your function should return length = 5, with the first five elements of nums containing 0, 1, 3, 0, and 4. 
Note that the order of those five elements can be arbitrary. It doesn't matter what values are set beyond the returned length.
*/

// // My solutions:

// // #1
// /**
//  * @param {number[]} nums
//  * @param {number} val
//  * @return {number}
//  */
// var removeElement = function(nums, val) {
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] === val) {
//             nums.splice(i, 1);
//             i--;
//         }
//     }
//     return nums.length; 
// };

// // #2 Using Lodash' _.remove method
// /**
//  * @param {number[]} nums
//  * @param {number} val
//  * @return {number}
//  */
// var removeElement = function(nums, val) {
//     _.remove(nums, (item) => item === val);
//     return nums.length;
// };

// console.log(removeElement([3,2,2,3], 3), 2);
// console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2), 5);
// console.log(removeElement([1, 1, 1, 1, 1], 1), 0);
// console.log(removeElement([1, 1, 1, 1, 1], 2), 5);
// console.log(removeElement([], 3), 0);

/////////////////////////////////////////////////////////////////////////////////////////////
// 20210318
/*
28. Implement strStr()
https://leetcode.com/problems/implement-strstr/
Easy

Return the index of the first occurrence of needle in haystack, or -1 if needle is not part 
of haystack.

Clarification:
What should we return when needle is an empty string? This is a great question to ask during 
an interview.

For the purpose of this problem, we will return 0 when needle is an empty string. This is 
consistent to C's 
strstr() and Java's indexOf() (and Python's index(), anf JS's indexOf()).

Example 1:
Input: haystack = "hello", needle = "ll"
Output: 2

Example 2:
Input: haystack = "aaaaa", needle = "bba"
Output: -1

Example 3:
Input: haystack = "", needle = ""
Output: 0

Constraints:
0 <= haystack.length, needle.length <= 5 * 104
haystack and needle consist of only lower-case English characters.
*/

// // My solutions:

// // #1 Using standard string.indexOf method
// /**
//  * @param {string} haystack
//  * @param {string} needle
//  * @return {number}
//  */
//  var strStr = function(haystack, needle) {
//     // if (!needle) {   // this check is excess, because method str.indexOf works the same way
//     //     return 0;
//     // }
//     return haystack.indexOf(needle);
// };

// // Almost the same
// var strStr = (haystack, needle) => haystack.indexOf(needle);

// // #2 My bicycle (with using string.startsWith method though)
// /**
//  * @param {string} haystack
//  * @param {string} needle
//  * @return {number}
//  */
// var strStr = function(haystack, needle) {    
//     if (!needle) {
//         return 0;
//     }
//     for (let i = 0; i < haystack.length; i++) {
//         if (haystack[i] === needle[0]) {
//             if (haystack.slice(i + 1).startsWith(needle.slice(1))) {
//                 return i;
//             }
//         }
//     }
//     return -1;
// };

// // #3 My absolute bicycle (without using any of standard/library methods 
// // (string.indexOf, string.startsWith ...))
// // I could implement my own startsWith function but it would demand coping of the strings
// // on its every call.
// // I don't want waste resourses for this
// /**
//  * @param {string} haystack
//  * @param {string} needle
//  * @return {number}
//  */
// var strStr = function(haystack, needle) {    
//     if (!needle) {
//         return 0;
//     }
//     for (let i = 0; i < haystack.length; i++) {
//         if (haystack[i] === needle[0]) {
//             // Check if the rest of the haystack starts with the rest of the needle
//             // If the rest of needle is longer than the rest of the haystack -> false 
//             if (needle.length - 1 <= haystack.length - 1 - i) {
//                 let startsWith = true;
//                 for (let j = 1, k = i + 1; j < needle.length; j++, k++) {
//                     if (needle[j] !== haystack[k]) {
//                         startsWith = false;
//                         break;
//                     }
//                 }
//                 if (startsWith) {
//                     return i;
//                 }
//             }
//         }
//     }
//     return -1;
// };

// console.log(strStr('hello', 'll'), 2);
// console.log(strStr('hello', 'helloooo'), -1);
// console.log(strStr('aaaaaa', 'bba'), -1);
// console.log(strStr('', ''), 0);
// console.log(strStr('dddddd', ''), 0);

// console.log('example'.indexOf('')); //  0 
// console.log('example'.startsWith('')); // true

//////////////////////////////////////////////////////////////////////////////////////////
// 20210321
/*
2. Add Two Numbers
https://leetcode.com/problems/add-two-numbers/
Medium

You are given two non-empty linked lists representing two non-negative integers. 
The digits are stored in reverse order, 
and each of their nodes contains a single digit. Add the two numbers and return the sum 
as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example 1:
Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.

Example 2:
Input: l1 = [0], l2 = [0]
Output: [0]

Example 3:
Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]

Constraints:
The number of nodes in each linked list is in the range [1, 100].
0 <= Node.val <= 9
It is guaranteed that the list represents a number that does not have leading zeros.
*/

// My solution:

// function ListNode(val, next) {
//     this.val = (val===undefined ? 0 : val);
//     this.next = (next===undefined ? null : next);
// }

// /**
//  * @param {ListNode} l1
//  * @param {ListNode} l2
//  * @return {ListNode}
//  */

// var addTwoNumbers = function(l1, l2) {
//     let cur1 = l1;
//     let cur2 = l2;
//     let curRes = new ListNode();
//     let ListNodeRes = curRes;
//     let over = 0;
//     let d = 0;

//     while (true) {
//         d = cur1.val + cur2.val + over;
//         if (d >= 10) {
//             d %= 10;
//             over = 1;
//         }
//         else {
//             over = 0;
//         }
//         curRes.val = d;
//         cur1 = cur1.next;
//         cur2 = cur2.next;
//         if (!cur1 || !cur2) {
//             break;
//         }
//         curRes.next = new ListNode();
//         curRes = curRes.next;
//     }

//     let cur = cur1 || cur2;
//     while (cur) {
//         d = cur.val + over;
//         console.log(d);
//         if (d >= 10) {
//             d %= 10;
//             over = 1;
//         }
//         else {
//             over = 0;
//         }
//         curRes.next = new ListNode(d);
//         curRes = curRes.next;
//         cur = cur.next;
//     }

//     if (over) {
//         curRes.next = new ListNode(over);
//     }

//     return ListNodeRes;
// };

// console.log(addTwoNumbers(new ListNode(3), new ListNode(5)));
// console.log(addTwoNumbers(new ListNode(7), new ListNode(5)));
// console.log(addTwoNumbers(new ListNode(7, new ListNode(9)), new ListNode(5)));

///////////////////////////////////////////////////////////////////////////////////////////
// 20210324
/*
24. Swap Nodes in Pairs
https://leetcode.com/problems/swap-nodes-in-pairs/
Medium

Given a linked list, swap every two adjacent nodes and return its head.

Example 1:
Input: head = [1,2,3,4]
Output: [2,1,4,3]

Example 2:
Input: head = []
Output: []

Example 3:
Input: head = [1]
Output: [1]

Constraints:
The number of nodes in the list is in the range [0, 100].
0 <= Node.val <= 100

Follow up: Can you solve the problem without modifying the values in the list's nodes? 
(i.e., Only nodes themselves may be changed.)
*/

// // My solutions:

// // #1 Putting addresses of all nodes in an additional array, swaping addresses in the array and linking all nodes (in new order)
// function ListNode(val, next) {
//     this.val = (val===undefined ? 0 : val);
//     this.next = (next===undefined ? null : next);
// }

// /**
//  * @param {ListNode} head
//  * @return {ListNode}
//  */
// var swapPairs = function(head) {
//     if (head) {
//         let cur = head;
//         let addresses = [];
//         let i = 0;
//         while (cur) {
//             addresses.push(cur);
//             if (i % 2 === 1) {
//                 //[addresses[i - 1], addresses[i]] = [addresses[i], addresses[i - 1]];
//                 let temp = addresses[i - 1];
//                 addresses[i - 1] = addresses[i];
//                 addresses[i] = temp;
//             }
//             i++;
//             cur = cur.next;
//         }
//         head = addresses[0];
//         cur = addresses[0];
//         for (let i = 1; i < addresses.length; i++) {
//             cur.next = addresses[i];
//             cur = cur.next;
//         }
//         cur.next = null;
//     }
//     return head;  
// };

// // console.log(swapPairs(new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))))));

// // 20210325

// // #2 Swapping pairs in place... klm plz for that Destructuring (multiple) assignment
// function ListNode(val, next) {
//     this.val = (val===undefined ? 0 : val);
//     this.next = (next===undefined ? null : next);
// }

// // /**
// //  * @param {ListNode} head
// //  * @return {ListNode}
// //  */
// var swapPairs = function(head) {
//     if (head) {
//         if (head.next) {
//             let cur = head;
//             let prev = new ListNode(0);    // initialize with some random ListNode object
//             head = head.next;
//             while (cur) {
//                 if (cur.next) {
//                     [cur, cur.next, cur.next.next, prev.next] = [cur.next, cur, cur.next.next, cur.next];
//                     cur = cur.next.next;
//                     prev = prev.next.next;
//                 } else {
//                     break;
//                 }
//             }
//         }
//     }
//     return head;
// }

// console.log(swapPairs(new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))))));
// console.log(swapPairs(new ListNode(1, new ListNode(2, new ListNode(3)))));
// console.log(swapPairs(new ListNode(1)));

// My unsuccsessful attempts:
//let cur = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))));
// let cur = new ListNode(1, new ListNode(2));

// let temp;
// [cur, cur.next, cur.next.next] = [cur.next, cur, cur.next.next]
// console.log(cur, temp);

////////////////////////////////////////////////////////////////////////////////////////////
// 20210326

/*
35. Search Insert Position
https://leetcode.com/problems/search-insert-position/
Easy

Given a sorted array of distinct integers and a target value, return the index if the target is found. 
If not, return the index where it would be if it were inserted in order.

Example 1:
Input: nums = [1,3,5,6], target = 5
Output: 2

Example 2:
Input: nums = [1,3,5,6], target = 2
Output: 1

Example 3:
Input: nums = [1,3,5,6], target = 7
Output: 4

Example 4:
Input: nums = [1,3,5,6], target = 0
Output: 0

Example 5:
Input: nums = [1], target = 0
Output: 0

Constraints:
1 <= nums.length <= 104
-104 <= nums[i] <= 104
nums contains distinct values sorted in ascending order.
-104 <= target <= 104
*/

// // My solution:

// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number}
//  */
// var searchInsert = function(nums, target) {
//     let start = 0;
//     let end = nums.length - 1;
//     let pos = Math.floor((end + start) / 2);
//     while (true) {
//         if (target < nums[start]) {
//             return start;
//         }
//         if (target > nums[end]) {
//             return end + 1;
//         }
//         if (target === nums[pos]) {
//             return pos
//         }
//         if (target < nums[pos]) {
//             end = pos - 1;
//         } else {
//             start = pos + 1;
//         }
//         pos = Math.floor((end + start) / 2);
//     }
// };

// console.log(searchInsert([1, 3, 5, 6], 5), 2);
// console.log(searchInsert([1, 3, 5, 6], 2), 1);
// console.log(searchInsert([1, 3, 5, 6], 7), 4);
// console.log(searchInsert([1, 3, 5, 6], 0), 0);
// console.log(searchInsert([1], 0), 0);

/////////////////////////////////////////////////////////////////////////////////////////////
// 20210329

/*
33. Search in Rotated Sorted Array
https://leetcode.com/problems/search-in-rotated-sorted-array/
Medium

There is an integer array nums sorted in ascending order (with distinct values).

Prior to being passed to your function, nums is rotated at an unknown pivot index k 
(0 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], 
nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated 
at pivot index 3 and become [4,5,6,7,0,1,2].

Given the array nums after the rotation and an integer target, return the index of target 
if it is in nums, or -1 if it is not in nums.

Example 1:
Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4

Example 2:
Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1

Example 3:
Input: nums = [1], target = 0
Output: -1

Constraints:
1 <= nums.length <= 5000
-104 <= nums[i] <= 104
All values of nums are unique.
nums is guaranteed to be rotated at some pivot.
-104 <= target <= 104

Follow up: Can you achieve this in O(log n) time complexity?
*/

// // My solution:

// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number}
//  */
// var search = function(nums, target) {
//     let shift = (lst, ind, k) => (lst.length + (k + ind)) % lst.length;

//     let minInd = 0;
//     let minim = Infinity;
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] < minim) {
//             minInd = i;
//             minim = nums[i];
//         }
//     }

//     let pivotInd = minInd;
//     let start = 0;
//     let end = nums.length - 1;
//     let pos = Math.floor(nums.length / 2);
//     while (start <= end) {
//         if (target < nums[shift(nums, pos, pivotInd)]) {
//             end = pos - 1;
//         } else if (target > nums[shift(nums, pos, pivotInd)]) {
//             start = pos + 1;
//         } else {
//             return shift(nums, pos, pivotInd);
//         }
//         pos = Math.floor((start + end) / 2);
//     }
//     return -1;
// };

// console.log(search([4, 5, 6, 7, 0, 1, 2], 0), 4);
// console.log(search([4, 5, 6, 7, 0, 1, 2], 3), -1);
// console.log(search([1, 3], 4), -1);
// console.log(search([3, 5, 1], 5), 1);
// console.log(search([1], 0), -1);

////////////////////////////////////////////////////////////////////////////////////////
// 20210331

/*
38. Count and Say
https://leetcode.com/problems/count-and-say/
Medium

The count-and-say sequence is a sequence of digit strings defined by the recursive formula:

countAndSay(1) = "1"
countAndSay(n) is the way you would "say" the digit string from countAndSay(n-1), which is 
then converted into a different digit string. To determine how you "say" a digit string, 
split it into the minimal number of groups so that each group is a contiguous section all 
of the same character. Then for each group, say the number of characters, then say the 
character. To convert the saying into a digit string, replace the counts with a number and 
concatenate every saying.

Example 1:
Input: n = 1
Output: "1"
Explanation: This is the base case.

Example 2:
Input: n = 4
Output: "1211"
Explanation:
countAndSay(1) = "1"
countAndSay(2) = say "1" = one 1 = "11"
countAndSay(3) = say "11" = two 1's = "21"
countAndSay(4) = say "21" = one 2 + one 1 = "12" + "11" = "1211"

Constraints:
1 <= n <= 30
*/

// // My solution:

// /**
//  * @param {number} n
//  * @return {string}
//  */
// var countAndSay = function(n) {
//   let res = '1';

//   for (let i = 0; i < n - 1; i++) {
    
//     let prevChar = res[0];
//     let charAmount = 1;
//     let resCopy = res.slice(1);
//     res = '';

//     for (let char of resCopy) {
//       if (char === prevChar) {
//         charAmount += 1;
//       } else {
//           res += charAmount + prevChar;
//           prevChar = char;
//           charAmount = 1;
//       }
//     }

//     res += charAmount + prevChar;
//   }
  
//   return res;
// };

// console.log(countAndSay(1), '1');
// console.log(countAndSay(2), '11');
// console.log(countAndSay(3), '21');
// console.log(countAndSay(4), '1211');

////////////////////////////////////////////////////////////////////////////////////
// 20210401, 20210405
/*
29. Divide Two Integers
https://leetcode.com/problems/divide-two-integers/  
Medium

Given two integers dividend and divisor, divide two integers without using multiplication, 
division, and mod operator.

Return the quotient after dividing dividend by divisor.

The integer division should truncate toward zero, which means losing its fractional part. 
For example, truncate(8.345) = 8 and truncate(-2.7335) = -2.

Note: Assume we are dealing with an environment that could only store integers within the 
32-bit signed integer range: [−2**31, 2**31 − 1]. For this problem, assume that your 
function 
returns 2**31 − 1 when the division result overflows.

Example 1:
Input: dividend = 10, divisor = 3
Output: 3
Explanation: 10/3 = truncate(3.33333..) = 3.

Example 2:
Input: dividend = 7, divisor = -3
Output: -2
Explanation: 7/-3 = truncate(-2.33333..) = -2.

Example 3:
Input: dividend = 0, divisor = 1
Output: 0

Example 4:
Input: dividend = 1, divisor = 1
Output: 1
 
Constraints:
-2**31 <= dividend, divisor <= 2**31 - 1
divisor != 0
*/

// /**
//  * @param {number} dividend
//  * @param {number} divisor
//  * @return {number}
//  */
// var divide = function(dividend, divisor) {
//   let flagMinus = false;
//   let flagBreak = false;

//   if (dividend < 0 && divisor < 0) {
//     dividend = -dividend;
//     divisor = -divisor;
//   }

//   if (dividend < 0 && divisor > 0) {
//     dividend = -dividend;
//     flagMinus = true;
//   }
      
//   if (dividend > 0 && divisor < 0) {
//     divisor = -divisor;
//     flagMinus = true;
//   }
        
//   if (dividend === 0 || dividend < divisor) {
//     return 0;
//   }

//   let accum = 0;
//   let quotient = 0;

//   while (dividend - accum >= divisor) {
//     let i = 1;
//     let div = divisor;
//     let prevDiv = 0;
  
//     while (true) {
//       prevDiv = div;
//       div += div;

//       if (dividend <= div + accum) {
//         if (dividend == div + accum) {
//           quotient = i + i;
//           flagBreak = true;
//           break;
//         }
//         break;
//       }
//       i += i;
//     } 
//     if (flagBreak) {
//       break;
//     }
    
//     accum += prevDiv;
//     quotient += i
//   }

//   if (flagMinus) {
//     quotient = -quotient;
//   }

//   if (quotient < -2147483648 || quotient > 2147483647) {
//     return 2147483647;
//   }

//   return quotient;
// };

// console.log(divide(10, 3), 3);
// console.log(divide(11, 3), 3);
// console.log(divide(12, 3), 4);
// console.log(divide(13, 3), 4);
// console.log(divide(21, 3), 7);
// console.log(divide(35, 5), 7);
// console.log(divide(-35, 5), -7);
// console.log(divide(7, -3), -2);
// console.log(divide(0, 1), 0);
// console.log(divide(1, 1), 1);
// console.log(divide(7, 7), 1);
// console.log(divide(7, -7), -1);
// console.log(divide(1, 2), 0);
// console.log(divide(-6, 2), -3);
// console.log(divide(-2147483648, -1), 2147483647);

///////////////////////////////////////////////////////////////////////////////////
// 20210406
/*
34. Find First and Last Position of Element in Sorted Array  
https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/  
Medium

Given an array of integers nums sorted in ascending order, find the starting and 
ending position of a given target value.

If target is not found in the array, return [-1, -1].

Follow up: Could you write an algorithm with O(log n) runtime complexity?

Example 1:  
Input: nums = [5,7,7,8,8,10], target = 8  
Output: [3,4]

Example 2:  
Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]

Example 3:  
Input: nums = [], target = 0
Output: [-1,-1]

Constraints:  
0 <= nums.length <= 105
-109 <= nums[i] <= 109
nums is a non-decreasing array.
-109 <= target <= 109
*/

// My solution
// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */
//  const searchRange = function(nums, target) {
//     let start = 0;
//     let end = nums.length - 1;
//     let pos = Math.floor(nums.length / 2);

//     while (start <= end) {
//       if (nums[pos] < target) {
//         start = pos + 1;
//       } else {
//         if (nums[pos] > target) {
//           end = pos - 1;
//         } else {
//           return [binRec(nums, start, pos - 1, target), binRec(nums, pos + 1, end, target, false)];
//         }
//       }
//       pos = Math.floor((start + end ) / 2);
//     }

//     return [-1, -1];
// };

// const binRec = (nums, from, to, target, left = true) => {
//   let start = from;
//   let end = to;
//   let pos = Math.floor((start + end) / 2);

//   while (start <= end) {
//     if (nums[pos] < target) {
//       start = pos + 1;
//     } else {
//       if (nums[pos] > target) {
//         end = pos - 1
//       } else {
//         if (left) {
//           end = pos - 1
//         } else {
//           start = pos + 1;
//         }
//       }
//     }
//     pos = Math.floor((start + end ) / 2);
//   }

//   if (left) {
//     return start;
//   } else {
//     return end;
//   }
// };

// console.log(searchRange([1, 3, 4, 7, 9], 7)); // [3, 3]
// console.log(searchRange([1, 1, 2, 2, 3, 3, 3, 3, 3], 1)); [0, 1]
// console.log(searchRange([1, 1, 2, 2, 3, 3, 3, 3, 3], 2)); [2, 3]
// console.log(searchRange([1, 1, 2, 2, 3, 3, 3, 3, 3], 3)); [4, 8]
// console.log(searchRange([1, 2], 1)); // [0, 0]
// console.log(searchRange([1, 1, 2], 1)); [0, 1]
// console.log(searchRange([1, 1, 1, 2], 1)); [0, 2]
// console.log(searchRange([1, 2], 0)); // [-1, -1]
// console.log(searchRange([1, 1, 2], 0)); // [-1, -1]

// // Solution from LeetCode
// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */
//  const searchRange = (nums, target) => {
//   const firstOccurrence = findBound(nums, target, true);

//   if (firstOccurrence === -1) {
//     return [-1, -1];
//   }

//   const lastOccurrence = findBound(nums, target, false);
//   return [firstOccurrence, lastOccurrence];
//  };

//  const findBound = (nums, target, isFirst) => {
//   let begin = 0;
//   let end = nums.length - 1;

//   while (begin <= end) {
//     let mid = Math.floor((begin + end) / 2);

//     if (nums[mid] === target) {
//       if (isFirst) {

//         // This means we found our lower bound.
//         if (mid === begin || nums[mid - 1] !== target) {
//           return mid;
//         }

//         end = mid - 1;
//       } else {

//         // This means we found our upper bound.
//         if (mid === end || nums[mid + 1] !== target) {
//           return mid;
//         }

//         begin = mid + 1;
//       }
//     } else {
//       if (nums[mid] < target) {
//         begin = mid + 1;
//       } else {
//         end = mid - 1;
//       }
//     }
//   }

//   return -1;
// };

// console.log(searchRange([1, 3, 4, 7, 9], 7)); // [3, 3]
// console.log(searchRange([1, 1, 2, 2, 3, 3, 3, 3, 3], 1)); // [0, 1]
// console.log(searchRange([1, 1, 2, 2, 3, 3, 3, 3, 3], 2)); // [2, 3]
// console.log(searchRange([1, 1, 2, 2, 3, 3, 3, 3, 3], 3)); // [4, 8]
// console.log(searchRange([1, 2], 1)); // [0, 0]
// console.log(searchRange([1, 1, 2], 1)); [0, 1]
// console.log(searchRange([1, 1, 1, 2], 1)); [0, 2]
// console.log(searchRange([1, 2], 0)); // [-1, -1]
// console.log(searchRange([1, 1, 2], 0)); // [-1, -1]

///////////////////////////////////////////////////////////////////////////////////
// 20210411
/*
21. Merge Two Sorted Lists
https://leetcode.com/problems/merge-two-sorted-lists/  
Easy

Merge two sorted linked lists and return it as a sorted list. The list should be made by splicing together the nodes of the first two lists.

Example 1:  
Input: l1 = [1,2,4], l2 = [1,3,4]  
Output: [1,1,2,3,4,4]

Example 2:  
Input: l1 = [], l2 = []  
Output: []

Example 3:  
Input: l1 = [], l2 = [0]  
Output: [0]
 
Constraints:  
The number of nodes in both lists is in the range [0, 50].  
-100 <= Node.val <= 100  
Both l1 and l2 are sorted in non-decreasing order.
*/

// My solution
// // Definition for singly-linked list.
// function ListNode(val, next) {
//   this.val = (val === undefined ? 0 : val);
//   this.next = (next === undefined ? null : next);
//  }

// /**
//  * @param {ListNode} l1
//  * @param {ListNode} l2
//  * @return {ListNode}
//  */
// const mergeTwoLists = function(l1, l2) {
//   let cur1 = l1;
//   let cur2 = l2;
//   let cur = new ListNode(0);
//   let resList = cur.next;

//   while(cur1 && cur2) {
//     if (cur1.val < cur2.val) {
//       cur.next = new ListNode(cur1.val);
//       cur1 = cur1.next;
//     } else {
//       cur.next = new ListNode(cur2.val);
//       cur2 = cur2.next;
//     }

//     cur = cur.next;

//     if (resList === null) {
//       resList = cur;
//     }
//   }

//   cur1 = cur1 || cur2;

//   while (cur1) {
//     cur.next =  new ListNode(cur1.val);
//     cur1 = cur1.next;
//     cur = cur.next;

//     if (resList === null) {
//       resList = cur;
//     }
//   }

//   return resList;
// };

// const l1 = new ListNode(1, new ListNode(2, new ListNode(4)));
// const l2 = new ListNode(1, new ListNode(3, new ListNode(4)));
// console.log(mergeTwoLists(l1, l2));
// console.log(mergeTwoLists(null, null));
// console.log(mergeTwoLists(null, new ListNode(0)));

//////////////////////////////////////////////////////////////////////////////
// 20210413
/*
58. Length of Last Word
https://leetcode.com/problems/length-of-last-word/  
Easy

Given a string s consists of some words separated by spaces, return the length 
of the last word in the string. If the last word does not exist, return 0.
A word is a maximal substring consisting of non-space characters only.

Example 1:  
Input: s = "Hello World"  
Output: 5

Example 2:  
Input: s = " "  
Output: 0

Constraints:  
1 <= s.length <= 104  
s consists of only English letters and spaces ' '.
*/

// My solutions

// 1
// /**
//  * @param {string} s
//  * @return {number}
//  */
//  const lengthOfLastWord = function(s) {
//   const words = s.match(/[^\s]+/mg);
//   return words ? words[words.length - 1].length : 0;
// };

// 2
// /**
//  * @param {string} s
//  * @return {number}
//  */
// const lengthOfLastWord = function(s) {
//   let word = '';
//   let prevWord = ''
//   let isSpaces = false;

//   for (let char of s) {
//     if (char === ' ') {
//       if (isSpaces === false) {
//         prevWord = word;
//         word = ''
//       }

//       isSpaces = true;
//     } else {
//       word += char;
//       isSpaces = false;
//     }
//   }

//   return word.length !== 0 ? word.length : prevWord.length;
// };

// console.log(lengthOfLastWord("Hello World")); // 5
// console.log(lengthOfLastWord(" "));  // 0
// console.log(lengthOfLastWord("a ")); // 1
// console.log(lengthOfLastWord("a aa ")); // 2
// console.log(lengthOfLastWord("b   a    ")); // 1

////////////////////////////////////////////////////////////////////////////////
// 20210412
/*
66. Plus One
https://leetcode.com/problems/plus-one/  
Easy

Given a non-empty array of decimal digits representing a non-negative integer, 
increment one to the integer.

The digits are stored such that the most significant digit is at the head of the 
list, and each element in the array contains a single digit.

You may assume the integer does not contain any leading zero, except the number 0 
itself.

Example 1:  
Input: digits = [1,2,3]  
Output: [1,2,4]  
Explanation: The array represents the integer 123.

Example 2:  
Input: digits = [4,3,2,1]  
Output: [4,3,2,2]  
Explanation: The array represents the integer 4321.

Example 3:  
Input: digits = [0]  
Output: [1]  
 
Constraints:  
1 <= digits.length <= 100  
0 <= digits[i] <= 9  
*/

// My solution:
// /**
//  * @param {number[]} digits
//  * @return {number[]}
//  */
// const plusOne = function(digits) {
//   let over = 1;

//   for (let i = digits.length - 1; i >= 0; i--) {
//     digits[i] = digits[i] + over;
//     if (digits[i] === 10) {
//       digits[i] = 0;
//       over = 1;
//     } else {
//       over = 0;
//     }
//   }

//   if (over === 1) {
//     digits.unshift(over);
//   }

//   return digits;
// };

// console.log(plusOne([1, 2, 3]));
// console.log(plusOne([4, 3, 2, 1]));
// console.log(plusOne([9, 9, 9, 9]));
// console.log(plusOne([0]));

//////////////////////////////////////////////////////////////////////////////
// 20210414
/*
53. Maximum Subarray  
https://leetcode.com/problems/maximum-subarray/  
Easy

Given an integer array nums, find the contiguous subarray (containing at least one 
number) which has the largest sum and return its sum.

Example 1:  
Input: nums = [-2,1,-3,4,-1,2,1,-5,4]  
Output: 6  
Explanation: [4,-1,2,1] has the largest sum = 6.  

Example 2:  
Input: nums = [1]  
Output: 1  

Example 3:  
Input: nums = [5,4,-1,7,8]  
Output: 23  
 
Constraints:  
1 <= nums.length <= 3 * 104  
-105 <= nums[i] <= 105  
 
Follow up: If you have figured out the O(n) solution, try coding another solution 
using the divide and conquer approach, which is more subtle.
*/

// // My solution
// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
//const maxSubArray = function(nums) {
//   let sumAll = 0;
//   let maxAll = 0;
//   let isAnyNotNegative = false;
//   let maxNegative = -Infinity;

//   for (let num of nums) {
//     sumAll += num;

//     // This logic is wrong if all nums are negative
//     if (sumAll < 0) {
//       sumAll = 0;
//     } else {
//       if (sumAll > maxAll) {
//         maxAll = sumAll;
//       }
//     }

//     if (num < 0) {
//       if (num > maxNegative) {
//         maxNegative = num;
//       }
//     } else {
//       isAnyNotNegative = true;
//     }
//   }

//   return isAnyNotNegative ? maxAll : maxNegative;
// };

// console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])); // 6
// console.log(maxSubArray([1])); // 1
// console.log(maxSubArray([5,4,-1,7,8])); // 23
// console.log(maxSubArray([0])); // 0
// console.log(maxSubArray([-1])); // -1
// console.log(maxSubArray([-2, -1])); // -1
// console.log(maxSubArray([-1, -1])); // -1
// console.log(maxSubArray([-1, -2])); // -1
// console.log(maxSubArray([-1, -1, 0])); // 0