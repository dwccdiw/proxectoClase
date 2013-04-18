/*var imagenSeleccionada;
function validarTexto(p_texto){
    var ok=true;
    if (p_texto == null || p_texto.length == 0 || /^\s+$/.test(p_texto)) {
        ok=false;
    }      
    return ok;
}
function validarEmail(p_texto){
    var ok=true;
    if (!(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(p_texto))) {
        ok=false;
    }         
    return ok;
}
function validarCombo(p_combo){
    var ok=true;    
    if(p_combo.selectedIndex == null || p_combo.selectedIndex == 0 ) {
        ok=false;
    }    
    return ok;
}
function validarSolicitudAlta(){    
    var ok=true;
    var mensaje="";
    var user = document.getElementById('usuarioDisponible');
    if (user != null){ // Para el caso de comprobar la disponibilidad del usuario
        if (!validarTexto(user.value)){
            mensaje="Debes introducir un nome de usuario";
            ok=false;
        };
    }
    else { // Para el caso de los campos de alta de usuario
        var nome = document.getElementById('nome');
        if (!validarTexto(nome.value)){
            mensaje+="Debes introducir un nome \n";
            ok=false;
        };
        var apelidos = document.getElementById('apelidos');
        if (!validarTexto(apelidos.value)){
            mensaje+="Debes introducir os apelidos \n";
            ok=false;
        };      
        var email = document.getElementById('email');
        if (!validarEmail(email.value)){
            mensaje+="Debes introducir un email correcto \n";
            ok=false;
        };        
        var contrasinal = document.getElementById('contrasinal');
        if (!validarTexto(contrasinal.value)){
            mensaje+="Debes introducir o contrasinal \n";
            ok=false;
        };      
        var combo = document.getElementById('recaudador');
        if (!validarCombo(combo)){
            mensaje+="Debes introducir unha persoa de contacto \n";
            ok=false;
        };      
    }
    if (!ok){
        alert(mensaje);
    }
    return ok;  
}
function limpiaElemento(p_objeto){
    p_objeto.src="Euro2012/imagenes/pixelTransparente.png";
    p_objeto.nextElementSibling.innerText="";
    p_objeto.idSeleccion="";
    p_objeto.vacia=true;    
}
function clickImagen(){
    if (!this.vacia){
        imagenSeleccionada=this;
    } 
    if (imagenSeleccionada!=undefined && this.vacia ){
        this.src=imagenSeleccionada.src;
        this.idSeleccion=imagenSeleccionada.idSeleccion;
        this.nextElementSibling.innerText=imagenSeleccionada.nextElementSibling.outerText;
        this.vacia=false;
        limpiaElemento(imagenSeleccionada);
        imagenSeleccionada=null;
    }    
}
function grabacionCorrecta(){
    if (peticion.readyState == 4) {
        if (peticion.status == 200) {   
            alert("gravación correcta");
        }
    }
}
function clickGrabar(){
    var grupo=parseInt(this.parentElement.id);
    var correcto=true;
    var contador=1;
    var arrayIdSeleccion= new Array;
    $("#" + this.parentElement.id + " .elementoGrupo img").each(function(){       
        arrayIdSeleccion[contador]= this.idSeleccion;       
        if (this.idSeleccion == "") {
            correcto=false;
        }
        contador+=1;
    });
    if (correcto) {        
        var usuario=2;// FALTA USUARIO
      
        // Funciona
        peticion = inicializa_xhr();
        if(peticion) {
            peticion.onreadystatechange = grabacionCorrecta;            
            peticion.open("GET", "http://localhost/euro/Euro2012/actualizarGrupo.php?usuario="+usuario+"&fase="+grupo+"&uno="+arrayIdSeleccion[1]+"&dos="+arrayIdSeleccion[2]+"&tres="+arrayIdSeleccion[3]+"&cuatro="+arrayIdSeleccion[4], true);
            peticion.send(null);
        } 
    /* Funciona con JQuery
         $.get("Euro2012/actualizarGrupo.php", {
            usuario: usuario, 
            fase: grupo, 
            uno: arrayIdSeleccion[1], 
            dos: arrayIdSeleccion[2], 
            tres: arrayIdSeleccion[3], 
            cuatro: arrayIdSeleccion[4]
            }, 
        function(respuesta){
            alert(respuesta);
        });*/
