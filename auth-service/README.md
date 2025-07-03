# Auth Service

Este microservicio gestiona la autenticación y validación de tokens.

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

El servicio se ejecuta en el puerto **3003** por defecto.

## Endpoints principales

- `POST /auth/generar` — Genera un token
- `POST /auth/validar-wso2` — Valida un token WSO2

## Notas
- Este microservicio es parte de una arquitectura de microservicios y debe ser accedido a través del API Gateway. 