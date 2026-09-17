const display=document.getElementById('timeDisplay');
const start=document.getElementById('startBtn');
const stop=document.getElementById('stopBtn');
const reset=document.getElementById('resetBtn');

let second=0;
let timerId=null;

start.addEventListener('click',function(){
    timerId=setInterval(function(){
        second+=1;
        const min=Math.floor(second/60);
        const sec=second%60;
        const str=sec.toString();
        const padstr=str.padStart(2,'0');
        display.textContent=min+':'+padstr;
    },1000)
});

stop.addEventListener('click',function(){
    clearInterval(timerId);
});


reset.addEventListener('click',function(){
    clearInterval(timerId);
    second=0;
    display.textContent='00:00';
});






































// 6----padstart(2,"0")--->06   The padStart() method pads a string from the start
// setInterval -----> The setInterval() method calls a function at specified intervals (in milliseconds)


//  const display = document.getElementById('timeDisplay');
// const start = document.getElementById('startBtn');
// const stop = document.getElementById('stopBtn');
// const reset = document.getElementById('resetBtn');

// let second = 0;
// let timerId = null;
// start.addEventListener('click', function () {
//     timerId=setInterval(function(){
//         second+=1;
//         const min=Math.floor(second/60);
//         const sec=second%60;
//         const string=sec.toString();
//         const stringval=string.padStart(2,'0');
//         display.textContent=min+':'+stringval;
//     },1000)

// });


// stop.addEventListener('click',function(){
//     clearInterval(timerId);

    
// });

// reset.addEventListener('click', function(){
//    clearInterval(timerId);
//    second=0;
//    display.textContent='00:00';
// })