/*
    }
    else {
        alert("falta algunha selección por asignar")
    }
}

function asignarEventos(){
*/
/* $("#aviso").click(function(){
       if ($('#aviso').hasClass('ocultarAviso')){
           $("#aviso").removeClass("ocultarAviso");
           $("#aviso").addClass("mostrarAviso");           
       }
       else { $("#aviso").removeClass("mostrarAviso");
              $("#aviso").addClass("ocultarAviso");   
          }
       }); */
/*  $("#aviso").click(function(){
        $('#aviso').fadeOut(1500, function() {
            $("#aviso").css({
                visibility: "hidden"
            });
        });  
        $("#avisar").fadeIn(1500, function() {
            $("#avisar").css({
                visibility: "visible"
            });
        });          
    }); 
    $("#avisar").click(function(){
        $('#avisar').fadeOut(1500, function() {
            $("#avisar").css({
                visibility: "hidden"
            });
        });  
        $("#aviso").fadeIn(1500, function() {
            $("#aviso").css({
                visibility: "visible"
            });
        });          
    });   
    $("#tabsMenu img").each(function(){
        this.onclick=clickImagen;
        this.vacia=true;
    });
    $(".botonGrabar").each(function(){
        this.onclick=clickGrabar;        
    });
};

function paginasNoIndex(){
    if (window.document.URL.indexOf("indexEuro.php") == -1){
        $("#aviso").css({
            visibility: "hidden"
        });
        $("#avisar").css({
            visibility: "visible"
        });      
    }     
};

var peticion = null;
 
function inicializa_xhr() {
    if (window.XMLHttpRequest) {
        return new XMLHttpRequest(); 
    }
    else if (window.ActiveXObject) {
        return new ActiveXObject("Microsoft.XMLHTTP"); 
    }
    else return null;
} 

function muestraGrupos(){
    if (peticion.readyState == 4) {
        if (peticion.status == 200) {                        
            var jsondata=eval("("+peticion.responseText+")");  
            $("#tomaDatos").css({
                visibility: "visible"
            });
            $("#tabsMenu img").each(function(){
                limpiaElemento(this);
            });            
            for (var i=0; i<jsondata.length; i++){                
                var divContenedor=document.getElementById(jsondata[0].id_grupo+"-"+(i+1));
                divContenedor.children[0].src=jsondata[i].imagen_seleccion;
                divContenedor.children[0].idSeleccion=jsondata[i].id_seleccion;                
                divContenedor.children[0].vacia=false; 
                divContenedor.children[1].innerHTML=jsondata[i].nombre_seleccion;              
            }
        }
    }
}

function clickMenu(){
    peticion = inicializa_xhr();
    if(peticion) {
        peticion.onreadystatechange = muestraGrupos;
        peticion.open("GET", "http://localhost/euro/Euro2012/grupos.php?grupo="+this.attributes.numGrupo.nodeValue, true);
        peticion.send(null);
    }
}*/
function comprobarDisponibilidadUsuario(){
    $.get("comprobarUsuario.php", {
        usuario: $("#usuarioDisponible").val()
    }, 
    function(respuesta){       
        if (respuesta=="1") {
            alert("... usuario xa existente téntao con outro ...");
        }
        else {
            $("#disponibilidad").css({
                visibility: "hidden"
            });
            var htmlStr = $("fieldset>legend").html();
            $("fieldset>legend").text(htmlStr+$("#usuarioDisponible").val());            
            $("fieldset").css({
                visibility: "visible"
            });
        }
    });
}

$(document).ready(function(){     
    /*  $( "#tabsMenu ul li a").click(clickMenu);
    $( "#tabsMenu" ).tabs();
    paginasNoIndex();
    asignarEventos();  */
    if (window.document.URL.indexOf("php") == -1 || window.document.URL.indexOf("index.php") != -1){
    //alert("hola principal");        
    }
    else {
        if (window.document.URL.indexOf("rexistrarse.php") != -1){
            $("#comprobacion").click(comprobarDisponibilidadUsuario);
        }
        else {
            if (window.document.URL.indexOf("home.php") != -1){
            //    alert("hola home");
            }
        }
    }
}); 

  