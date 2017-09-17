
window.onload=function(){
	let num=document.getElementById('num');
	num.innerText
	let t=setInterval(function(){
		if(num.innerText<=1){
			clearInterval(t);
			location.replace('index.html');
		}
		num.innerText-=1;		
	},1000)
	
}
