let principal = document.getElementById('principal');

let rate = document.getElementById('rate');
let rateslide = document.getElementById('rateslide');
rate.innerText = rateslide.value+"%";
rateslide.addEventListener('input',updateRate,false);
function updateRate(){
	let rate = document.getElementById('rate');
	let rateslide = document.getElementById('rateslide');
	rate.innerText = rateslide.value+"%";
}

let result = document.getElementById('result');
result.style.display = "none";

function compute()
{	
	let result = document.getElementById('result');
	let principal = document.getElementById('principal');
	let amount = Number.parseInt(principal.value);
	let rateslide = document.getElementById('rateslide');
	let time = Number.parseInt(document.getElementById('years').value);
    let endYear = new Date().getFullYear() + time;
    
    result.style.display = "block";
    let resultvalue = amount*(1+rateslide.value/100)*(time)
    resultvalue -= amount;
    resultvalue = resultvalue.toFixed(2) 
    let resulttext = `If you deposit <mark>${amount}</mark>,</br>
    at an interest rate of <mark>${rateslide.value}%</mark>.</br>
    You will receieve an amount of <mark>${resultvalue}</mark></br>
    in the year <mark>${endYear}</mark>.`;
    
    result.innerHTML = resulttext;
}


        