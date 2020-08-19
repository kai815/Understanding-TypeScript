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
//extendsで制約を付けられる
function merge<T extends object, U extends object>(objA: T, objB: U){
  return Object.assign(objA, objB)
}

console.log(merge({name: 'MAX'}, {age: 30}))

const megedObj = merge({name: 'MAX', hobbies:['Sports']}, {age: 30})
//object型としてしか認識されない型キャストを使用する手もあるが面倒
// const megedObj = merge({name: 'MAX'}, {age: 30})　as {name:string, age:number}

console.log(megedObj)

//lengthプロパティがあることを定義
interface Lengthy {
  length: number
}

//Generic型に制約
function countAndDescribe<T extends Lengthy>(element: T):[T, string]{
  let describeText = '値がありません。'
  // elementにlengthがあるかわからないのでエラーになるのでinterface
  if(element.length > 0 ){
    describeText = '値は'+ element.length + '個です。'
  }
  return [element, describeText]
}

console.log(countAndDescribe(['sports','cooking']))

//keyofでobjectのkeyであることを制約
function extractAndConver<T extends object, U extends keyof T>(obj: T, key: U){
  return 'Value' + obj[key]
}
console.log(extractAndConver({ name: 'Max' }, "name"))

//プリミティブ型のみを扱えるようにしてobjectは別のclassを作った方がよい
class Datastorage<T extends string | number | boolean> {
  private data: T[] = []

  addItem(item: T){
    this.data.push(item)
  }

  removeItem(item: T){
    
    if(this.data.indexOf(item) === -1){
      return
    }
    //プリミティブ型(string,number)だと問題なく動くが参照型(object)だと正しく動かない
    //indexOfは見つからない時に-1(配列の最後)を返す
    this.data.splice(this.data.indexOf(item), 1)
  }

  getItems(){
    return [...this.data]
  }
}

const textStorage = new Datastorage<string>()
textStorage.addItem("Data1")
textStorage.addItem("Data2")
textStorage.addItem("Data3")
textStorage.removeItem("Data3")
console.log(textStorage)

const numberStorage = new Datastorage<number>()

// const objStorage = new Datastorage<object>()
// const obj = { name: 'Max'}
// // objStorage.addItem({name: 'Max'})
// objStorage.addItem(obj)
// objStorage.addItem({name: 'Manu'})
// // objStorage.removeItem({name: 'Max'})
// objStorage.removeItem(obj)
// console.log(objStorage)