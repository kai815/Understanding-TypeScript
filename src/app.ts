abstract class Department {
//abstractクラスはインスタンス化できない（サブクラスはできる）
  static fiscalYear = 2020
  // private: id,
  // name: string;
  protected employess: string[] = []
  static createEmloyee(name: string){
    return { name: name }
  }
  //これを書くだけでプロパティがセットされる
  //readonlyで変更できなくする。コードの意図の明確化にも
  constructor(readonly id: string, public name: string) {
    // this.id = id
    // this.name = n
  }

  // //ダミーのパラメータをいれることで型の安全性を高める
  // describe(this: Department){
  //   console.log(`Department: ${this.id} :${this.name}`)
  // }
  // 抽象メソッドにすることでサブクラスで中身を実装することを強制
  abstract describe(this: Department): void

  addEmployee(employee: string) {
    // validation etc
    this.employess.push(employee)
  }

  printEmployeeInformation(){
    console.log(this.employess.length)
    console.log(this.employess)
  }
}

class ITDepartment extends Department {
  admins: string[]
  constructor(id: string, admins: string[]) {
    //ベースクラスのconstructorを呼び出す
    super(id, 'IT')
    this.admins = admins
  }
  describe () {
    console.log("IT部門-ID:"+ this.id)
  }
}

class AccountingDepartment extends Department {
  private lastReport: string

  get mostRecentReport(){
    if(this.lastReport){
      return this.lastReport
    }
    throw new Error('レポートが見つかりません。')
  }

  set mostRecentReport(value: string){
    if(!value){
      throw new Error('正しい値を設定してください。')
    }
    this.addReports(value)
  }
  constructor(id: string, private reports: string[]) {
    //ベースクラスのconstructorを呼び出す
    super(id, 'IT')
    this.lastReport = reports[0]
  }

  addReports(text: string){
    this.reports.push(text)
    this.lastReport = text
  }

  printReports(){
    console.log(this.reports)
  }

  addEmployee(employee: string){
    if(employee ==="Max"){
      return
    }
    this.employess.push(employee)
  }
  describe () {
    console.log("会見部門-ID:" + this.id)
  }
}

const employee1 = Department.createEmloyee('テスト')
console.log(employee1, Department.fiscalYear)

const it = new ITDepartment("d1", ["Max"])

it.addEmployee('Max')
it.addEmployee('Tom')

//下記のように追加されてしまうのは問題
// (例：addEmployeeにvalidation記述してたらスルーされる)
// accounting.employess[2] = 'Anna'

it.describe()
it.printEmployeeInformation()
console.log(it)

const accounting = new AccountingDepartment('d2', [])

// accounting.mostRecentReport = ""
accounting.mostRecentReport = "テストのレポート"

// console.log(accounting.mostRecentReport)
accounting.addReports("Something")
console.log(accounting.mostRecentReport)
// accounting.printReports()

accounting.addEmployee('太郎')
accounting.addEmployee('Max')
// accounting.printEmployeeInformation()
accounting.describe()
// const accountingCopy = { 
//   name: "COPY",
//   describe: accounting.describe 
// }

// accountingCopy.describe()