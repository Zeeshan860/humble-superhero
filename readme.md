# 🦸‍♂️ Humble Superhero

A full-stack application where users can add and view superheroes ranked by their **humility score**.

## 🚀 Features
- **Backend (NestJS)**
  - REST API for managing superheroes
  - Validations using `class-validator`
  - Unit & integration testing with Jest
- **Frontend (React + Vite)**
  - UI to display superheroes in a **MUI table**
  - Form to add a new superhero
  - Uses Axios to interact with the backend
- **Environment Configurations**
  - Uses `.env` for API configurations
- **Testing**
  - Unit & E2E tests with Jest & Supertest

---


## 🤝 Collaboration Guidelines
## 1️⃣ Project Setup
Clone the repository & install dependencies

Run the backend (server/) & frontend (ui/)
Use

.env files for API URLs
## 2️⃣ How We Work
Task | Assignee |	Description
--- | --- | ---
Backend Enhancements |	Developer A	 | Add database integration (PostgreSQL/MongoDB)
Frontend Improvements |	Developer B |	Improve UI & state management (React Context/Redux)
Testing	| Developer C	| Expand unit & E2E tests
Deployment Setup |	Developer D |	Docker, CI/CD, AWS deployment

## 3️⃣ Using Git Properly
Create a feature branch:
```sh
git checkout -b feature/add-authentication
```

Commit changes:
```sh
git commit -m "Added JWT authentication"
```
Push & create a Pull Request:
```sh
git push origin feature/add-
```

## ⏳ If I Had More Time...
If I had more time, I would improve and explore:

- 🔐 Authentication & Authorization → Secure API with JWT/OAuth
- 🗄️ Database Integration → Use PostgreSQL or MongoDB instead of in-memory storage
- 📊 Real-Time Updates → Implement WebSockets or GraphQL subscriptions
- 🌍 Deployment & CI/CD → Automate deployment using AWS or Vercel
- 🎨 UI Enhancements → Improve design
- 📈 Leaderboard Feature → Show top 3 most humble superheroes dynamically
- ✅ UI Validations → Add proper form validations in the frontend to ensure correct user input before sending requests
