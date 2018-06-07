 function displaynum(n) {
            txt1.value += n;
        }
		
function clean() {
	txt1.value = "";
}

function back() {
	var exp = txt1.value;
	txt1.value = exp.substring(0, exp.length-1);
}

function Evalute(){
	 txt1.value= eval(txt1.value);
}

function handleEnter(e){
var keycode = (e.keyCode ? e.keyCode : e.which);
if (keycode == '13') {
 Evalute();
 }
}