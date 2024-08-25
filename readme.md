
# ReactronBase


![ReactronBase Logo](/public/assets/images/icon.png)

ReactronBase is a boilerplate project that combines modern web technologies and frameworks to provide a robust starting point for web and desktop applications. This project integrates React, Tailwind CSS, Electron, SCSS, TypeScript, and Prisma to deliver a powerful development environment for creating scalable applications.

## Table of Contents

- [Technologies](#technologies)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Frontend Development](#frontend-development)
- [Backend Development](#backend-development)
- [Database Schema](#database-schema)
- [Commands](#commands)
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

Here is an overview of the project structure:

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
│   └── Utils/                     # Utility functions
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

### 3. Build the Development 

To build the development server and run the Electron app:

```bash
npm run build
```
![ReactronBase Logo](/public/assets/images/build.png)
### 4. Start the Development Server on Web

To start the development server and run the browser:

```bash
npm start
```
![ReactronBase Entry](/public/assets/images/start.png)
![ReactronBase Entry](/public/assets/images/entry.png)

### 5. Start the Development Server on Electron

To start the development server and run the Electron app:

```bash
npm run electron
```
![ReactronBase Entry](/public/assets/images/electron.png)
![ReactronBase Entry](/public/assets/images/electronEntry.png)

## Frontend Development

The frontend code is located in the `src/renderer` directory, with the main entry point being `app.tsx` in `src/renderer/app`.

### Development Commands

- **Compile SCSS:** SCSS files are compiled to CSS as part of the build process.
- **Build Frontend:** Use Webpack to bundle the frontend assets.

```bash
npm run build
```

## Backend Development

The backend code, including database operations and models, is located in the `src/db` directory.

### Database Schema

The database schema is defined in `prisma/schema.prisma`. To update the schema, modify this file and run:

```bash
npx prisma migrate dev
```

### Seed|Reset the Database

Navigate to the `src/db` directory and run the following commands to reset the database and seed the database:

```bash
npm run reset  # Reset the database
npm run seed   # Seed the database with initial data
npm run force-seed   # First reset the database and then seed it with initial data
```

## Commands

Here are some useful commands for development and production:

- **Start Development Server:** `npm start`
- **Build Project:** `npm run build`
- **Reset Database:** `npm run reset`
- **Seed Database:** `npm run seed`
- **Force-Seed Database:** `npm run force-seed`

## Contributing

Contributions to ReactronBase are welcome! Please follow these guidelines for contributing:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Make your changes and commit them.
4. Open a pull request with a clear description of your changes.

## License

ReactronBase is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Upcoming Features

We are working on several exciting features for ReactronBase, including:

- **Electron Packaging**: Easily package your Electron application for distribution.
- **Enhanced User Interface**: Additional UI components and improvements.
- **Advanced Configuration**: More options for customizing the development and build processes.

## Example Apps

Some Example Apps will be added soon to help user check the design pattern !

Feel free to check them out for inspiration or to see how ReactronBase can be used in real-world scenarios!

