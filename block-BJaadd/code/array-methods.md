Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

## Getting To Know Array Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (2-3 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your words what this method does.
6. Does it mutate the original value or not (check https://doesitmutate.xyz)

Example:

1. `concat`

   - Parameter: n (any) number of values (number, string, boolean, array, null, undefined, object and function etc)
   - Return: a single Array consisting of by all the values passed as parameters in the same order.
   - Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.concat(4); //[1,2,3,4]
     let sentanceArray = 'A quick brown fox jumped over a lazy'.split(' ');
     sentanceArray.concat('dog').join(' '); //"A quick brown fox jumped over a lazy dog"
     let colors = ['red', 'green', 'blue'];
     colors.concat('black', 'red', 21, true); // ['red','green','blue','black', 'red', 21, true]
     ```
   - `concat` accepts n number of values and returns one array with all the values in same order. It does not change the original array.
   - No it does not mutate the original array

2. `join`
   parameter(optional): separator(comma,slash,plus,or any symbol) if nothing is passed the array elements are seperated with a comma ",", if it is empty string all elements are joined without any characters in between them. 

   returns: string  and if length is 0, empty string is returned.

   note: if an elements is undefined, null or an empty array [], it is converted to an empty string.
  ```js
  let a = ['vivek','satish','pankaj'];
  a.join();//'vivek,satish,pankaj'
  a.join(',,,')//'vivek,,,satish,,,pankaj'
  a.join(NaN)//'vivekNaNsatishNaNpankah'
  a.join(545)//'vivek545satish545pankah'
  a.join("")//viveksatishpankah
  console.log(a)//['vivek', 'satish', 'pankaj']
   ``` 
   `join` can take separator anything passed is taken as string and concatenate between each element to give all elements as single string.

   -no it does not mutate the original array
   
3. `flat`
   parameter:depth(optional)
   return: a new array with the sub-array elements concatenated into it.
   ```js
   const arr = [1, 2, [3, 4]];
   arr.flat(Infinity);
   ```
   `flat` it takes the integer or Infinty value and concatenate all the elements till passed sub-array in to new array
   -no, it does not mutate.

4. `push`
   parameter: number,string, or any value. can  take multiple values
   retrun: new array with all new values as its elements
   ```js
   let classRooms = [1,2,3];
   classRooms.push(4);
   classRooms.push(5,6,['a','b','c']);

   ```
   `push` takes any value and add it at last of arr. 
   -Yes, it mutates the array.
5. `indexOf`
   parameter: value to search in the array.
   parameter: (optional)index from where to start,if not given it consider it as ;
   
   return:the index of element if found and -1 if not found.
   ```js
   let arr=[4,58,7,6];
   arr.indexOf(58)//1
   arr.indexOf(5)//-1
   ```
   `indexOf` takes any value to search inside array and return index of it if found if not returns -1.
   -no, it does't mutate.
6. `lastIndexOf`
   parameter: value to search in the array.
   parameter: (optional)index from where to start,if not given it consider it as ;
   
   return:the last index of element if found two or more times and -1 if not found.
   ```js
   let arr=[4,58,7,6,58];
   arr.lastIndexOf(58)//4
   arr.lastIndexOf(5)//-1
   ```
   `lastIndexOf` takes any value to search inside array and return last index of it if found two or more times if not returns -1.
   -no, it does't mutate.
7. `includes`
   parameter:the value to search for.
   parameter:the index from where to start searching
   return: true or false
   ```js
   [1, 2, 3].includes(2)         // true
   let num=[1,2,44,4,585,7]
   num.includes(5)//false
   ```
   `includes` takes value to search and returns true if found else return false
   -it does't mutate the array.
8. `reverse`
   parameter: no parameter
   return: the reversed array
   ```js
   let arr=[1,2,3]
   arr.reverse()
   ```
   `reverse` it takes noting simply reverse the array 
   -yes,it mutates the array 
9. `every`
   parameter: callback function -a function to test for each elements taking three arguments.
   parameter: index(optional)
   parameter: array(optional)
   parameter: element
   retrun:true if cb returns truthy value for every element else false.
   ```js
   function isDivByFive(element){
      return element%5==0;
   }
   [5,40,80,65].every(isDivByFive);
   ```
   `every`takes cb and passed element, index, arr as argument to cb and if cd returns truthy for all elements it returns true else false.
   it does not mutate the array
10. `shift`
   parameter: takes  nothing
   retrun: new array with index 0 element removed
   ```js
   let classRooms = [1,2,3];
   classRooms.shift();//[2,3]
   ```
   `shift` removes zeroeth index element from array
   -Yes, it mutates the array.
11. `splice`
12. `find`
13. `unshift`
14. `findIndex`
15. `filter`
16. `flat`
17. `forEach`
18. `map`
19. `pop`
20. `reduce`
21. `slice`
22. `some`
