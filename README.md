# URL Shortener - API Documentation

## Overview

A scalable and robust URL shortening service built with modern web technologies. This project provides a RESTful API to create, manage, and track shortened URLs, containerized with Docker for seamless deployment and scalability.

## Features

- Create short URLs from long URLs
- Redirect to original URLs using short codes
- Track URL statistics (e.g., access counts)
- Update and delete URLs
- RESTful API design
- Type-safe development with TypeScript
- Containerized with Docker for easy deployment
- PostgreSQL database with Prisma ORM for efficient data management

## Tech Stack

- **Backend**: Node.js, Express
- **Database**: PostgreSQL
- **ORM**: Prisma
- **Containerization**: Docker
- **Language**: TypeScript
- **Linting**: ESLint
- **Formatting**: Prettier

## Prerequisites

Before setting up the project, ensure you have the following installed:

- [Docker & Docker Compose](https://www.docker.com/get-started/)
- [Node.js](https://nodejs.org/) (version 16 or higher recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

## Project Structure

```
url-shortener/
├── src/
│   ├── app.ts            # Express application configuration
│   ├── server.ts         # Server entry point
│   ├── routes.ts         # API route definitions
│   ├── controllers.ts    # Route controllers for handling requests
│   ├── services.ts       # Business logic for URL operations
│   ├── middlewares.ts    # Custom Express middlewares
│   └── config.ts         # Application configuration
├── prisma/
│   ├── schema.prisma     # Prisma database schema
│   └── migrations/       # Database migration files
├── docker-compose.yml    # Docker Compose configuration
├── Dockerfile            # Docker container configuration
├── package.json          # Project dependencies and scripts
├── tsconfig.json         # TypeScript configuration
└── .env.example          # Example environment variables
```

## Setup Instructions

### Docker Setup

1. **Copy Environment File**:
   Create a `.env` file by copying the example:
   ```bash
   cp .env.example .env
   ```
   Update the `.env` file with your configuration (e.g., database credentials).

2. **Start Services**:
   Run the following command to build and start the application and database:
   ```bash
   docker-compose up --build
   ```

### Development Setup

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Copy Environment File**:
   Create a `.env` file by copying the example:
   ```bash
   cp .env.example .env
   ```
   Update the `.env` file with your configuration (e.g., database credentials).

3. **Start Development Server**:
   Launch the server in development mode:
   ```bash
   npm run dev
   ```

## API Endpoints

### Create Short URL

- **Method**: `POST`
- **Endpoint**: `/shorten`
- **Request Body**:
  ```json
  {
    "url": "https://example.com/long-url"
  }
  ```
- **Description**: Creates a short URL from a provided long URL.

### Redirect to Original URL

- **Method**: `GET`
- **Endpoint**: `/shorten/:shortCode`
- **Description**: Redirects to the original URL associated with the provided short code.

### Get URL Statistics

- **Method**: `GET`
- **Endpoint**: `/shorten/:shortCode/stats`
- **Description**: Retrieves access statistics for a specific short URL.

### Update URL

- **Method**: `PUT`
- **Endpoint**: `/shorten/:shortCode`
- **Request Body**:
  ```json
  {
    "newUrl": "https://updated-url.com"
  }
  ```
- **Description**: Updates the destination URL for a given short code.

### Delete URL

- **Method**: `DELETE`
- **Endpoint**: `/shorten/:shortCode`
- **Description**: Deletes a short URL and its associated data.

## API Testing

Test the API using the provided Insomnia collection:

- **File**: `insomnia/Insomnia_Collection.yaml`
- **Instructions**: Import the collection into [Insomnia](https://insomnia.rest/) to explore and test all API endpoints.

## Acknowledgments

Made with ❤️ by [𝕬zzᥲzᥱᥣ / 𝕬zzᥲzᥱrᥙ](https://github.com/Azzazeru)

⡇⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⢁⣿⣿⡏⠉⠉⠉⠉⠉⠉⠉⠉⠉⢹⣇⠉⠉⢳⣌⢉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⡇
⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⠇⠀⠀⢸⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣧⠀⠀⢻⣦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡇
⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⣰⠀⠀⢸⣿⣿⣿⡀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣷⣄⠀⠹⣿⣆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡇
⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⡇⠀⢸⢸⣿⡿⠿⢃⠀⠀⠀⠀⠀⠀⠀⠀⠈⠛⠻⠿⣿⣦⣀⠙⢿⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡇
⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⣈⣛⣋⡄⢨⣨⣶⣶⣶⣷⡶⡀⠀⠀⠀⠀⠀⢀⠀⢿⣷⣶⣶⣶⣶⣷⣤⣭⡅⠀⠀⠀⠀⠀⠀⠀⠀⠀⡇
⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⡄⣇⣟⠿⣿⣿⣷⣱⡀⠀⠀⠀⠀⢸⡄⢸⣿⠿⢛⠛⠛⠻⢿⡟⣽⠆⡀⠀⠀⠀⠀⠀⠀⠀⡇
⡇⠀⠀⠀⠀⠀⠀⠀⠂⠀⠀⠓⠀⠐⠒⠈⠻⣷⣌⠟⣿⣧⣵⡐⡄⠀⠀⠸⡿⠀⠀⠀⢀⡀⠀⠀⠀⠈⠃⢜⡁⠀⠀⠀⠀⠀⠀⠀⡇
⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⡐⠀⠀⠠⠤⠀⠀⠈⠻⣦⣽⣿⣿⣷⡜⠆⠀⠀⣵⡆⠀⠈⠛⠁⠀⠀⢢⡀⠘⢿⡇⠀⠀⠀⠀⠀⠀⠀⡇
⡇⠀⠀⠀⠀⠀⠀⠀⢀⢡⡀⢀⢠⠀⠀⠆⡀⣿⣧⣼⣿⣿⣿⣿⣯⣼⣷⣄⠸⣇⢠⣲⣤⣜⣠⢀⣾⠟⣠⣾⣇⠀⠀⣠⣤⠀⠀⠀⡇
⡇⠀⠀⠀⠀⠀⠀⠀⠈⠆⣩⣈⠻⣿⣿⠞⣡⡿⣻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣜⡢⢝⣻⠛⠋⠵⠖⠖⣢⣿⡇⠀⠀⣭⡹⣇⠀⠀⡇
⡇⠀⠀⠀⠀⠀⠀⠀⠀⠰⣶⣭⣛⣓⣂⣭⣵⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⡖⢶⠒⠿⠷⢿⣿⣿⡇⠀⠈⣿⢡⣿ ⠀⡇
⡇ ⠀⠀⠀⠀⠀⠀⠀⠀⠉⣋⠉⣫⣼⣿⣿⣿⣿⣿⣿⣿⡿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣾⣿⣶⣶⣾⣿⣿⠀⢀⡠⢟⣼⠏ ⠀⡇
⡇⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⢹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣇⢀⣼⡰⢛⣁⣀⣀⣀⡇