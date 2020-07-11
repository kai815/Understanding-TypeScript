// const person: {
//   name: string
//   age: number
// } 
// const person:{
//   name: string
//   age:number
//   hobbies: string[]
//   // Tuple
//   role: [number, string]
// } = {
//   name: 'yota',
//   age:30,
//   hobbies: ['Sports', 'Cooking'],
//   role:[2, 'auther']
// }


// person.role.push('admin')
// ※TypeScriptでpushはチェックされない

// チェックされる
// person.role[1] = 10
// person.role = [0, 'admin', 'user']

// const ADMIN = 0
// const READ_ONLY = 1
// const AUTEHR = 2

enum Role {
  ADMIN, READ_ONLY, AUTHOR
}
const person = {
  name: 'yota',
  age:30,
  hobbies: ['Sports', 'Cooking'],
  role: Role.ADMIN
}

// any型は基本避けるべき
let favoriteActivities: any[]
favoriteActivities = ['Sports', 5]
console.log(person.name)

for (const hobby of person.hobbies){
  console.log(hobby.toUpperCase())
  // console.log(hobby.map)
}

if(person.role === Role.ADMIN){
  console.log("管理者ユーザ")
}