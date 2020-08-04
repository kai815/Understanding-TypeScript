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