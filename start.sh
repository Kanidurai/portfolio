#!/bin/bash
set -e

echo ""
echo "Kanimozhi D Portfolio"
echo ""

cd frontend

echo "Installing frontend dependencies..."
npm install --silent

echo "Starting frontend on http://localhost:3000 ..."
npm run dev
