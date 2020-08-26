//デコレーターは大文字から始まることが多い
//デコレーターはクラスが定義された時に実行される
function Logger(logString: string){
  console.log("LOGGER ファクトリ")
  //実行される関数を返す
  return function(constructor: Function){
    console.log(logString)
    console.log(constructor)
  }
}
//デコレータはユーティリティ的な用途に最適
function WithTemplate(template: string, hookId: string){
  console.log("TEMPLATE ファクトリ")
  //_で引数を認識しているけど使わない
  // return function(_: Function){
  return function(constructor: any){
    console.log("テンプレートを表示")
    const hookEl = document.getElementById(hookId)
    const p = new constructor()
    if(hookEl){
      hookEl.innerHTML = template
      hookEl.querySelector("h1")!.textContent = p.name
    }
  }
}
//デコレータを識別
//引数を渡せる
// @Logger("ログ出力中 - PERSON")
//デコレータの作成は上から順に、デコレータ関数は下から順に実行
@Logger("ログ出力中")
@WithTemplate("<h1>Pesronオブジェクト</h1>", "app")
class Person {
  name = 'Max'

  constructor(){
    console.log("Personオブジェクトを作成中")
  }
}

const person = new Person()

console.log(person)