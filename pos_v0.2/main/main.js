'use strict';


function connect(arr,sum)
{

  let str="***<没钱赚商店>收据***"+'\n';


  for(let i=0;i<arr.length;i++)
  {
    if(arr[i].count>0)
    {
      str=str+"名称：" + arr[i].name+"，数量："+arr[i].count+arr[i].unit+"，单价：" + arr[i].price.toFixed(2)+"(元)，小计："+(arr[i].price*arr[i].count).toFixed(2)+"(元)\n";

    }

  }
  str=str+"----------------------\n"+"总计："+sum.toFixed(2)+"(元)\n"+"**********************";
  console.log(str);
}

function getBarcode(inputs) {
  //inputs 是barcode数组
  let receipt = loadAllItems();

  for(let i=0;i<receipt.length;i++)
  {
    receipt[i].count = 0;
  }//添加count属性
  for(let i=0;i<inputs.length;i++)
  {
    for(let j=0;j<receipt.length;j++)
    {
      if(inputs[i] == receipt[j].barcode)//匹配成功
      {

        receipt[j].count++;
        break;
      }

    }
  }
return receipt;
}

function getItemPrice(inputs) {
  for(let i=0;i<inputs.length;i++)
  {
    inputs[i].itemprice = inputs[i].count*inputs[i].price;
  }
  return inputs;
}

function getTotalPrice(inputs) {
  let sum = 0;
  for(let i=0;i<inputs.length;i++)
  {
    sum+=inputs[i].itemprice;
  }
  return sum;
}

function printReceipt(inputs) {
  let AllItem = getBarcode(inputs);
  AllItem=getItemPrice(AllItem);

  let sum =  getTotalPrice(AllItem);

  connect(AllItem,sum);

}
