import { Component } from '@angular/core';

@Component({
  selector: 'app-project-card-component',
  standalone: false,
  templateUrl: './project-card-component.html',
  styleUrl: './project-card-component.css'
})
export class ProjectCardComponent {

  projectCard = [
    {name: 'spring-security-jpa-jwt', description: 'Implementación de un sistema seguro de login con roles y protección de rutas mediante tokens JWT.',link: 'https://github.com/Chilaqui/spring-security-jpa-jwt', img: 'assets/imgprojects/spring-security-jpa-jwt.png'},
    {name: 'api-jsonplaceholder-', description: 'Cliente backend construido con Spring Boot que consume la API pública.',link: 'https://github.com/Chilaqui/api-jsonplaceholder-', img: 'assets/imgprojects/api-jsonplaceholder-.png'},
    {name: 'spring-security-jdbc-login', description: 'Autenticación básica con Spring Security usando JDBC y PostgreSQL. Login clásico con usuario y contraseña desde base de datos, contenedorizado con Docker.',link: 'https://github.com/Chilaqui/spring-security-jdbc-login', img: 'assets/imgprojects/spring-security-jdbc-login.png'},
    {name: 'spring-security-JPA-userDeatilsService', description: 'Autenticar con usuarios y roles desde base de datos usando JPA.',link: 'https://github.com/Chilaqui/spring-security-JPA-userDeatilsService', img: 'assets/imgprojects/spring-security-JPA-userDeatilsService.png'},
    {name: 'to-dolist-swagger-validation', description: 'Proyecto To-Do List hecho con Spring Boot, MySQL, Swagger para documentación, y validaciones con anotaciones Java (@Valid, @NotBlank, etc). Preparado con Docker Compose.',link: 'https://github.com/Chilaqui/to-dolist-swagger-validation', img: 'assets/imgprojects/ to-dolist-swagger-validation.png'},
    {name: 'bank-management-db', description: 'Base de datos para un sistema bancario con tablas para clientes, cuentas, transacciones, empleados y préstamos. Diseño fácil de entender para manejar información bancaria básica.',link: 'https://github.com/Chilaqui/bank-management-db', img: 'assets/imgprojects/bank-management-db.png'},
    {name: 'To-Do-List', description: 'Una aplicación web para gestionar tareas diarias con una interfaz limpia y moderna.',link: 'https://github.com/Chilaqui/To-Do-List', img: 'assets/imgprojects/To-do-list.png'},
    {name: 'hospital-db-system', description: 'Base de datos hospitalaria con pacientes, doctores, citas, Views, triggers y procedimientos SQL.',link: 'https://github.com/Chilaqui/hospital-db-system', img: 'assets/imgprojects/hospital-db-system.png'},
    {name: 'spring-security-inmemory-auth', description: 'Seguridad con usuarios en memoria',link: 'https://github.com/Chilaqui/spring-security-inmemory-auth', img: 'assets/imgprojects/spring-security-inmemory-auth.png'},
    {name: 'Api-Marvel', description: 'Proyecto backend en Java Spring Boot que consume la API de Marvel, almacena datos de personajes en una base de datos MySQL, y utiliza Docker para administrar servicios como MySQL y PhpMyAdmin.',link: 'https://github.com/Chilaqui/Api-Marvel', img: 'assets/imgprojects/Api-Marvel.png'},
    {name: 'house-price-analysis', description: 'Proyecto de análisis de datos usando Python, Pandas, NumPy, Seaborn, Matplotlib y Jupyter Notebook. En este proyecto realizo un análisis exploratorio de datos reales para identificar patrones, visualizar información relevante y desarrollar insights útiles, aplicando todo lo aprendido en mis primeros cursos de análisis de datos.',link: 'https://github.com/Chilaqui/house-price-analysis', img: 'assets/imgprojects/house-price-analysis.png'},
    {name: 'Docker-crud-java-mysql', description: 'Creacion de un crud en java 17 con Spring boot y MySQL corriendo en un contenedor de docker.',link: 'https://github.com/Chilaqui/Docker-crud-java-mysql', img: 'assets/imgprojects/Docker-crud-java-mysql.png'},
    {name: 'Foro-Hub', description: 'ForoHub es una aplicación diseñada para permitir a los usuarios registrar temas de discusión (tópicos), realizar preguntas, recibir respuestas y gestionar perfiles de usuario con distintos roles.',link: 'https://github.com/Chilaqui/Foro-Hub', img: 'assets/imgprojects/Foro-Hub.png'} 
  ]

}
