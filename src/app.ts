class Department {
  // private: id,
  // name: string;
  private employess: string[] = []

  //これを書くだけでプロパティがセットされる
  constructor(private id: string, public name: string) {
    // this.id = id
    // this.name = n
  }

  //ダミーのパラメータをいれることで型の安全性を高める
  describe(this: Department){
    console.log(`Department: ${this.id} :${this.name}`)
  }
  addEmployee(employee: string) {
    // validation etc
    this.employess.push(employee)
  }

  printEmployeeInformation(){
    console.log(this.employess.length)
    console.log(this.employess)
  }
}

const accounting = new Department("d1", "Accounting")

accounting.addEmployee('Max')
accounting.addEmployee('Tom')

//下記のように追加されてしまうのは問題
// (例：addEmployeeにvalidation記述してたらスルーされる)
// accounting.employess[2] = 'Anna'

accounting.describe()
accounting.printEmployeeInformation()

// const accountingCopy = { 
//   name: "COPY",
//   describe: accounting.describe 
// }

// accountingCopy.describe()