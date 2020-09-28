import 'reflect-metadata';
import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';
//ブラウザでimportをする時は.js必要 webpackなどを使う時は拡張子不要
import { ProjectInput } from "./components/project-input";
import { ProjectList } from "./components/project-list";

import _ from 'lodash';
import { Product } from "./product.model"

const products = [
  {title:'商品1', price:100},
  {title:'商品2', price:200}
]
const newProd = new Product('', -100)
validate(newProd).then(errors =>{
  if(errors.length > 0){
    console.log("バリデーションエラー！！")
    console.log(errors)
  }else{
    console.log(newProd.getInformation)
  }
})
const loadedProducts = plainToClass(Product, products)
// const loadedProducts = products.map(product =>{
//   return new Product(product.title, product.price)
// })
// const p1 = new Product('商品',100)
// console.log(p1.getInformation())
for (const prod of loadedProducts){
  console.log(prod.getInformation())
}

console.log(_.shuffle([1,2,3]))
declare var GLOBAL:string
console.log(GLOBAL)
new ProjectInput();
new ProjectList("active");
new ProjectList("finished");
