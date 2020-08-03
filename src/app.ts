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