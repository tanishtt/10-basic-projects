var tasks=[];
const tasklist=document.getElementById('list');
const addtaskinput=document.getElementById('add');
const taskcounter=document.getElementById('tasks-counter');



function deletetask(taskid)
{
var newtasks=tasks.filter(function(task)
{
    return task.id!=taskid;
});




console.log(tasks);
console.log(newtasks);
tasks=newtasks;
rendertask();
shownotification("deleted task succesfully");
//console.log(tasks);
}
function toggletask(taskid)
{
for(var i=0;i<tasks.length;i++)
{
    if(tasks[i].id==taskid)
    {
        tasks[i].done=!tasks[i].done;
        rendertask();
        shownotification("task toggled succesfully");
        return;
    }
}
shownotification("could not toggled the task");
}
////////////////////////////////////////////////////////



function addtasktoDOM(task)
{
    
const li=document.createElement("li");
console.log("...........",li);
li.innerHTML=`<input type="checkbox"   id="${task.id}"   ${task.done? "checked":""}   class="custom-checkbox">
              <label for=${task.id}>${task.text}</label>
              <img src="images/deletebutton.png"  class="delete" data-id="${task.id}">`;
console.log("...........",li);
tasklist.append(li);
}


//////////////////////////////////////////////////////


function rendertask()
{
tasklist.innerHTML="";
for(var i=0;i<tasks.length;i++)
{
    addtasktoDOM(tasks[i]);
}
taskcounter.innerHTML=tasks.length;
}



function addtask(task)
{
    if(task)
    {
        tasks.push(task);
        rendertask();
        shownotification("added task succesfully");
    }
//console.log(tasks);
}
function handleinputkeypress(e)
{
    
    
    //console.log(e.target);
    if(e.key==='Enter')
    {
        //console.log(e.target.value);
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
alert(text);
}

function handleclickeventlistener(e)
{
const target=e.target;

if(target.className=='delete')
{
const taskid=target.dataset.id;
//console.log(taskid);
deletetask(taskid);
}
else if(target.className=='custom-checkbox')
{
const taskid=target.id;
toggletask(taskid);
}
}
addtaskinput.addEventListener("keypress",handleinputkeypress);
document.addEventListener("click",handleclickeventlistener);
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