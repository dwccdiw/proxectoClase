<?php
 header('content-type:text/css');
 $colorPricipal="yellow";
 $colorSecundario="red";
 
 echo "
body * {margin:0;
        padding:0;}    
#cabecera{
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height: 100px;
    background-color: $colorPricipal;                
}
#izquierda, #derecha{
    position:fixed;
    top:100px;
    left:0;
    width:15%;
    height: 100%;
    background-color: green; 
}
#derecha{left:85%;}
#centro{
    margin-top:100px;
    margin-left: 15%;
    width:70%;
    background-color: $colorSecundario;              
}

#centro div { margin: 0 auto;
              width: 265px;}
#pie{
    position:fixed;
    bottom:0;
    left:0;
    width:100%;
    height: 40px;
    background-color: $colorPricipal;               
}       

"?>