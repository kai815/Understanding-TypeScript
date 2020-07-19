class Department {
  name: string;

  constructor(n: string) {
    this.name = n
  }

  //ダミーのパラメータをいれることで型の安全性を高める
  describe(this: Department){
    console.log('Department: ' + this.name)
  }
}

const accounting = new Department("Accounting")
console.log(accounting)
accounting.describe()

const accountingCopy = { 
  name: "COPY",
  describe: accounting.describe 
}

accountingCopy.describe()