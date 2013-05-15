<?php
session_start();
if (isset($_SESSION["Usuario"])){
	require_once('html/cabecera.html');        
	require_once('html/multimedia.html');                      
	require_once('html/pie.html');   
}
?>
