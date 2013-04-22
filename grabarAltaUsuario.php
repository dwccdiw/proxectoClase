<?php  
  require_once('inicio.php');
  session_start();
  $usuario = $_POST['usuario'];
  $nome = $_POST['nome'];
  $apelidos = $_POST['apelidos'];
  $email = $_POST['email'];
  $contrasinal = $_POST['contrasinal'];
  Conexion();
  $consulta = "Insert into usuarios values (0,'$usuario','$contrasinal','$nome','$apelidos','$email',0,0)";
  $datos = @mysql_db_query($BD, $consulta, $id_conexion) or die("Non foi posible realizar a inserción solicitadaaa: ");
  mysql_close($id_conexion);
  echo "1";    
    
?>