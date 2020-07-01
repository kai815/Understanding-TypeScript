// const person: {
//   name: string
//   age: number
// } 
const person:{
  name: string
  age:number
  hobbies: string[]
  // Tuple
  role: [number, string]
} = {
  name: 'yota',
  age:30,
  hobbies: ['Sports', 'Cooking'],
  role:[2, 'auther']
}


// person.role.push('admin')
// ※TypeScriptでpushはチェックされない

// チェックされる
// person.role[1] = 10
// person.role = [0, 'admin', 'user']

let favoriteActivities: string[]
favoriteActivities = ['Sports']
console.log(person.name)

for (const hobby of person.hobbies){
  console.log(hobby.toUpperCase())
  // console.log(hobby.map)
}
