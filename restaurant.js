var name=[];
var price=[];
var toppings=[];
var rname;
var rprice;
var rtoppings;


//get JSON file
var xmlhttp= new XXHttpRequest();
xmlhttp.onreadystatechange=function(){
  if (this.readyState ==4 && this.status==200){
    //if data is ready, and status is ok, parse it and save as mydata
    var mydata=JSON.parse(this.responseText);
  for (var i=0; i<mydata.ramen.length;+i++){
  name.push(mydata.ramen[i].name);
  price.push(mydata.ramen[i].price);
  toppings.push(mydata.ramen[i].toppings);
    //window.alert(mydata.name);
  }


rname=mydata.r[0].price.toppings;
document.getElementById('r1').innerHTML="$"+mydata.r[0].price.toppings+"";

}
  };
  
xmlhttp.open("GET","restaurant.json",true);
xmlhttp.send();

var items[];

function buyNow(){
//var list= items.push("totalOrder")
location.href="page2.html"
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
  