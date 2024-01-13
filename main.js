// // 1. Bir ədədi əks etdirən JavaScript funksiyasını yazın.
// // Nümunə x = 32243;
// // Gözlənilən Çıxış : 34223

// function fermanGotdu(n)
// {
//     n = n + "";

//     return n.split("").reverse().join("");
// }

// console.log(fermanGotdu(123456))


// // 1. Burada göndər düyməsinə malik nümunə html faylı. İndi isə abzas mətninin stilini javascript kodu vasitəsilə dəyişdirin.
// function xiyarFerman() {
// //font styles added by JS:
//  text.style.fontSize = "14pt";
//  text.style.fontFamily = "Comic Sans MS";
//  text.style.color = "green";
// }




// 3.first ve last deyerleri ekrana desin nem neynesinnn
function petuxFerman(){
  var x=document.getElementById("form1");
  for (var i=0;i<x.length;i++)
  {
   if (x.elements[i].value!='Submit')
    {  
      console.log(x.elements[i].value);
     }  
   }
}