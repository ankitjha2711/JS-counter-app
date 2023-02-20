function increase(){
    let val = document.getElementById('counter-heading');
    val.innerHTML = Number(val.innerText)+1;
}

function decrease(){
    let val = document.getElementById('counter-heading');
    let num = Number(val.innerText);
    if (num <= 0){
        val.innerHTML = 0;
    }
    else{
        val.innerHTML = num - 1;
    }
}

function reset(){
    document.getElementById('counter-heading').innerHTML = 0;
}

let element = document.getElementsByClassName('increment')[0];
element.addEventListener('click',increase);

element = document.getElementsByClassName('decrement')[0];
element.addEventListener('click',decrease);

element = document.getElementsByClassName('reset')[0];
element.addEventListener('click',reset);