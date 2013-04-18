<?php
require_once('inicio.php');
session_start();
$usuario = $_GET['usuario'];
Conexion();
$consulta = "Select count(*) as cuantos from usuarios12 where (usuario = '$usuario')";
$datos = @mysql_db_query($BD, $consulta, $id_conexion) or die("Non foi posible realizar a consulta solicitada: ");
$fila = mysql_fetch_array($datos);
if (mysql_num_rows($datos) == 1)
    $cuantos = $fila["cuantos"];
else
    $cuantos = 0;
if ($cuantos == 0)
    echo "0";
else
    echo "1";
mysql_free_result($datos);
mysql_close($id_conexion);
?>
