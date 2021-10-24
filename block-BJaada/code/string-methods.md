Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

#### Getting To Know String Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (4-5 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your own words and one sentence explain what this method does.

Example:

1. `charAt`

   - Parameter: (index) defaults to 0 - (number data type)
   - Return: character at specific index in the string (string data type)
   - Example:
     ```js
     let name = 'Arya Stark';
     name.charAt(2); //"y"
     let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance(4); // "i"
     let houseName = 'Starks';
     houseName.charAt(0); // "S"
     ```
   - `charAt` accepts a index (number data type) and return the character on that index in the string.

2. `toUpperCase`
   - Parameter: no parameter
   - Return: value of the string converted to uppercase.
    ```js 
      let myName = "Vivek Kumar";
      myName.toUpperCase();
      let schoolName='City tutorial modern education center';
      schoolName.toUpperCase();
      let town = 'patna';
      town.toUpperCase();
   ```
   `toUpperCase` accepts no any parameter
   and return the value of string in uppercase.

3. `toLowerCase`
   - Parameter: no parameter
   - Return: value of the string converted to lowercase.
   ```js 
      let myName = "Vivek Kumar";
      myName.toLowerCase();
      let schoolName='City Tutorial Modern Education Center';
      schoolName.toLowerCase();
      let town = 'KOLKATA';
      town.toLowerCase();
   ```
   `toLowerCase` accepts no any parameter
   and return the value of string in lowercase.
4. `trim`
   - Parameter: no parameter
   - Return: string stripped of whitespace from both its beginning and end.
   ```js 
      let myName = "   Vivek Kumar     ";
      myName.trim();
      let schoolName='    City Tutorial Modern Education Center';
      schoolName.trim();
      let town = 'KOLKATA      ';
      town.trim();
   ```
   `trim` accepts no any parameter
   and return the value of string stripped of whitespace from both its beginning and end.

5. `trimEnd`
   - Parameter: no parameter
   - Return: string stripped of whitespace from both its end.   
   ```js 
      let myName = "   Vivek Kumar     ";
      myName.trimEnd();
      let schoolName='    City Tutorial Modern Education Center';
      schoolName.trimEnd();
      let town = 'KOLKATA      ';
      town.trimEnd();
   ```
   `trimEnd` accepts no any parameter
   and return the value of string stripped of whitespace from its end.
   
6. `trimStart`
   - Parameter: no parameter
   - Return: string stripped of whitespace from both its beginning.   
   ```js 
      let myName = "Vivek Kumar";
      myName.trimStart();
      let schoolName='City Tutorial Modern Education Center';
      schoolName.trimStart();
      let town = 'KOLKATA';
      town.trimStart();
   ```
   `trimStart` accepts no any parameter
   and return the value of string stripped of whitespace from its beginning.

7. `concat`
   - Parameter:one or more strings,
   - Return: string containing the combined text of the strings provided

   ```js 
      let myName = "Vivek Kumar";
      let schoolName='City Tutorial Modern Education Center';
      let town = 'KOLKATA';
      myName.concat(' reads in ',schoolName,'  which is situated in ',town);
   ```
   `concat` accepts strings to concat
   and return the combined text of all strings.

8. `endsWith`
   -Parameter: character or string.
   -Parameter: length(optional):- If provided, it is used as the length of str.and search char after it if not provided  Defaults to str.length and search char   at end.
   result: true  or false 
   
   ```js
   let myName = "Vivek Kumar";
   let schoolName='City Tutorial Modern Education Center';
   let town = 'KOLKATA';
   myName.endsWith(r);
   schoolName.endsWith('n',18);
   schoolName.endsWith('n',20);
   let land = 'iceLand';
   land.endsWith('Land')

   ```
   `endsWith()` method determines whether a string ends with the characters of a specified string, returning true or false as appropriate.


9. `includes`
   -Parameter: char or string 
   -Parameter: position withing the string at which to begin searching it start searching after given position for string if not provided it consider as 0.
   -result: true  or false 
   
   ```js
   let myName = "Vivek Kumar";
   let schoolName='City Tutorial Modern Education Center';
   let town = 'Kolkata';
   myName.includes('k');
   schoolName.includes('Modern',18);
   schoolName.includes('Modern',10);

   ```
   `includes()` method determines whether a string ends with the characters of a specified string, returning true or false as appropriate.

10. `indexOf`
   -Parameter: char or string 
   -Parameter: (integer) position withing the string at which to begin searching it start searching after given position for string if not provided it consider as 0.
   -result: true  or false 

   note: 'undefined'.indexOf() will return 0, as undefined is found at position 0 in the string undefined. 'undefine'.indexOf() however will return -1, as undefined is not found in the string undefine.

      indexOf() method is case sensitive.

   Note that 0 doesn't evaluate to true and -1 doesn't evaluate to false. Therefore, when checking if a specific string exists within another string, the correct way to check would be:
```js
'Blue Whale'.indexOf('Blue') !== -1  // true
'Blue Whale'.indexOf('Bloe') !== -1  // false
```

   return: -1 if not found, 
           empty string searchValue produces strange results. With no fromIndex value, or any fromIndex value lower than the string's length, the returned value is the same as the fromIndex value:

           However, with any fromIndex value equal to or greater than the string's length, the returned value is the string's length:
   
   ```js
   let myName = "Vivek Kumar";
   let schoolName='City Tutorial Modern Education Center';
   let town ='kolkata';
   myName.indexOf('k');
   schoolName.indexOf('Modern',18); //-1
   schoolName.indexOf('Modern',10); //14

   ```
   `indexOf()` indexOf() method returns the index after the calling String object of the fitst occurrence of the specified value,starting the search at fromIndex. Returns -1 if the value is not found.

