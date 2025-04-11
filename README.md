# react-express-docker-starter
A template for building full-stack applications with React, Express and Docker containerization

---

## Setup Instructions

### Create a React App
To create a new React app with Vite (JavaScript):
```bash
npm create vite@latest my-app
```

### Create an Express App
To create a new Express app:
```bash
npm init -y
```
> The `-y` flag automatically answers "yes" to all prompts during initialization, creating a `package.json` with default values.

---

## Running the Application

### Build and Start with Docker
To build and start the application using Docker Compose:
```bash
docker-compose up -d --build
```
- **`-d`**: Runs the containers in detached mode.
- **`--build`**: Forces a rebuild of the Docker images.

---

### Utils docker commands
```bash
docker exec -it <container_id> sh
# example npm install
docker-compose run --rm client npm install axios
docker-compose run --rm server npm install passport-local
# create migration
docker-compose run --rm server npx sequelize-cli migration:generate --name create-users-table
# run migrations
docker-compose run --rm server npx sequelize-cli db:migrate
# rollback
docker-compose run --rm server npx sequelize-cli db:migrate:undo:all
```
