const display=document.getElementById('countDisplay');
const decrease=document.getElementById('decreaseBtn');
const increase=document.getElementById('increaseBtn');
const reset=document.getElementById('resetBtn');

let count=0;

decrease.addEventListener('click',function(){
    count-=1;
    display.textContent=count;
});

increase.addEventListener('click',function(){
    count+=1;
    display.innerText=count;
});

reset.addEventListener('click',function(){
    count=0;
    display.textContent=count;
});

display.innerText=count;