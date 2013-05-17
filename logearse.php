<?php
require_once('inicio.php');
session_start();
$usuario = $_POST['usuario'];
$contrasinal = $_POST['contrasinal'];
Conexion();
//$consulta = "Select nombre,usuario,id_usuario from usuarios where usuario = '$usuario' and contrasinal = '$contrasinal'";
$consulta = "Select * from usuarios where usuario = '$usuario' and contrasinal = '$contrasinal'";
$datos = @mysql_db_query($BD, $consulta, $id_conexion) or die("Non foi posible realizar a consulta solicitada: ");
$fila = mysql_fetch_array($datos);
if (mysql_num_rows($datos) == 1)
	{ $_SESSION["IdUsuario"] = $fila["id_usuario"];
      $_SESSION["Usuario"] = $fila["usuario"];	  
      echo 1;	  
      }
    else  
        echo 0;
mysql_free_result($datos);
mysql_close($id_conexion);
?>
