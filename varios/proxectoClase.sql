

create database proxectoClase;

use proxectoClase;

create table if not exists usuarios (
  id_usuario int primary key auto_increment,
  usuario varchar(15) unique,
  contrasinal varchar(8),
  nombre varchar (20),
  apellidos varchar(50),
  email varchar(100),
  puntos int,
  alta int);


insert into usuarios values (NULL,"root","renaido","nome Administrador","Apelidos Administrador","",0,2);
insert into usuarios values (NULL,"proba","renaido","Nome Proba","Apelidos Proba","proba@gmail.com",0,1);


