# Device Service

Este microservicio gestiona la lógica relacionada con los dispositivos.

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

El servicio se ejecuta en el puerto **3002** por defecto.

## Endpoints principales

- `POST /devices/token` — Genera un token de dispositivo
- `POST /devices/validate` — Valida un token de dispositivo
- `GET /devices/info` — Obtiene información del dispositivo

## Notas
- Este microservicio es parte de una arquitectura de microservicios y debe ser accedido a través del API Gateway. 