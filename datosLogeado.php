<?php
require_once('inicio.php');
session_start();
$usuario = $_SESSION["Usuario"];
Conexion();
$consulta = "Select * from usuarios where usuario = '$usuario'";
$datos = @mysql_db_query($BD, $consulta, $id_conexion) or die("Non foi posible realizar a consulta solicitada: ");
$fila = mysql_fetch_array($datos);
if (mysql_num_rows($datos) == 1)
	{ $arrayDatos = array("nome" => $fila["nombre"],"apelidos" => $fila["apellidos"], "email" => $fila["email"],"usuario" => $fila["usuario"],"idUsuario" => $fila["id_usuario"]);
      print_r(json_encode($arrayDatos));      
      }
    else  
      return 0;
mysql_free_result($datos);
mysql_close($id_conexion);
?>
