const afisaree1 = document.getElementById("afisare");  
const aruncare = document.getElementById("clickk"); 
const aiprins = document.getElementById("aiprins");
// const butonx = document.getElementById("butonafisarex");
const bobber = document.getElementById("bobber");
const releasebutt = document.getElementById("releasefish");
const keepbutt = document.getElementById("keepfish");
//pentru score si here
const texthere = document.getElementById("texthere");
const textscore = document.getElementById("textscore");

//constante cu pesti
const gldfsch = 'goldfish.png';
const gldfschtxt = "Goldfish";

const anchovy = 'anchovy.png';
const anchovytxt = "Anchovy";

//cat pesti ai retinut
var scor = 0;
textscore.innerText = "Pesti retinuti: "+ scor;

function incrementscor(){
  scor ++;
textscore.innerText = "Pesti retinuti: "+ scor;
}


//if()
//lineingcxt.beginPath()

// APAS PE APA SI DA CAST LA BOBBER
 aruncare.addEventListener("click", afisaj);

 function afisaj(){
  
  if(aiprins.style.opacity == 0){ //trb sa adaug ca sa nu poara sa dea click de mai multe ori
  texthere.innerText = "Asteapta...";
  afisajrun();
  setTimeout(afisaj3,2900);
  setTimeout(afisaj2, 5000);
  afisarefull();
  }
 };
 function afisajrun(){
   bobber.style.animationPlayState="running";  
 }

 function afisaj2(){
   aiprins.style.opacity = 100;   
};

 function afisaj3(){
   bobber.style.animationPlayState="paused";
 }
 
 //BUTOANE KEEP SI RELEASE FISH 

 releasebutt.addEventListener("click",function(){
   if(releasebutt.style.opacity = 100){  // am pus conditie doar daca e pe ecran sa 
    aiprins.style.opacity = 0;
    setTimeout(afisaj3,100); //pun timer dupa dau play sa ajunga la poz initiala
      afisajrun();
      texthere.innerText = "Click aici ca sa pescuiesti.";  
   }
 },);

keepbutt.addEventListener("click",function(){
  if(keepbutt.style.opacity = 100){  // am pus conditie doar daca e pe ecran sa 
  aiprins.style.opacity = 0;
    incrementscor();
  setTimeout(afisaj3,100); //pun timer dupa dau play 
    afisajrun(); 
    texthere.innerText = "Click aici ca sa pescuiesti."; 
  }
},);


//functie generare numar si alegere peste
function afisarefull(){

//variabile auxiliare
var pesteales;
var textprins;

//generare + verificare nuamr
let numarr = Math.floor(Math.random()*10);
console.log(numarr);

if(numarr <= 5){
    pesteales = gldfsch;
    textprins = gldfschtxt;
}
else{
  pesteales = anchovy;
  textprins = anchovytxt;
};

// afisare peste prins generat random
const canvass = document.getElementById('pesteprins');
const canvasscxt = canvass.getContext('2d');
const pestescris = document.getElementById("ceaiprins");

const newimg = new Image();

var peste = pesteales;

newimg.src = peste;

pestescris.innerText = "Ai prins un " + textprins /*+ numarr*/;//+ textprins;// text pentru peste

newimg.onload = function(){
  canvasscxt.clearRect(0,0,400,300);
   canvasscxt.drawImage(newimg,100,0);
   
};

}

//pentru scor si text de asteptare


