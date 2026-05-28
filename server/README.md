# Server (Express + MongoDB)

Run the server locally:

```bash
cd server
npm install
cp .env.example .env
# edit .env to point MONGO_URI if needed
npm run dev # requires nodemon or use npm start
```

API endpoints:
- `GET /api/health` - health check
- `GET /api/users` - list users
- `POST /api/users/register` - register user { name, email }
