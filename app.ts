let userInput: unknown
let userName: string

userInput = 5
userInput = 'Max'

if(typeof userInput === 'string'){
  userName = userInput
}
//anyだとエラーにならないがunknownだとなるunkownは型チェックは行う
// userName = userInput

//"絶対"に値を返すことはない
function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code }
}

const result = generateError('エラーが発生しました', 500)
console.log(result)