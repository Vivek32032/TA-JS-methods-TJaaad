let persons = [
  { name: 'John', grade: 8, sex: 'M' },
  { name: 'Sarah', grade: 12, sex: 'F' },
  { name: 'Bob', grade: 16, sex: 'M' },
  { name: 'Johnny', grade: 2, sex: 'M' },
  { name: 'Ethan', grade: 4, sex: 'M' },
  { name: 'Paula', grade: 18, sex: 'F' },
  { name: 'Donald', grade: 5, sex: 'M' },
  { name: 'Jennifer', grade: 13, sex: 'F' },
  { name: 'Courtney', grade: 15, sex: 'F' },
  { name: 'Jane', grade: 9, sex: 'F' },
  { name: 'John', grade: 17, sex: 'M' },
  { name: 'Arya', grade: 14, sex: 'F' },
];

// Create an array peopleName and store value of name key from persons array
   let peopleName = [...persons].map((m)=> m.name)
// Create an array peopleGrade and store the value of grade key from persons array
   let peopleGrade = [...persons].map((m)=> m.grade)
// Create an array peopleSex and store the value of sex key from persons array
   let peopleSex = [...persons].map((m)=> m.sex)
// Log the filtered named of people in peopleName that starts with 'J' or 'P'
   console.log(peopleName.filter((a)=>a.startsWith('J')||a.startsWith('P')))
// Log the length of filtered named of people in peopleName that starts with 'A' and 'C'
   console.log(peopleName.filter((a)=>a.startsWith('A')||a.startsWith('C')).length)
// Log all the filtered male ('M') in persons array
   console.log(persons.filter((s)=> s.sex === "M"))
// Log all the filtered female ('F') in persons array
   console.log(persons.filter((s)=> s.sex === "F"))
// Log all the filtered female ('F') whose name starts with 'C' or 'J' in persons array
   let femaleWithAorC = persons.filter((s)=> s.sex === "F").filter((a)=>a.name.startsWith('J')||a.name.startsWith('C'))
   console.log(femaleWithAorC);
// Log all the even numbers from peopleGrade array
   console.log(peopleGrade.filter((even)=> even%2===0))
// Find the first name that starts with 'J' in persons array and log the object
   console.log(persons.filter((pe) => pe.name[0] === "J")[0])
// Find the first name that starts with 'P' in persons array and log the object
   console.log(persons.filter((pe) => pe.name[0] === "P")[0]) 
// Find the first name that starts with 'J', grade is greater than 10 and is a female
   console.log(persons.filter((pe) => pe.name[0] === "J" && pe.grade > 10 && pe.sex === "F"))
// Filter all the female from persons array and store in femalePersons array
   let femalePersons = persons.filter((s)=> s.sex === "F")
// Filter all the male from persons array and store in malePersons array
   let malePersons = persons.filter((s)=> s.sex === "M")
// Find the sum of all grades and store in gradeTotal
   let gradeTotal =  peopleGrade.reduce((a,b)=> a+b,0)
// Find the average grade
   console.log(gradeTotal/persons.length)
// Find the average grade of male
   let avgGradeM = malePersons.reduce((a,b)=> a+ b.grade,0)/malePersons.length
// Find the average grade of female
   let avgGradeM = femalePersons.map((a)=>a.grade).reduce((a,b)=> a+ b,0)/femalePersons.length
// Find the highest grade
   let highestGrade =[...peopleGrade].sort((a,b)=> b-a)[0]
// Find the highest grade in male
   console.log([...malePersons].map((a)=> a.grade).sort((a,b)=> b-a)[0])
// Find the highest grade in female
   console.log([...femalePersons].map((a)=> a.grade).sort((a,b)=> b-a)[0])
// Find the highest grade for people whose name starts with 'J' or 'P'
   console.log(persons.filter((a)=>a.name[0]==='J'||a.name[0]==='P').sort((a,b)=>b.grade-a.grade)[0]) 
// Sort the peopleGrade in ascending order and log the value of peopleGrade. Notice did the elements of peopleGrade got changed?
   console.log(peopleGrade.sort((a,b)=> a-b)) // yes elements of peopleGrade got changed
// Sort the peopleGrade in descending order
   console.log(peopleGrade.sort((a,b)=> b-a)) 
// Sort the peopleGrade in descending order this time you have to make sure you don't mutate the original array
   console.log([...peopleGrade].sort((a,b)=> b-a)) 
// Sort the array peopelName in ascending `ABCD..Za....z`
   console.log(peopleName.sort()) 
// Sort the array peopelName in ascending `ABCD..Za....z`. Make sure not to mutate the array
   console.log([...peopleName].sort()) 
