	//capricornio 22/12 até 20/01
   //aquário 21/01 até 19/02
   //peixes 20/02 até 20/03
   //aries 03/21 até 04/19
   //touro 04/20 até 05/20
   //gemeos 05/21 até 06/21
   //cancer 06/22 até 07/22
   //leão 07/23 até 08/22
   //virgem 08/23 até 09/22
   //libra 09/23 até 10/22
   //escorpião 10/23 até 11/21
   //sagitário 11/22 até 12/21
   function hideStuff(){
   
   document.getElementById('btn2').style.visibility="hidden";
   document.getElementById('calendario').value='';
   document.getElementById('btn').style.visibility="visible";
   destrocaDiv('capricornio');
   destrocaDiv('aquario');
   destrocaDiv('peixes');
   destrocaDiv('aries');
   destrocaDiv('touro');
   destrocaDiv('gemeos');
   destrocaDiv('cancer');
   destrocaDiv('leao');
   destrocaDiv('virgem');
   destrocaDiv('libra');
   destrocaDiv('escorpiao');
   destrocaDiv('sagitário');
}
   function trocaDiv(nomeDiv){
      var tira = document.getElementById("teste").classList;
   if (tira.contains("teste")) {
 
    tira.remove("teste");
    tira.add(nomeDiv);

   }
}
 function destrocaDiv(nomeDiv){
      var tira = document.getElementById("teste").classList;
   if (tira.contains(nomeDiv)) {
 
    tira.remove(nomeDiv);
    tira.add("teste");

   }
}
 function descobreSigno(){
   var data = document.formulario.calendario.value;
   var parte1 = data.substring(0,2);
   var parte2 =  data.substring(3,5);

 	
      var dia = parseInt(parte1);
      var mes = parseInt(parte2);
      
      if((dia >= 22 && mes == 12) || (dia <= 20 && mes == 1)){
      trocaDiv('capricornio');
      document.getElementById('btn2').style.visibility="visible";
      document.getElementById('btn').style.visibility="hidden";
   }
   else if((dia >= 21 && mes == 1) || (dia <= 19 && mes == 2)){
      trocaDiv('aquario');
      document.getElementById('btn2').style.visibility="visible";
      document.getElementById('btn').style.visibility="hidden";
   }
   else if((dia >= 20 && mes == 2) || (dia <= 20 && mes == 3)){
      trocaDiv('peixes');
      document.getElementById('btn2').style.visibility="visible";
      document.getElementById('btn').style.visibility="hidden";
   }
 	else if((dia >= 21 && mes == 3) || (dia <= 19 && mes == 4)){
      trocaDiv('aries');
      document.getElementById('btn2').style.visibility="visible";
      document.getElementById('btn').style.visibility="hidden";
 	}
   else if((dia >= 20 && mes == 4) || (dia <= 20 && mes == 5)){
      trocaDiv('touro');
      document.getElementById('btn2').style.visibility="visible";
      document.getElementById('btn').style.visibility="hidden";
   }
   else if((dia >= 21 && mes == 5) || (dia <= 21 && mes == 6)){
      trocaDiv('gemeos');
      document.getElementById('btn2').style.visibility="visible";
      document.getElementById('btn').style.visibility="hidden";
   }
   else if((dia >= 22 && mes == 6) || (dia <= 22 && mes == 7)){
     trocaDiv('cancer');
      document.getElementById('btn2').style.visibility="visible";  
      document.getElementById('btn').style.visibility="hidden";
   }
   else if((dia >= 23 && mes == 7) || (dia <= 22 && mes == 8)){
      trocaDiv('leao');
      document.getElementById('btn2').style.visibility="visible";
      document.getElementById('btn').style.visibility="hidden";
   }
   else if((dia >= 23 && mes == 8) || (dia <= 22 && mes == 9)){
      trocaDiv('virgem'); 
      document.getElementById('btn2').style.visibility="visible"; 
      document.getElementById('btn').style.visibility="hidden"; 
   }
   else if((dia >= 23 && mes == 9) || (dia <= 22 && mes == 10)){
      //document.getElementById('libra').style.visibility="visible";
      trocaDiv('libra');
      document.getElementById('btn2').style.visibility="visible";
      document.getElementById('btn').style.visibility="hidden";
   }
   else if((dia >= 23 && mes == 10) || (dia <= 21 && mes == 11)){
      trocaDiv('escorpiao');
      document.getElementById('btn').style.visibility="hidden";
      document.getElementById('btn2').style.visibility="visible";
   }
   else if((dia >= 22 && mes == 11) || (dia <= 21 && mes == 12)){
     trocaDiv('sagitario');
      document.getElementById('btn2').style.visibility="visible";
      document.getElementById('btn').style.visibility="hidden";
   }
   else{
      
   }
};
function showStuff(mostrar){
   document.getElementById(mostrar).style.visibility="visible";
}
 