1.  `lastIndexOf`
   -Parameter: char or string 
   -Parameter: (integer) position withing the string at which to begin searching it start searching within given position for string if not provided it consider as 0.
   -result: true  or false 
   return: The index of the last char of passed string; -1 if not found. 
   -if "" empty string is searched it returns length of string
   ```js
   let myName = "Vivek Kumar";
   let schoolName='City Tutorial Modern Education Center';
   let town = 'Delhi';
   myName.lastIndexOf('k');
   schoolName.lastIndexOf('Modern',18); //14
   schoolName.lastIndexOf('Modern',10); // -1

   ```
   `lastIndexOf()` lastIndexOf() method returns the index within the calling String object of the last occurrence of the specified value, searching backwards from fromIndex.

12. `padEnd`
   -Parameter: integer- length to get resulting string 
   -Parameter: string to be padded
   -result: a string of the specified targetlength with the     padString applied at the end of the current str.

   ```js
   let myName = "Vivek Kumar";
   let schoolName='City Tutorial Modern Education Center';
   let town = 'varansi';
   myName.padEnd(15,'.');
   schoolName.padEnd(50,'***');
   town.padEnd(15,',');

   ```
    `padEnd`padEnd() method pads the current string with a given string (repeated, if needed) so that the resulting string reaches a given length. The padding is applied from the end of the current string.
13. `padStart`
   -Parameter: integer- length to get resulting string 
   -Parameter: string to be padded
   -result: a string of the specified targetlength with the     padString applied at the stat of the current str.

   retrun:A String of the specified targetLength with padString applied from the start.

   ```js
   let myName = "Vivek Kumar";
   let schoolName='City Tutorial Modern Education Center';
   let town = 'varansi';
   myName.padStart(15,'.');
   schoolName.padStart(50,'***');
   town.padStart(15,',');

   ```
    `padStart`padStart() method pads the current string with a given string (repeated, if needed) so that the resulting string reaches a given length. The padding is applied from the start of the current string.
14. `repeat`
   -Parameter: integer- no of times to repeat the string
   -result: A new string containing the specified number of copies of the given string.
   note: repeat count must be non-negative and less than infinity
   
   ```js
   let myName = "Vivek Kumar";
   let schoolName='City Tutorial Modern Education Center';
   let town = 'varansi';
   myName.repeat(2);//Vivek KumarVivek Kumar
   schoolName.repeat(-1);//rangeError
   town.repeat(0);//''

   ```    
    `repeat` repeat() method constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together.

15. `replace`
    -Parameter: string - to search for replace
    -Parameter: string - to get replaced with.
    -result: A new string with replaced value.
      ```js
   let myName = "Vivek Kumar";
   let schoolName='City Tutorial Modern Education Center';
   let town = 'varansi';
   myName.replace("Kumar", "Kr");//Vivek Kr
   schoolName.replace("Education", "Ed");//'City Tutorial Modern Ed Center'

   ```    
    `replace` The replace() method returns a new string with some or all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a function to be called for each match. If pattern is a string, only the first occurrence will be replaced.
16. `slice`
      -Parameter: integer(index) - to begin
    -Parameter(optional): integer(index) - to which end extraction
    -result:A new string containing the extracted section of the string.

   ```js
   let myName = "Vivek Kumar";
   let schoolName='City Tutorial Modern Education Center';
   let town = 'varansi';
   myName.slice(6);//Kumar  starts from 6th and goes till end
   schoolName.slice(0, 11);//'City Tutori'

   ```    
    `slice` The slice() method extracts a section of a string and returns it as a new string, without modifying the original string.


17. `split`
   -Parameter(optional): char or string
    -Parameter(optional): non-negative integer -specifying a limit on the number of substrings to be included in the array

    -result:An Array of strings, split at each point where the separator occurs in the given string.

    The simplest case is when separator is just a single character; this is used to split a delimited string.  For example, a string containing tab separated values (TSV) could be parsed by passing a tab character as the separator, like this: myString.split("\t").

    If separator contains multiple characters, that entire character sequence must be found in order to split.

   If separator is omitted or does not occur in str, the returned array contains one element consisting of the entire string.

   If separator appears at the beginning (or end) of the string, it still has the effect of splitting.  The result is an empty (i.e. zero length) string, which appears at the first (or last) position of the returned array.

   If separator is an empty string (""), str is converted to an array of each of its UTF-16 "characters".

   ```js
   let myName = "Vivek Kumar";
   let schoolName='City Tutorial Modern Education Center';
   let town = 'varansi';
   myName.split(" ");//['Vivek', 'Kumar']
    myName.split();//['Vivek Kumar']
   schoolName.split("e");//['City Tutorial Mod', 'rn Education C', 'nt', 'r']

   ```    
    `split` The split() method divides a String into an ordered list of substrings, puts these substrings into an array, and returns the array.  The division is done by searching for a pattern; where the pattern is provided as the first parameter in the method's call.

18. `substring`
    -parameter: integer(index)-first to include in the returned substring
    -parameter: the index of the first character to exclude from the returned substring.

    Return: a new string containing the specified part of given string
    ```js
   let myName = "Vivek Kumar";
   let schoolName='City Tutorial Modern Education Center';
   let town = 'varansi';
   myName.substring(0,5);//'Vivek'
   schoolName.substring(5,13);//'Tutorial'
   ```
   `substring` The substring() method returns the part of the string between the start and end indexes, or to the end of the string.