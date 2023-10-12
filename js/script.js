var angka = document.getElementById('angka');
var konversi = document.getElementById('konvers');
var suhu = document.getElementById('result');
var reset = document.getElementById('reset');
var reverse = document.getElementById('reverse');
let isCelcius = true;

angka.addEventListener("keyup",function(argument) {
	var validasiAngka = /^[0-9]+$/;
	$angka = document.getElementById('angka');

	if (!angka.value.match(validasiAngka)) {
		alert("Format wajib angka!");
		angka.value = "";

	}
});


konversi.addEventListener("click",function(argument) {
	var validasiAngka = /^[0-9]+$/;

	if (isCelcius) {
		if (angka.value.match(validasiAngka)) {
			suhu.style.display = "block";
			var farenhait = (angka.value * 9 /5) + 32;
			document.getElementById('label-suhu').innerHTML = "Farenhate (°F)";
			document.getElementById('desk').innerHTML = "( Celcius Ke Farenhate )";
			document.getElementById("hasil").innerHTML = farenhait;
			document.getElementById("hitung").innerHTML = "( " + angka.value + " * 9/5 ) + 32" + " = " + farenhait;
		}
	}else if(!isCelcius){
		if (angka.value.match(validasiAngka)) {		
			suhu.style.display = "block";
			var c = (angka.value - 32) * 5/9;
			document.getElementById('label-suhu').innerHTML = "Celcius (°C)";
			document.getElementById('desk').innerHTML = " ( Farenhate Ke Celcius )";
			document.getElementById("hasil").innerHTML = c;
			document.getElementById("hitung").innerHTML = "( " + angka.value + " - 32 ) * 9/5" + " = " + c;
		}
	}else{
		alert('maaf perhitungan salah');
	}
});

reset.addEventListener("click",function(argument) {
	angka.value = '';
	suhu.style.display = "none";
});

reverse.addEventListener("click",function(argument) {
	// document.getElementById('label').innerHTML = 'Farenhate';
	angka.value = '';
	suhu.style.display = "none";	

	isCelcius = !isCelcius;

	if (isCelcius) {
		document.getElementById('label').innerHTML = 'Celcius';
	}else{
		document.getElementById('label').innerHTML = 'Farenhate';
	}
	// farenhait();

});
// 5/9 x (F-32)
// function farenhait(argument) {
// 	suhu.style.display = "block";
// 	var celcius = 5 / 9 * (angka.value - 32);
// 	document.getElementById("hasil").innerHTML = celcius;
// 	document.getElementById("hitung").innerHTML = angka.value + " * 9/5 + 32" + "= " + celcius;
// }