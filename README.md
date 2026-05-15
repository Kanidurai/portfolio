# Kanimozhi D Portfolio

A frontend-only static portfolio built with React.

## Project Structure

```text
portfolio/
├── frontend/
│   ├── public/
│   │   ├── index.html
│   │   ├── resume.html
│   │   └── resume.pdf
│   ├── src/
│   │   ├── components/
│   │   ├── contexts/
│   │   ├── data/
│   │   ├── pages/
│   │   ├── styles/
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
├── README.md
└── start.sh
```

## Quick Start

```bash
cd frontend
npm install
npm run dev
```

The site runs at `http://localhost:3000`.

## Build

```bash
cd frontend
npm run build
```

## Notes

- Portfolio content is stored in `frontend/src/data/portfolioData.js`.
- There is no backend, API service, authentication, database, or environment-based API configuration.
- The existing UI, animations, layout, routing, and responsive behavior are kept in the React frontend.
