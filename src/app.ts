// type AddFn = (a:number, b:number) => number;
interface AddFn {
  (a:number, b:number): number
}
let add: AddFn

add = (n1:number, n2:number) => {
  return n1 + n2;
}

interface Named {
  readonly name?: string
  //「?」オプショナルなプロパティ（あってもなくてもいいもの）
  outputName?: string
} 

interface Greatable extends Named{
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
// extends なしでこうやってもかけるclass Person implements Greatable, Named
class Person implements Greatable {
  name?: string
  age = 30

  constructor(n?: string){
    if (n){
      this.name = n
    }
  }

  greet(phrase: string){
    if(this.name){
      console.log(phrase + ' ' + this.name)
    } else {
      console.log(phrase)
    }
  }
}

let user1: Greatable

user1 = new Person()
// user1.name = "太郎"

user1.greet("ハロー")
console.log(user1)