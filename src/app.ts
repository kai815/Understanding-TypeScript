const userName = "Max"
// userName = 'Mas'

// let age = 30

// age = 29

// varは関数スコープがグローバルスコープ
// let,constはブロックスコープ


// function add(a: number, b: number) {
//   let result;
//   result = a+ b
//   return result
// }

// const add = (a: number, b: number = 1) => a+b

// const printOutput:(output: string | number) => void = output => {
//   console.log(output)
// }

// // console.log(add(2,1))
// printOutput(add(2))

const button = document.querySelector('button')
if(button){
  button.addEventListener('click', event =>{
    console.log(event)
  })
}

const hobbies = ['Sports', 'Cooking']

const activeHobbies = ['Hiking']

// activeHobbies.push(hobbies[0], hobbies[1])
activeHobbies.push(...hobbies)


const person = {
  firstName:'Max',
  age: 30
}

const copiedPerson = {
  ...person
}

const add = (...numbers: number[]) => {
  return numbers.reduce((curResult, curValue)=>{
    return curResult + curValue
  }, 0)
}

const addedNumbers = add(1,2,3,4,5)
console.log(addedNumbers)

const [hobby1, hobby2, ...remainingHobbies] = hobbies
console.log(hobbies, hobby1, hobby2)

const {
  firstName, age
} = person

console.log(firstName, age)