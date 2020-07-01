// const person: {
//   name: string
//   age: number
// } 
// const person:{
//   name: string
//   age:number
//   hobbies: string[]
//   // Tuple
//   role: [number, string]
// } = {
//   name: 'yota',
//   age:30,
//   hobbies: ['Sports', 'Cooking'],
//   role:[2, 'auther']
// }
// person.role.push('admin')
// ※TypeScriptでpushはチェックされない
// チェックされる
// person.role[1] = 10
// person.role = [0, 'admin', 'user']
// const ADMIN = 0
// const READ_ONLY = 1
// const AUTEHR = 2
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
var person = {
    name: 'yota',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
};
var favoriteActivities;
favoriteActivities = ['Sports'];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
    // console.log(hobby.map)
}
if (person.role === Role.ADMIN) {
    console.log("管理者ユーザ");
}
