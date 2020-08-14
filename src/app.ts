// ジェネリック型とは他の特定の方と統合された型
//追加の型情報を提供できる型
// 例1:Array<string>
// 例2:Array<number>

//string[]
// const names = ['Max', 'Manuel']

//any[]
// const names = []


const names: Array<string> = [] //string[]
// names[0].split(' ')

const promise:Promise<string> = new Promise((resolve, reject) =>{
  setTimeout(() => {
    resolve('終わりました！')
    reject('error')
  },2000)
})

promise.then(data =>{
  console.log(data)
  // data.split(' ')
})