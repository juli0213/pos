'use strict';


function connect(arr)
{
  let sum= 0.00;
  let str="***<没钱赚商店>收据***"+'\n';


  for(let i=0;i<arr.length;i++)
  {
    str=str+"名称：" + arr[i].name+"，数量："+arr[i].count+arr[i].unit+"，单价：" + arr[i].price.toFixed(2)+"(元)，小计："+(arr[i].price*arr[i].count).toFixed(2)+"(元)\n";
    sum+=(arr[i].price*arr[i].count)
  }
  str=str+"----------------------\n"+"总计："+sum.toFixed(2)+"(元)\n"+"**********************";
  console.log(str);
}

function printReceipt(arr) {

  let thing = [];

  thing.push(arr[0]);
  thing[0].count = 1;
  //console.log(thing);

  for(let i=1;i<arr.length;i++)
  {
    let flag=0;
    for(let j=0;j<thing.length;j++)//和已经有的thing数组比较
    {

      if(arr[i].name == thing[j].name)
      {
        thing[j].count+=1;
        flag=1;
        break;
      }
    }

    if(flag==0)//没有找到,给一个新的
    {
      arr[i].count = 1;
      thing.push(arr[i]);
    }

  }
  connect(thing);
  //console.log(thing.length);

  //console.log('请在此实现练习要求，并改写该行代码。');
}

