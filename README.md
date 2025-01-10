# trcp-fastify-vue3

## Description

This repository contains a full-stack application using Fastify, tRPC, and Vue 3. The project is structured into multiple packages for backend (BFF) and frontend (Front) development.

## Packages

### `@trcp-fastify-vue3/bff`

This package contains the backend logic using Fastify and tRPC.

#### Scripts

- `dev`: Starts the development server using `ts-node`.
- `build`: Builds the project using `tsup`.
- `start`: Builds the project and starts the server.
- `lint`: Runs ESLint to fix code style issues.

#### Dependencies

- `@fastify/cors`
- `@trpc/server`
- `fastify`
- `fastify-plugin`
- `zod`

### `@trcp-fastify-vue3/front`

This package contains the frontend logic using Vue 3.

#### Scripts

- `dev`: Starts the Vite development server.
- `build`: Builds the project using Vite.
- `preview`: Previews the built project.
- `test:unit`: Runs unit tests using Vitest.
- `test:e2e`: Runs end-to-end tests using Playwright.
- `lint`: Runs ESLint to fix code style issues.
- `format`: Formats the code using Prettier.

#### Dependencies

- `@tanstack/vue-query`
- `@trpc/client`
- `pinia`
- `vue`
- `vue-router`
- `zod`

## Getting Started

### Prerequisites

- Node.js
- pnpm

### Installation

1. Clone the repository:

    ```bash
    git clone <repository-url>
    ```

2. Install dependencies:

    ```bash
    pnpm install
    ```

### Running the Application

1. Start the development servers:

    ```bash
    pnpm dev
    ```

2. The backend server will be available at `http://localhost:3000`.
3. The frontend server will be available at `http://localhost:5173`.

### Building the Application

1. Build the backend:

    ```bash
    pnpm --filter @trcp-fastify-vue3/bff build
    ```

2. Build the frontend:

    ```bash
    pnpm --filter @trcp-fastify-vue3/front build
    ```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the ISC License.
