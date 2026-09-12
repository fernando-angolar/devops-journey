# Projeto 02 - API Node.js

API HTTP mínima para a jornada Cloud Native.

## Rotas

- `GET /` → JSON com message + hostname
- `GET /health` → `{ "status": "ok" }`

## Local

```bash
node server.js
curl http://localhost:3000/health