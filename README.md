# Web App Builder Project

Full‑stack app with a React (Vite) client and Node/Express server. The client talks to the server API, and the server uses MongoDB Atlas.

## Project Structure
- `client/` — React + Vite frontend
- `server/` — Express backend

## Prerequisites
- Node.js 18+ (recommended)
- MongoDB Atlas account (or local MongoDB)

## Setup
1. Install dependencies:
```bash
cd client
npm install

cd ../server
npm install
```

2. Create `server/.env` with:
```bash
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
JWT_EXPIRES_IN=7d
GEMINI_API_KEY=your_gemini_api_key
CLIENT_URL=http://localhost:5173
```

3. Start the backend:
```bash
cd server
npm run dev
```

4. Start the frontend:
```bash
cd client
npm run dev
```

Open the app at `http://localhost:5173`.

## API Endpoints
Base URL: `http://localhost:5000/api`

- `POST /auth/register`
- `POST /auth/login`
- `GET /auth/me` (requires `Authorization: Bearer <token>`)
- `POST /auth/logout` (requires `Authorization: Bearer <token>`)

## Notes
- Do not commit `.env` or `node_modules`.
- Update `CLIENT_URL` in production to your deployed frontend URL.

