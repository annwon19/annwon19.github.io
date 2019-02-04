var ramenName=[];
var ramenPrice=[];
var ramenToppings=[];
var total=[];
var r0name;
var r0price;
var r0toppings;


//get JSON file
var xmlhttp= new XXHttpRequest();
xmlhttp.onreadystatechange=function(){
  if (this.readyState ==4 && this.status==200){
    //if data is ready, and status is ok, parse it and save as mydata
    var mydata=JSON.parse(this.responseText);
  for (var i=0; i<mydata.ramen.length;+i++){
  ramennName.push(mydata.ramen[i].name);
  ramenPrice.push(mydata.ramen[i].price);
  ramenToppings.push(mydata.ramen[i].toppings);
    //window.alert(mydata.name);
  }

r0price=mydata.r[0].price;
document.getElementById('r1').innerHTML="$"+mydata.r[0].price+"";
}
  };
  
xmlhttp.open("GET","restaurant.json",true);
xmlhttp.send();

var items[];
function totalItems(){
var list= items.push("orderList")
location.href="page2.html";
}

//reloads
var previous=null;
var current=null;
  setInternal (function(){
    $.getJSON("restaurant.json"), function(json){
      current=JSON stringify(json);
      if (previous && current && previous !==current){
      location.reload();
    }
    previous==current;
  });
  },2000);