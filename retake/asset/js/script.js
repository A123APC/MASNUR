let i = 10;
let waktu = document.querySelector('.second');
let myin = setInterval(function(){
    if (i > 0){
        console.log (i);
        waktu.innerHTML = i;
        i = i - 1;
    } else { 
        clearInterval(myin);
        console.log (i);
        location.href = "../index.html";
    }
},1000);