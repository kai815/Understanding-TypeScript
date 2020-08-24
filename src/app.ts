//デコレーターは大文字から始まることが多い
//デコレーターはクラスが定義された時に実行される
function Logger(logString: string){
  //実行される関数を返す
  return function(constructor: Function){
    console.log(logString)
    console.log(constructor)
  }
}
//デコレータを識別
//引数を渡せる
@Logger("ログ出力中 - PERSON")
class Person {
  name = 'Max'

  constructor(){
    console.log("Personオブジェクトを作成中")
  }
}

const person = new Person()

console.log(person)