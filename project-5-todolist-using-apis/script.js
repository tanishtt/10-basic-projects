const tasks=[];
const tasklist=document.getElementById('list');
const addtaskinput=document.getElementById('add');
const taskcounter=document.getElementById('tasks-counter');



function deletetask(taskid)
{

}
function marktaskascomplete(taskid)
{

}
function rendertask()
{

}
function addtask(task)
{
console.log(task);
}
function handleinputkeypress(e)
{
    
    
    //console.log(e.target);
    if(e.key==='Enter')
    {
        console.log(e.target.value);
        const text=e.target.value;
        if(!text)
    {
        console.log("text cannot be empty");
        return;
    }
    const task=
    {
        text:text,
        id: Date.now().toString(),
        done:false
    }
    e.target.value="";
    addtask(task);
    }
    

}
function shownotification(text)
{

}
addtaskinput.addEventListener("keyup",handleinputkeypress);

/*var now=new Date();//'January 5 2022');
console.log(now);
console.log(typeof(now));
console.log(now.toDateString());
console.log(typeof(now.toDateString()));
console.log(now.getDate());
console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDay());
console.log("aaaaaaaaaa");
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());
console.log(now.getMilliseconds());
//console.log(Date.UTC());
//console.log(now.getTime());
//console.log(now.getTimezoneOffset());*/