<?php
 header('content-type:text/css');
 $sombraBlurSpread="1px 1px 5px 8px #666666";
 $colorCabeceraPie="#306060";
 $probasombra="box-shadow:1px 1px 5px 8px #666666;
    padding:10px;
    border-radius:15px;";
 echo "
@font-face {
    font-family: Diavlo;
    src: url(fonts/Diavlo_LIGHT_II_37.otf) format('opentype');
}     
html,body{ background-color: #305858;
    }
#contenedor{margin:0 auto;
            margin-top:20px;
            width:960px;                
            background-image:url(images/fondo1.jpg);}
#contenedor,#cabecera,#contenidos,#pie{
  
    $probasombra;
}

#cabecera,#pie{margin:10px 20px;
          background-color:$colorCabeceraPie;
              overflow:hidden;}
#contenidos{margin:40px 20px;
        background-color:gray;}
#pie{height:50px;}        
/*                              CABECERA                */
#cabecera img{width:100px;
              height:100px;}      
.logoizquierda{
    width:15%;
    float:left;}
.titulocabecera{
    width:70%;
    float:left;
    font-family: Diavlo; 
    font-weight: 500;
    font-size:300%;
    letter-spacing:20px;
    }
.titulocabecera p{
    text-align:center;
    margin:20px 0;}
.logoderecha{
    width:15%;
    float:right;}
.logoderecha img {float:right;}
/*                              FIN CABECERA                */


/*                              LOGIN                */
div.flotacion {clear: both;}
#cuerpo{         
    color:white;
    font-size: 1.2em;       
}
#cuerpo #labels {
    float:left; 
    width:50%;
}
#cuerpo #labels p,#cuerpo #labelsAlta p{
    text-align: right;
    padding-top: 0.2em;
    padding-right: 0.3em;
}
#cuerpo #inputs{
    float:left;
    width:50%; 
}
#cuerpo #inputs p,#cuerpo #inputsAlta p{
    text-align: left;
}
input{ border-radius: 10px;}
p {text-align: center;}
fieldset{margin-top: 1.2em;
        visibility:hidden;}
input{ border-radius: 10px;}
 /*                              FIN LOGIN                */
/*                              Rexistrarse                */
legend {text-decoration: underline;
        font-size: 1.2em;        
        color:white;
        font-family: Diavlo;
        text-align:center;
        padding-bottom:20px;}
#cuerpo #labelsAlta {
    float:left; 
    width:15%;
}
#cuerpo #inputsAlta{
    float:left;
    width:85%; 
    padding-bottom: 1em;
}        
 /*                              FIN Rexistrarse                */        
"?>