var buttons=document.getElementsByClassName("button");
var display=document.getElementById("display");
var oper1=null;
var oper2=null;
var oper=null;

for( var i=0;i<buttons.length;i++)
{
     buttons[i].addEventListener("click",function(){
         var value=this.getAttribute("data-value");
         if(value=="+")
         {
             oper1=parseFloat(display.innerText);
             oper="+";
             display.innerText="";
         }
         else if(value=="-")
         {
             oper1=parseFloat(display.innerText);
             oper="-";
             display.innerText="";
         }
         else if(value=="*")
         {
             oper1=parseFloat(display.innerText);
             oper="*";
             display.innerText="";
         }
         else if(value=="/")
         {
             oper1=parseFloat(display.innerText);
             oper="/";
             display.innerText="";
         }
         else if(value=="%")
         {
             oper1=parseFloat(display.innerText);
             oper="%";
             display.innerText="";
         }
         else if(value=="=")
         {
             //var a;
            oper2=parseFloat(display.innerText);
            //a=oper2;
            var res=eval(oper1+""+oper+""+oper2);
            display.innerText=res;
         }
         else if(value=="AC"){
            display.innerText="";

         }
         else{
             display.innerText+=value;
         }
     });
}