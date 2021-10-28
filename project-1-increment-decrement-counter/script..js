

//increment
var count;
document.querySelector(".btn-minus").setAttribute("disabled","disabled");
document.querySelector(".btn-plus").addEventListener("click",function(){
count=document.querySelector("#counter").value;
count++;
document.querySelector("#counter").value=count;
if(count>0)
{
    document.querySelector(".btn-minus").removeAttribute("disabled");
    document.querySelector(".btn-minus").classList.remove("disabled");
}
});



//reset
document.querySelector(".reset-to-zero").addEventListener("click",function(){
count=0;
document.querySelector("#counter").value=count;
document.querySelector(".btn-minus").setAttribute("disabled","disabled");
});


//document.querySelector(".btn-minus").setAttribute("disabled","disabled");
//decrement
document.querySelector(".btn-minus").addEventListener("click",function(){
count=document.querySelector("#counter").value;
count--;
document.querySelector("#counter").value=count;
if(count==0)
{
    document.querySelector(".btn-minus").setAttribute("disabled","disabled");
}
});
