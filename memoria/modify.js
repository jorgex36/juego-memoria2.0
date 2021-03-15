const frente=document.querySelectorAll(".front");
const carta=document.querySelectorAll(".carta");
var a="";
var b="";
var c="";
var d="";
var e="";
let aleatorio;
let barajado;


var arr1 = ["/imagenes/a.jpg", "/imagenes/a.jpg", "/imagenes/b.jpg", "/imagenes/b.jpg", "/imagenes/c.jpg", "/imagenes/c.jpg", "/imagenes/d.jpg", "/imagenes/d.jpg", "/imagenes/e.jpg"
, "/imagenes/e.jpg"];


const barajar=()=>{
    arr1.sort(function() { return Math.random() - 0.5 });
    console.log(arr1)
    
    for (let i = 0; i < frente.length; i++) {
        frente[i].src = arr1[i];
        
    }
    alert("cargado");
}


function tapar(indice) {
    voltear(indice);
    reversa(indice);
}

function voltear(indice) {
    frente[indice].style.display= "block";
    carta[indice].style.display="none";
    
    }


function eliminar(indice) {
   if (a==frente[indice].src) {
        carta[indice].style.display="none";
        frente[indice].style.display="none";
        c.style.display="none";
        a="";
        c="";
  }   
}

function pulsado(posicion, indice) {
    if(a.length>0){
        if (a==frente[indice].src) {
            eliminar(indice)
        }else{tapar(indice);
                b=carta[indice];
                e=frente[indice]
        }
    }else{
        voltear(indice);
        a=frente[indice].src;
        c=frente[indice];
        d=carta[indice]; 
    }
    
    
    console.log(a)
}

function reversa(indice) {
    setTimeout(function(indice){
        //carta[indice].style.display="block";
        //frente[indice].style.display="none";
        e.style.display="none";
        b.style.display="block";
        c.style.display="none";
        d.style.display="block";
    },1000);
    
    setTimeout(function(indice){
    a="";
    b="";
    c="";
    d="";
    e="";
    },1001);
    }

carta.forEach(function(posicion, indice) {
    posicion.addEventListener("click", function(){
        pulsado(posicion, indice);
    })
});

document.getElementsByTagName("body")[0].onload = barajar;
