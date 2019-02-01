//get JSON file
var xmlhttp= new XXHttpRequest();

xmlhttp.onreadystatechange=function(){
  if (this.readyState ==4 && this.status==200){
    //if data is ready, and status is ok, parse it and save as mydata
    var mydata=JSON.parse(this.responseText);
    window.alert(mydata.name);
  }
};

xmlHttp.open("GET","restaurant.json",true);
xmlHttp.send();

//reloads
/*var previous=null;
var current=null;
  setInternal (function(){
  $.getJSON("restaurant.json"),function (json) {
    current=JSON stringify(json);
    if (previous && current & previous !==current){
    location reload();
    }
    previous=current;
  });
  }2000); */

var price=[];
var toppings=[];

for (i=0; i<mydata.ramen.length; i++){
  name.push(mydata.ramen[i].name);
  price.push(mydata.ramen[i].price);
  toppings.push(mydata.ramen[i].toppings);
  //$.createElement('p');
  text.createTextnode();
}
//add tax
var tax=1.04712;
var price=((mydata.ramen[i].price)*tax).toFixed(2); //fix
  document.getElementById('buyNow').innerHTML=("Your total is $"+" "+price);