const app= document.getElementById('typewriter');

const typewriter = new Typewriter(app, {
    loop: true,
     delay:100

});


typewriter
    .typeString('Estadio Maracaná de Rio de Janeiro')
    .pauseFor(200)
    .start();



    const app2= document.getElementById('copa');

    const typewriter2 = new Typewriter(app2, {
        
         delay:175
    
    });
    
    
    typewriter2
        .typeString('CONMEBOL COPA AMERICA  2021')
        .pauseFor(200)
        .start();
    

        //TEMPORIZADOR
        //obtener documentos
const dias = document.getElementById("dias");
const horas = document.getElementById("horas");
const minutos = document.getElementById("minutos");
const segundos = document.getElementById("segundos");

// fecha mundial
const proximacopa = '20 june 2024';

function contadorDeTiempo () 
{
    const fechaProximaCopa= new Date (proximacopa);
    const fechaActual= new Date;
//total de segundos faltantes 
    const totalSegundos = (fechaProximaCopa-fechaActual)/1000;
//calculo de tiempo partiendo desde un total de segundos 
    const diasFaltantes = Math.floor (totalSegundos / 3600/24);
    const horasFaltantes = Math.floor (totalSegundos/3600) % 24;
    const minutosFaltantes = Math.floor (totalSegundos/60) % 60;
    const segundosFaltantes = Math.floor (totalSegundos % 60);

 //insertar en el dominio los datos
    dias.innerHTML = diasFaltantes;
    horas.innerHTML = horasFaltantes;
    minutos.innerHTML = minutosFaltantes;
    segundos.innerHTML = segundosFaltantes;
}
//se ejecuta la funcion 
contadorDeTiempo();
// que lo haga casa segundo asi va cambiando el horario
setInterval(contadorDeTiempo, 1000);

