'use strict';

function printReceipt(arr) {
  let sum= 0.00;
  let str="***<没钱赚商店>收据***"+'\n';


for(let i=0;i<arr.length;i++)
{
  str=str+"名称：" + arr[i].name+"，数量："+arr[i].count+arr[i].unit+"，单价：" + arr[i].price.toFixed(2)+"(元)，小计："+(arr[i].price*arr[i].count).toFixed(2)+"(元)\n";
  sum+=(arr[i].price*arr[i].count)
}
str=str+"----------------------\n"+"总计："+sum.toFixed(2)+"(元)\n"+"**********************";
  console.log(str);

  //console.log('请在此实现练习要求，并改写该行代码。');
}
