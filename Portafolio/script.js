
//funcion para meni 
function responsiveMenu(){
    var x= document.getElementById("nav");
    if(x.className==""){
        x.className="responsive";
    }else{
        x.className="";
    }
}

var check =document.querySelector(".check");
check.addEventListener('click',idioma);

function idioma(){
    let id=check.checked;
    if(id==true){
        location.href="en/index.html"
    }else{
        location.href="../index.html";
    }
}


window.onscroll=function(){
    efectoHabilidades()
};

function efectoHabilidades(){
    var skills=document.getElementById("skills");
    var distancia_skills=window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills>=200){
        document.getElementById("html").classList.add("barra-progreso1");
        document.getElementById("py").classList.add("barra-progres2");
        document.getElementById("bd").classList.add("barra-progreso3");
        document.getElementById("mt").classList.add("barra-progreso4");
    }
}