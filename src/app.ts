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

// ---
//デコレータはクラスの定義時に実行される

function Log(target: any, propertyName: string | Symbol){
  console.log("Property デコレータ")
  console.log(target, propertyName)
}
function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log("Accessor デコレータ")
  console.log(target)
  console.log(name)
  console.log(descriptor)
}
function Log3(target: any, name: string | Symbol, descriptor: PropertyDescriptor){
  console.log("Method デコレータ")
  console.log(target)
  console.log(name)
  console.log(descriptor)
}
function Log4(target: any, name: string | Symbol, position: number){
  console.log("Parameter デコレータ")
  console.log(target)
  console.log(name)
  console.log(position)
}

class Product{
  @Log //titleプロパティにデコレータ
  title: string
  private _price: number

  @Log2 //priceアクセサーにデコレータ
  set price(val: number){
    if(val > 0){
      this._price = val
    } else {
      throw new Error('不正な価格です - 0以下は設定できません')
    }
  }

  constructor(t: string, p: number){
    this.title = t
    this._price = p
  }

  @Log3 //methodにデコレータ
  //パラメータにデコレータ
  getPriceWithTax(@Log4 tax: number){
    return this._price * (1 + tax)
  }
}

const p1 = new Product('book1', 100)
const p2 = new Product('book2', 200)