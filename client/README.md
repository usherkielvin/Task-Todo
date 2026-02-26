# Go React Daily Tasks

A showcase web app for managing daily tasks.

## Tech Stack
- React (Vite)
- TypeScript
- Chakra UI
- Go (Fiber)
- MongoDB

## Live Demo
[task-todo-production-70f3.up.railway.app](https://task-todo-production-70f3.up.railway.app/)

## Getting Started

### Backend (Go + Fiber)
1. Install Go and MongoDB.
2. Set up your `.env` file with your MongoDB URI.
3. Run:
   ```sh
   go run main.go
   ```

### Frontend (React + Vite)
1. Navigate to the `client` folder:
   ```sh
   cd client
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm run dev
   ```

### Production Build
- To build the frontend for production:
  ```sh
  npm run build
  ```

## Environment Variables

Create a `.env` file in the root directory with the following:

```
PORT=5000
MONGODB_URI=your-mongodb-uri-here
```

Replace `your-mongodb-uri-here` with your actual MongoDB connection string.
