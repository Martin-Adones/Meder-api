# Servir archivos estáticos con NGINX

- La carpeta `public/` debe contener tu archivo `index.html` y cualquier recurso estático (JS, CSS, imágenes).
- En la configuración de NGINX, ajusta la línea:
  ```nginx
  root /ruta/completa/a/tu/proyecto/public;
  ```
- Ejemplo:
  ```nginx
  root /home/usuario/Meder-api/public;
  ```
- Así, al acceder a `http://localhost/`, NGINX servirá el frontend correctamente. 