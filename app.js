const display=document.getElementById('res')
const equal=document.querySelector('.equal')
const btn=document.querySelector('.num')
let flag=0

function displaybutton(n){
    if(flag==1){
        display.value="n"
        display.value=n
        flag=0
    }
    else
    display.value+=n;
}

function cleardisplay(){
    display.value=''
}

function deletedisplay(){
    display.value=display.value.slice(0,-1);
}

function calculate(){
    try{
        display.value=eval(display.value)
        flag=1
    }
    catch(e){
        display.value='error'
    }
}

