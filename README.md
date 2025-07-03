# Meder-api - Arquitectura de Microservicios

Este proyecto implementa una arquitectura de microservicios para la gestión de usuarios, dispositivos y autenticación, utilizando Node.js y Express.

## Estructura del Proyecto

- `user-service/` — Microservicio de usuarios
- `device-service/` — Microservicio de dispositivos
- `auth-service/` — Microservicio de autenticación
- `gateway/` — API Gateway (punto de entrada único)

Cada microservicio tiene su propio README con instrucciones específicas.

## Requisitos previos

- Node.js >= 14.x
- npm

## Instalación y ejecución

1. **Clona el repositorio y entra en la carpeta raíz.**

2. **Instala las dependencias en cada microservicio y el gateway:**
   ```bash
   cd user-service && npm install && cd ..
   cd device-service && npm install && cd ..
   cd auth-service && npm install && cd ..
   cd gateway && npm install && cd ..
   ```

3. **Configura las variables de entorno**
   - Crea un archivo `.env` en cada microservicio con las variables necesarias (ver los README de cada uno).

4. **Inicia los microservicios y el gateway (en terminales separadas):**
   ```bash
   cd user-service && node index.js
   cd device-service && node index.js
   cd auth-service && node index.js
   cd gateway && node index.js
   ```

## Uso

- Todas las peticiones deben hacerse al API Gateway (por defecto en `http://localhost:3000`).
- El gateway redirige las rutas a los microservicios correspondientes:
  - `/users` → User Service
  - `/devices` → Device Service
  - `/auth` → Auth Service

Consulta los README de cada microservicio para ver los endpoints disponibles y ejemplos de uso.

## Notas
- No interactúes directamente con los microservicios, siempre hazlo a través del gateway.
- Puedes escalar, modificar o agregar nuevos microservicios fácilmente siguiendo este patrón.

---

© 2024 - Arquitectura Zero Trust / Microservicios - Meder-api 