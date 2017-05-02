'use strict';
function connect(arr,sum,foreSum)
{

  let str="***<没钱赚商店>收据***"+'\n';
  let fore=foreSum-sum;

  for(let i=0;i<arr.length;i++)
  {
    if(arr[i].count>0)
    {
      str=str
            +"名称：" + arr[i].name
            +"，数量："+arr[i].count+arr[i].unit
            +"，单价：" + arr[i].price.toFixed(2)
            +"(元)，小计："+(arr[i].itemprice).toFixed(2)+"(元)\n";

    }

  }
  str=str+"----------------------\n"
          +"总计："+sum.toFixed(2)+"(元)\n"
          +"节省："+fore.toFixed(2)+"(元)\n"
          +"**********************";
  console.log(str);
}

function getBarcode(inputs) {
  let receipt = loadAllItems();//得到商品内容列表

  for (let j=0;j<receipt.length;j++)//商品中添加凑couunt属性
  {
    receipt[j].count = 0;

  }

  for(let i=0;i<inputs.length;i++)//购买商品item处理
  {
    let num = inputs[i].split("-");
    for(let k=0;k<receipt.length;k++)//商品列表中匹配item
    {
      if(num[0]==receipt[k].barcode)//匹配成功
      {
        if(num.length==2)
        {
          receipt[k].count+=Number(num[1]);
        }
        else
        {
          receipt[k].count++;
        }
      }
    }
  }
  return receipt;
}

function ifDiscount(inputs) {
  let promotion =loadPromotions();
  for(let i = 0;i<promotion[0].barcodes.length;i++)
  {
    if(inputs == promotion[0].barcodes[i])
    {
      return 1;
    }

  }
  return 0;
}

function getItemPrice(inputs) {
  for(let i=0;i<inputs.length;i++)
  {
    if(ifDiscount(inputs[i].barcode)==1)
    {
      let a=((Math.floor(inputs[i].count/3))*2+inputs[i].count%3);
      //console.log(a+"--");
      inputs[i].itemprice = a*inputs[i].price;

      //console.log("-"+inputs[i].price);
    }
    else
    {
      //console.log("ee-");
      inputs[i].itemprice = inputs[i].count*inputs[i].price;
    }

  }
  //console.log(inputs[].itemprice);
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

function getForePrice(inputs) {
  let sum = 0;
  for(let i=0;i<inputs.length;i++)
  {
    sum+=(inputs[i].price*inputs[i].count);
  }
  return sum;//原价

}

function printReceipt(inputs) {
  let AllItem = getBarcode(inputs);
  AllItem=getItemPrice(AllItem);

  let sum =  getTotalPrice(AllItem);
  let foreSum = getForePrice(AllItem);
  connect(AllItem,sum,foreSum);

}
