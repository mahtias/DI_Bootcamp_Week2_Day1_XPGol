//1- Create 2 variables. The values should be strings. For example:
let str1 = "Opera";
let str2 = "Mini";

//2- Slice out and swap the first 2 characters of the two strings from part 1.
let str1Copy = str1;
let twoString1 = str1.substring(0, 2);
let twoString2 = str2.substring(0, 2);
str1 = str1.replace(twoString1, str2.substring(0, 2));
str2 = str2.replace(twoString2, str1Copy.substring(0, 2));

//3-  Create a third variable where the value is the concatenation of the two strings from the part 1
//(separated by a space).
str3 = twoString1 + " " + twoString2;
console.log(str3);