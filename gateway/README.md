# API Gateway

Este servicio actúa como punto de entrada único para los microservicios del sistema.

## Instalación

1. Instala las dependencias:
   ```bash
   npm install
   ```

## Ejecución

```bash
node index.js
```

El gateway se ejecuta en el puerto **3000** por defecto.

## Funcionalidad

- Redirige las peticiones a los microservicios:
  - `/users` → User Service (puerto 3001)
  - `/devices` → Device Service (puerto 3002)
  - `/auth` → Auth Service (puerto 3003)

## Notas
- Los clientes deben interactuar únicamente con el gateway, nunca directamente con los microservicios. 