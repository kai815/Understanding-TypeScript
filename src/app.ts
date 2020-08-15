// ジェネリック型とは他の特定の方と統合された型
//追加の型情報を提供できる型
// 例1:Array<string>
// 例2:Array<number>

//string[]
// const names = ['Max', 'Manuel']

//any[]
// const names = []


// const names: Array<string> = [] //string[]
// // names[0].split(' ')

// const promise:Promise<string> = new Promise((resolve, reject) =>{
//   setTimeout(() => {
//     resolve('終わりました！')
//     reject('error')
//   },2000)
// })

// promise.then(data =>{
//   console.log(data)
//   // data.split(' ')
// })

// function merge(objA: object, objB: object){
//   return Object.assign(objA, objB)
// }

//異なる型(TとU)を渡すことを明示している
function merge<T, U>(objA: T, objB: U){
  return Object.assign(objA, objB)
}

console.log(merge({name: 'MAX'}, {age: 30}))

const megedObj = merge({name: 'MAX', hobbies:['Sports']}, {age: 30})
//object型としてしか認識されない型キャストを使用する手もあるが面倒
// const megedObj = merge({name: 'MAX'}, {age: 30})　as {name:string, age:number}

console.log(megedObj.age)