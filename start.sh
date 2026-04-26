#!/bin/bash
# ─────────────────────────────────────────────
#  Kanimozhi Portfolio — Start Script (Unix)
# ─────────────────────────────────────────────
set -e

echo ""
echo "  ╔══════════════════════════════════════╗"
echo "  ║   Kanimozhi D — Portfolio Launcher   ║"
echo "  ╚══════════════════════════════════════╝"
echo ""

# Install backend deps
echo "📦 Installing backend dependencies..."
cd backend && npm install --silent
echo "✅ Backend dependencies installed"

# Install frontend deps
echo "📦 Installing frontend dependencies..."
cd ../frontend && npm install --silent
echo "✅ Frontend dependencies installed"

cd ..

echo ""
echo "🚀 Starting backend on http://localhost:5000 ..."
cd backend && npm run start:dev &
BACKEND_PID=$!

sleep 3

echo "🎨 Starting frontend on http://localhost:3000 ..."
cd ../frontend && npm start &
FRONTEND_PID=$!

echo ""
echo "  ✨ Both servers are running!"
echo "  → Frontend: http://localhost:3000"
echo "  → Backend:  http://localhost:5000/api/portfolio"
echo ""
echo "  Press Ctrl+C to stop both servers."
echo ""

# Wait and handle shutdown
trap "kill $BACKEND_PID $FRONTEND_PID 2>/dev/null; echo 'Servers stopped.'; exit 0" SIGINT SIGTERM
wait
