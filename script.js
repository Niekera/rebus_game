
var input1=document.getElementById("task1"),
    res=document.getElementById("result"),
    button=document.getElementById("button"),
    counter=0
    button.addEventListener('click',function add(){
    if(input1.value=='Github'){
    counter=counter+1
    res.innerHTML='Your result'+' ' + counter
    
}

    } )
    
