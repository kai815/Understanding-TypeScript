//デコレーターは大文字から始まることが多い
//デコレーターはクラスが定義された時に実行される
function Logger(constructor: Function){
  console.log("ログ出力中・・・・")
  console.log(constructor)
}
//デコレータを識別
@Logger
class Person {
  name = 'Max'

  constructor(){
    console.log("Personオブジェクトを作成中")
  }
}

const person = new Person()

console.log(person)