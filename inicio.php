<?php

$dominio = "http://localhost/proxectoClase/";
$inicio = "index.php";

function Conexion() {
    global $id_conexion;
    global $BD;
    $maquina = "localhost";
    $BD = "euro2012";
    $userBD = "root";
    $contrasinal = "renaido";

    $id_conexion = @mysql_connect($maquina, $userBD, $contrasinal) or die("Non se pode realizar a conexión");
    mysql_query("SET NAMES 'utf8'");
    
    }
?>
