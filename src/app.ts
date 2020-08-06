type Admin = {
  name: string
  privileges: string[]
}

type Employee = {
  name: string
  startDate: Date
}

type ElevatedEmployee = Admin & Employee
//interfaceでも同じことができる

const e1: ElevatedEmployee = {
  name: "Max",
  privileges: ["create-server"],
  startDate: new Date
}

type Combinable = string | number
type Numeric = number | boolean

type Universal = Combinable & Numeric

//number型
const n1: Universal = 2

function add(a: Combinable, b: Combinable){
  //型ガード
  if(typeof a === 'string' || typeof b === 'string'){
    return a.toString() + b.toString()
  }
  return a + b
}

type UnknownEmployee = Employee | Admin

function printEmployeeInfomation(emp: UnknownEmployee){
  console.log(emp.name)
  //in演算子で型ガード
  if('privileges' in emp){
    console.log("Privileges: "+ emp.privileges)
  }

  if('startDate' in emp){
    console.log("startDate: "+ emp.startDate)
  }
}
printEmployeeInfomation(e1)
printEmployeeInfomation({name: 'Manu', startDate: new Date()})

class Car {
  drive(){
    console.log("運転中・・・・")
  }
}

class Truck {
  drive(){
    console.log("トラックを運転中・・・・")
  }
  loadCargo(amount: number){
    console.log(`荷物を載せています.....${amount}`)
  }
}

type Vehicle = Car | Truck

const v1 = new Car()
const v2 = new Truck()

function useVehicle(vehicle: Vehicle){
  vehicle.drive()
  // if('loadCargo' in vehicle){
  //   vehicle.loadCargo(1000)
  // }
  // インスタンスオブで型ガード
  if(vehicle instanceof Truck){
    vehicle.loadCargo(1000)
  }
}
useVehicle(v1)
useVehicle(v2)

interface Bird {
  //型を判別するため共通のプロパティ
  type: 'bird'
  flyingSpeed: number
}

interface Horse {
  //型を判別するため共通のプロパティ
  type: 'horse'
  runningSpeed: number
}

type Animal = Bird | Horse

function moveAnimal(animal: Animal){
  let speed
  switch(animal.type){
    case 'bird':
      speed = animal.flyingSpeed
      break
    case 'horse':
      speed = animal.runningSpeed
  }
  console.log('移動速度：' + speed)
}

moveAnimal({type: 'bird', flyingSpeed: 10})

//HTMLParagraphElement(かnull)まで型推論してくれる
// const paragraph = document.querySelector('p')

// HTMLElement(かnull)までの型推論
// TSはHTMLの解析まではできない
const paragraph = document.getElementById('message-output')

// 型キャストの1つめのやりかた !はnullじゃないことを明示
// const userInputElement = <HTMLInputElement>document.getElementById("user-input")!

// 型キャストの2つめのやりかた
// const userInputElement = document.getElementById("user-input") as HTMLInputElement

const userInputElement = document.getElementById("user-input")

if(userInputElement){
  (userInputElement as HTMLInputElement).value = "こんにちわ"
}