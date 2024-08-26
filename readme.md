

# ReactronBase 🚀

![ReactronBase Logo](/src/assets/images/icon.png)

ReactronBase is a robust boilerplate project designed for modern web and desktop applications. It integrates a variety of technologies including React, Tailwind CSS, Electron, SCSS, TypeScript, and Prisma, providing a solid foundation for building scalable applications.

## Table of Contents

- [Technologies](#technologies)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Development Commands](#development-commands)
- [Frontend Development](#frontend-development)
- [Backend Development](#backend-development)
- [Database Schema](#database-schema)
- [Contributing](#contributing)
- [License](#license)
- [Upcoming Features](#upcoming-features)
- [Example Apps](#example-apps)

## Technologies

- **React**  
  ![React Logo](https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png)

- **Tailwind CSS**  
  ![Tailwind CSS Logo](https://seeklogo.com/images/T/tailwind-css-logo-5AD4175897-seeklogo.com.png)

- **Electron**  
  ![Electron Logo](https://github.com/devicons/devicon/raw/master/icons/electron/electron-original.svg)

- **SCSS**  
  ![SCSS Logo](https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/1200px-Sass_Logo_Color.svg.png)

- **TypeScript**  
  ![TypeScript Logo](https://github.com/devicons/devicon/raw/master/icons/typescript/typescript-original.svg)

- **Prisma**  
  ![Prisma Logo](https://github.com/devicons/devicon/raw/master/icons/prisma/prisma-original.svg)

## Project Structure

Here’s an overview of the project structure:

```
ReactronBase/
│
├── dist/                          # Compiled output
├── node_modules/                  # Node.js dependencies
├── package.json                   # Project metadata and dependencies
├── package-lock.json              # Exact versions of dependencies
├── postcss.config.js              # PostCSS configuration
├── prisma/                        # Prisma schema and configuration
│   └── schema.prisma
├── public/                        # Public assets
│   └── assets/
│       └── images/
│           └── logo.png
├── src/                           # Source code
│   ├── db/                        # Database related files
│   │   ├── helper/
│   │   ├── models/
│   │   ├── reset.js
│   │   ├── reset.ts
│   │   ├── seeder.js
│   │   └── seeder.ts
│   ├── main/                      # Main process files for Electron
│   │   ├── index.ts
│   │   └── preload.ts
│   ├── renderer/                  # Renderer process files
│   │   ├── app/
│   │   │   ├── components/
│   │   │   ├── modules/
│   │   │   └── pages/
│   │   ├── index.html
│   │   ├── index.scss
│   │   ├── index.tsx
│   │   └── styles.css
│   ├── types/                     # TypeScript type definitions
│   │   └── images.d.ts
│   └── utils/                     # Utility functions
└── webpack.config.js              # Webpack configuration
```

## Getting Started

To get started with ReactronBase, follow these steps:

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/ReactronBase.git
cd ReactronBase
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Create a New Project

You can quickly set up a new project using the command:

```bash
npx create-electronbase <app-name>
```

Replace `<app-name>` with the name of your new application. This command will scaffold a new project with ReactronBase as the starting point.

### 4. Build the Project

To build the project for production, including both renderer and main processes:

```bash
npm run build
```

This command performs two key tasks:

- **`build:renderer`**: Uses Vite to build the frontend assets. This includes transforming and bundling your React components and styles into optimized static files.
  
- **`build:main`**: Compiles TypeScript files for the Electron main process using `tsc` (TypeScript Compiler), outputting the result into the `dist/main` directory.

### 5. Start the Development Server for Web

To start the development server and view the app in your browser:

```bash
npm start
```

This command will serve the frontend files on `localhost:9000` and open your default web browser to this address.

### 6. Start the Development Server for Electron

To start the development server and run the Electron app:

```bash
npm run electron
```

This command launches the Electron application, integrating the built React frontend within a desktop window.

## Development Commands

Here are some useful commands for development and production:

- **Start Development Server:** `npm run dev`  
  Runs both Vite for the web and Electron for the desktop in development mode.

- **Build Project:** `npm run build`  
  Builds both the frontend and Electron main process for production.

- **Start Electron App:** `npm run electron`  
  Runs the Electron app with the built files.

- **Package Electron App:** `npm run package`  
  Packages the Electron app for Windows (`win32`) and x64 architecture, including Asar packaging.

- **Reset Database:** `npm run reset`  
  Resets the database to its initial state.

- **Seed Database:** `npm run seed`  
  Seeds the database with initial data.

- **Force-Seed Database:** `npm run force-seed`  
  Resets and seeds the database with initial data.

## Frontend Development

The frontend code is located in the `src/renderer` directory. The main entry point is `app.tsx` in `src/renderer/app`.

### Development Commands for Frontend

- **Compile SCSS:** SCSS files are compiled to CSS as part of the build process.
- **Build Frontend:** Use `npm run build:renderer` to bundle the frontend assets using Vite.

## Backend Development

The backend code, including database operations and models, is located in the `src/db` directory.

### Database Schema

The database schema is defined in `prisma/schema.prisma`. To update the schema, modify this file and run:

```bash
npx prisma migrate dev
```

### Seed or Reset the Database

To manage your database:

- **Reset the Database:** 

  ```bash
  npm run reset
  ```

- **Seed the Database:**

  ```bash
  npm run seed
  ```

- **Force-Seed the Database:** 

  ```bash
  npm run force-seed
  ```

## Contributing

We welcome contributions to ReactronBase! To contribute:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Make your changes and commit them.
4. Open a pull request with a clear description of your changes.

If you find this project useful, please give it a ⭐️ star on GitHub!

## License

ReactronBase is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Upcoming Features

We are working on several exciting features, including:

- **Electron Packaging**: Simplified packaging of your Electron application for distribution.
- **Enhanced User Interface**: Additional UI components and improvements.
- **Advanced Configuration**: More options for customizing development and build processes.

## Example Apps

Check out our upcoming example apps to see ReactronBase in action and get inspiration for your own projects!

