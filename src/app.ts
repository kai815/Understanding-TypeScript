class Department {
  // private: id,
  // name: string;
  private employess: string[] = []

  //これを書くだけでプロパティがセットされる
  //readonlyで変更できなくする。コードの意図の明確化にも
  constructor(private readonly id: string, public name: string) {
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

class ITDepartment extends Department {
  admins: string[]
  constructor(id: string, admins: string[]) {
    //ベースクラスのconstructorを呼び出す
    super(id, 'IT')
    this.admins = admins
  }
}

class AccountingDepartment extends Department {
  constructor(id: string, private reports: string[]) {
    //ベースクラスのconstructorを呼び出す
    super(id, 'IT')
  }

  addReports(text: string){
    this.reports.push(text)
  }

  printReports(){
    console.log(this.reports)
  }
}

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
accounting.addReports("Something")
accounting.printReports()
// const accountingCopy = { 
//   name: "COPY",
//   describe: accounting.describe 
// }

// accountingCopy.describe()