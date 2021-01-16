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
	if (principal.value<=0){
		alert('Please enter a positive number (>0) for the Principal Amount.');
		principal.focus();
	} else{
		let rateslide = document.getElementById('rateslide');
		let time = Number.parseInt(document.getElementById('years').value);
	    let endYear = new Date().getFullYear() + time;
	    
	    result.style.display = "block";
	    let resultvalue = amount*rateslide.value/100*time
	    resultvalue = resultvalue.toFixed(2) 
	    let resulttext = `If you deposit <mark>${amount}</mark>,</br>
	    at an interest rate of <mark>${rateslide.value}%</mark>.</br>
	    You will receieve an amount of <mark>${resultvalue}</mark></br>
	    in the year <mark>${endYear}</mark>.`;
	    
	    result.innerHTML = resulttext;
	}
	
}


        