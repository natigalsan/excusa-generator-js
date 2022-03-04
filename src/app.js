/* eslint-disable */
//import "bootstrap";
//import "./style.css";

//import "./assets/img/rigo-baby.jpg";
//import "./assets/img/4geeks.ico";

function onLoad() {
  //write your code here

  
  let  who  =  [ 'El perro' , 'Mi abuela' , 'Su tortuga' , 'Mi pájaro' ] ; 
  let  action  =  [ 'comió' , 'meó' , 'aplastó' , 'rompió' ] ; 
  let  what  =  [ 'mi tarea' ,  'las llaves' ,  'el carro' ] ; 
  let  when  =  [ 'antes de la clase' , 'justo a tiempo' , 'cuando terminé','mientras estaba rezando' ] ;
  
  
  var frase='';
  var numerorandom;
  // La frase tiene 4 partes: who + action + what + when. Hay que calcular 4 elementos aleatorios
  for(let i=0;i<4;i++){
   
    //Por cada parte de la frase, elijo una palabra aleatoria
    
    switch (i) {
      case 0:
      numerorandom = Math.floor((Math.random()*who.length));  
      frase += who[numerorandom];
        break;
      case 1:
        numerorandom = Math.floor((Math.random()*action.length)); 
        frase += " " + action[numerorandom];
        break;
      case 2:
        numerorandom = Math.floor((Math.random()*what.length)); 
        frase += " " + what[numerorandom];
        break;
      default:
        numerorandom = Math.floor((Math.random()*when.length)); 
        frase += " " + when[numerorandom];
        break;
    }
  }
  
  
  
  console.log("Hello Rigo from the console!");

  return frase;

};

var varexcusa=onLoad();
document.getElementById("excusa").innerHTML = varexcusa;