# Configuracion

Crear un archivo .env en la raiz del proyecto con las siguientes variables:

DATABASE_HOST=tu_host_de_mysql
DATABASE_NAME=el_nombre_de_tu_base_de_datos
DATABASE_USER=tu_usuario_de_mysql
DATABASE_PASSWORD=tu_contraseña_de_mysql

RUTAS:

-   Obtener todos los libros:
    -   Tipo: GET
    -   Url: /api/books
-   Crear un nuevo libro:
    -   Tipo: POST
    -   Url: /api/books
    -   Parametros:
        -   name
        -   year
        -   category
        -   platform_id
-   Actualizar un libro:
    -   Tipo: PUT
    -   Url: /api/books/{el_id_del_libro}
    -   Parametros:
        -   name
        -   year
        -   category
        -   platform_id
-   Eliminar un libro:
    -   Tipo: DELETE
    -   Url: /api/books/{el_id_del_libro}
