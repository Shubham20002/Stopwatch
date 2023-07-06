
//accessing all 6 positon of clock
let counters = document.getElementsByClassName('counter');

// start button
let start = document.getElementById('start');

//  stop button
let stop = document.getElementById('stop');

//  reset button
let reset = document.getElementById('reset');

let timeStart = false;

// Function to increase the timer
let increase = function(){
    // This i will take care of the timer controller
    let i = counters.length - 1;
    let count = parseInt(counters[i].innerHTML);
    if(i%2==0){
        endpoint=5;
    }
    else{
        endpoint=9;
    }
    
    while(count == endpoint){
        count = 0;
        counters[i].innerHTML = count;
        i--;
        count = parseInt(counters[i].innerHTML);
        endpoint = (i % 2 == 0)?5:9;
        if(i < 0) break;
    }
    if(i >= 0){
        count++;
        counters[i].innerHTML = count;
    }
}

// to stop setinterval we collecting setinterval id
var id;

// This function is used to start the timer
let updateTime = function(){
    if(!timeStart){
        id = setInterval(increase, 1000);
        timeStart = true;
    }
}

// function to stop the timer 
let stopTime = function(){
    clearInterval(id);
    timeStart = false;
}

//  function  to reset the timer 
let settoZero = function(){
    for(let i of counters){
        i.innerHTML = 0;
    }
}


// staring stopwatch
start.addEventListener('click', updateTime);


// to stop stopwatch
stop.addEventListener('click', stopTime);

//to reset stopwatch
reset.addEventListener('click', settoZero);
