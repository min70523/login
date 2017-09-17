let info=document.getElementById('info');
let user=document.getElementById('user');
let password=document.getElementById('password');
// console.log(info)
info.onclick=function(){
	if(user.value.trim()=='wo'&&password.value=='123456'){
		alert('success!')
	}else{
		location.replace('error.html')
	}
};