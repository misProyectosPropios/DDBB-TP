# DDBB-TP

Boilerplate para una app de registro de entrenamientos con Node.js, TypeScript, frontend Vanilla TS y PostgreSQL.

## Estructura

- `frontend`: app Vanilla TS con Vite en `http://localhost:3000`.
- `backend`: API Express + TypeScript en `http://localhost:8000`.
- `database`: scripts SQL iniciales para PostgreSQL.

## Desarrollo

1. Instalar dependencias:

```bash
npm install
```

2. Copiar variables del backend:

```bash
cp backend/.env.example backend/.env
```

3. Crear la base y las tablas con los scripts de `database`.

4. Levantar frontend y backend:

```bash
npm run dev
```

El frontend muestra `Hola mundo` y llama a `GET http://localhost:8000/`, que responde `Backend alive` si puede conectarse a PostgreSQL.
