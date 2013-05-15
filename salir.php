<?php
session_start();
if (isset($_SESSION["Usuario"])){
	require_once('html/cabecera.html');        
	require_once('html/salir.html');                      
	require_once('html/pie.html');  
	unset($_SESSION["IdUsuario"]); 
    unset($_SESSION["Usuario"]);
    session_destroy(); 
}
?>
