'use strict';



function getSubTotal(input)
{
  for(let i=0;i<input.length;i++)
  {
    input[i].item = input[i];
    input[i].subTotal = input[i].item.price*input[i].item.count;
  }
  let cartItems = input;

  return cartItems;
}

function getTotalPrice(cartItems) {
   let totalPriceItem = {};
   totalPriceItem.cartItems = cartItems;
   totalPriceItem.totalPrice = 0;
   for(let i =0;i<totalPriceItem.cartItems.length;i++)
   {
     totalPriceItem.totalPrice+=totalPriceItem.cartItems[i].subTotal;
   }

   return totalPriceItem;
}

function connectReceipt(totalPriceItem) {

  let str="***<没钱赚商店>收据***"+'\n';


  for(let i=0;i<totalPriceItem.cartItems.length;i++)
  {
    str=str+"名称：" + totalPriceItem.cartItems[i].item.name+"，数量："+totalPriceItem.cartItems[i].item.count+totalPriceItem.cartItems[i].item.unit+"，单价：" + totalPriceItem.cartItems[i].item.price.toFixed(2)+"(元)，小计："+(totalPriceItem.cartItems[i].subTotal).toFixed(2)+"(元)\n";

  }
  str=str+"----------------------\n"+"总计："+totalPriceItem.totalPrice.toFixed(2)+"(元)\n"+"**********************";
  console.log(str);


}
function printReceipt(input) {

  connectReceipt(getTotalPrice(getSubTotal(input)));


}



