interface Greatable {
  name: string
  // age: number

  greet(phrase: string) : void
}
//インターフェイスはオブジェクト型のみに使える
//複数のクラスに使用可能

// 下記のようにもかける
// type Person = {
//   name: string
//   age: number

//   greet(phrase: string) : void
// }

// クラスにインターフェイスは複数使える
class Person implements Greatable {
  name: string
  age = 30

  constructor(n: string){
    this.name = n
  }

  greet(phrase: string){
    console.log(phrase + ' ' + this.name)
  }
}

let user1: Greatable

user1 = new Person('Max')

user1.greet("ハロー")
console.log(user1)