function sumador(id1, id2){
	//console.log("entra en la funcion");
	var str = document.getElementById(id1);
	var res = str.innerHTML.split("+");
	var num1 = parseInt(res[0]);
	var num2 = parseInt(res[1]);
	var suma = num1 + num2;
	//console.log("suma es = " + suma);
	var resultado = document.getElementById(id2);
	resultado.innerHTML = "=" + suma;	
}
