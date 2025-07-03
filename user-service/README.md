# User Service

Este microservicio gestiona la lógica relacionada con los usuarios.

## Instalación

1. Instala las dependencias:
   ```bash
   npm install
   ```

2. Crea un archivo `.env` con la variable:
   ```env
   JWT_SECRET=tu_clave_secreta
   WSO2_JWKS_URI=tu_url_jwks
   ```

## Ejecución

```bash
node index.js
```

El servicio se ejecuta en el puerto **3001** por defecto.

## Endpoints principales

- `POST /users/token` — Genera un token de usuario
- `POST /users/validate` — Valida un token de usuario

## Notas
- Este microservicio es parte de una arquitectura de microservicios y debe ser accedido a través del API Gateway. 