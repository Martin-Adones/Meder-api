# Guía rápida: NGINX como Access Proxy (Zero Trust)

## 1. Instalar NGINX

- **Ubuntu/Debian:**
  ```bash
  sudo apt update && sudo apt install nginx
  ```
- **CentOS/RHEL:**
  ```bash
  sudo yum install nginx
  ```
- **Windows:**
  Descarga desde [nginx.org](https://nginx.org/en/download.html)

## 2. Copiar la configuración

- Copia el archivo `nginx-access-proxy.conf` a la carpeta de configuración de NGINX:
  - Linux: `/etc/nginx/sites-available/` o `/etc/nginx/conf.d/`
  - Windows: donde esté instalado NGINX

## 3. Habilitar el sitio (Linux)

```bash
sudo ln -s /etc/nginx/sites-available/nginx-access-proxy.conf /etc/nginx/sites-enabled/
```

## 4. Ajustar rutas

- Cambia la línea `root /usr/share/nginx/html;` por la ruta real a tu carpeta `public` del proyecto.
- Asegúrate de que `proxy_pass http://localhost:4000/api/;` apunte al puerto correcto donde corre tu API Express.

## 5. Probar configuración

```bash
sudo nginx -t
```

## 6. Reiniciar NGINX

```bash
sudo systemctl restart nginx
```

## 7. Probar acceso

- Accede a `http://localhost/` para ver el frontend.
- Accede a `http://localhost/api/devices` (con JWT válido) para probar la API.

---

## Próximos pasos
- Configurar HTTPS (TLS) para producción.
- Integrar autenticación avanzada (JWT, OAuth2, WSO2, etc.).
- Integrar con Mender según documentación específica. 