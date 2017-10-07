
let signs = [
    {name: "capricornio", date: "dia >= 22 && mes == 12) || (dia <= 20 && mes == 1"},
    {name: "aquario", date: "dia >= 21 && mes == 1) || (dia <= 19 && mes == 2"},
    {name: "peixes", date: "dia >= 20 && mes == 2) || (dia <= 20 && mes == 3"},
    {name: "aries", date: "dia >= 21 && mes == 3) || (dia <= 19 && mes == 4"},
    {name: "touro", date: "dia >= 20 && mes == 4) || (dia <= 20 && mes == 5"},
    {name: "gemeos", date: "dia >= 21 && mes == 5) || (dia <= 21 && mes == 6"},
    {name: "cancer", date: "dia >= 22 && mes == 6) || (dia <= 22 && mes == 7"},
    {name: "leao", date: "dia >= 23 && mes == 7) || (dia <= 22 && mes == 8"},
    {name: "virgem", date: "dia >= 23 && mes == 8) || (dia <= 22 && mes == 9"},
    {name: "libra", date: "dia >= 23 && mes == 9) || (dia <= 22 && mes == 10"},
    {name: "escorpiao", date: "dia >= 23 && mes == 10) || (dia <= 21 && mes == 11"},
    {name: "sagitário", date: "dia >= 22 && mes == 11) || (dia <= 21 && mes == 12"}
];

$("#btn").on("click", ()=> {
     
    let data = document.formulario.calendario.value;
    let parte1 = data.substring(0,2);
    let parte2 =  data.substring(3,5);
 
    let dia = parseInt(parte1);
    let mes = parseInt(parte2);

    switch(sign.date === true){

        case ""

        
    }
       /* signs.forEach((sign)=> {
            if(textContent === sign.name){
            
                var tira = document.getElementById(textContent).classList;
            }
        });*/
});