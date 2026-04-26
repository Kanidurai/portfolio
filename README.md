# Kanimozhi D — Portfolio Web Application

A full-stack portfolio built with **React** (frontend) and **NestJS** (backend).

---

## 📁 Project Structure

```
portfolio/
├── backend/          # NestJS API server
│   ├── src/
│   │   ├── modules/
│   │   │   ├── portfolio/   # Portfolio data (skills, projects, experience...)
│   │   │   └── contact/     # Contact form API
│   │   ├── dto/             # Data Transfer Objects with validation
│   │   ├── app.module.ts
│   │   └── main.ts
│   ├── .env
│   └── package.json
│
└── frontend/         # React UI
    ├── src/
    │   ├── components/      # Navbar, Hero, Skills, Projects, Experience, Contact, Footer
    │   ├── hooks/           # usePortfolio custom hook
    │   ├── services/        # Axios API service layer
    │   └── styles/          # Global CSS design system
    ├── public/
    ├── .env
    └── package.json
```

---

## ⚡ Quick Start

### Prerequisites
- **Node.js** v18+ — https://nodejs.org
- **npm** v9+

---

### 1 — Clone / extract and navigate

```bash
cd portfolio
```

---

### 2 — Start the Backend (NestJS)

```bash
cd backend
npm install
npm run start:dev
```

Backend runs at → **http://localhost:5000**

Available API routes:
| Method | Route | Description |
|--------|-------|-------------|
| GET | /api/portfolio | All portfolio data |
| GET | /api/portfolio/about | About & contact info |
| GET | /api/portfolio/skills | Technical skills |
| GET | /api/portfolio/experience | Work experience |
| GET | /api/portfolio/projects | All projects |
| GET | /api/portfolio/projects/:id | Single project |
| GET | /api/portfolio/education | Education |
| GET | /api/portfolio/certifications | Certifications |
| POST | /api/contact | Submit contact message |
| GET | /api/contact/count | Message count |

---

### 3 — Start the Frontend (React)

Open a **new terminal tab**:

```bash
cd frontend
npm install
npm start
```

Frontend runs at → **http://localhost:3000**

---

### 4 — Open in Browser

Visit **http://localhost:3000** 🎉

---

## 🔧 Environment Variables

### Backend (`backend/.env`)
```
PORT=5000
FRONTEND_URL=http://localhost:3000
NODE_ENV=development
```

### Frontend (`frontend/.env`)
```
REACT_APP_API_URL=http://localhost:5000/api
```

---

## 📮 Contact Form

The contact form at `/api/contact` accepts:
```json
{
  "name": "string (2–100 chars)",
  "email": "valid email",
  "subject": "string (3–200 chars)",
  "message": "string (10–2000 chars)"
}
```

Messages are stored in-memory (restart clears them). To persist, swap the in-memory store in `backend/src/modules/contact/contact.service.ts` for a database of your choice (MongoDB, PostgreSQL, etc.).

---

## 🎨 Design

- **Dark editorial theme** with amber (`#f5a623`) accents
- **Fonts**: Syne (headings), Outfit (body), JetBrains Mono (code)
- **Fully responsive** — mobile-first
- **Smooth animations**: fade-in, typewriter, hover micro-interactions
- **Sections**: Hero/About · Skills · Projects · Experience · Contact
