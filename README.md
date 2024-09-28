# Documentación de la prueba
## Tecnologias utilizadas ##

1. NodeJS / NestJS
2. Google Cloud Platform (GCP)
3. Compute Engine (VM)
4. Cloud Mongo Atlas
5. Docker
6. Swagger / OPEN API
7. Nginx

## (VM) IP Para acceder al API ##
  - Dentro de este enpoint vienen todos los endpoints con su respectiva
    documentación, respuestas exitosas y respuestas de errores.
  ```
  http://34.170.44.77/api#
  ```
  - El servidor esta corriendo en una maquina virtual en GCP,
    se le instalo docker y configuro nginx server para mostrar 
    el servicio API desde la maquina virtual.


## Pasos para descargar y correr el proyecto ##

1. Clonar el repositorio
  ```
    git clone https://github.com/styLe-Juubi/technical-test.git
  ```

2. Instalar dependencias
  ```
    npm install
  ```

3. Correr el proyecto
  ```
    npm run start:dev
  ```

4. Enlace adicional para ver el repositorio de la imagen de docker
  ```
  https://hub.docker.com/repository/docker/stylejuubi/technical-test/general
  ```

```
  Nota: realice el desarrollo con MongoDB en ves de PostgreSQL ya que 
  realmente domino mas esta base de datos, deje el proyecto con un servicio 
  adaptador para cuando se quiera hacer switch de base de datos solamente
  se agregue la funcionalidad de la otra base de datos y siga funcionando todo
  de la misma manera.

  Pretendo dominar SQL si es requerido.
```