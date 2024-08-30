

# ReactronBase

ReactronBase is a boilerplate for building desktop applications using Electron and Vite. This template sets up a development environment with TypeScript, Tailwind CSS, and Electron, providing essential configurations for building and packaging your application. It is designed to accelerate development by offering a streamlined setup, rapid build processes, and powerful tooling for both the main and renderer processes.

## 📁 Project Structure

```plaintext
.
├── db/                     # Directory containing database files
│   └── dev.db              # SQLite database file
├── dist/                   # Compiled output directory for main process
├── libs/                   # Directory for native libraries (e.g., SQLite)
│   └── sqlite3.dll         # SQLite library for Windows
├── node_modules/           # Node.js dependencies
├── public/                 # Static assets (e.g., icons, images)
├── reactron-base-win32-x64 # Packaged application for Windows (x64)
├── src/                    # Source files
│   ├── assets/             # Assets like fonts and images
│   ├── libs/               # Source files for additional libraries
│   ├── main/               # Main process TypeScript files
│   ├── renderer/           # Renderer process TypeScript files
│   ├── types/              # TypeScript type definitions
│   └── styles.css          # Global styles
├── electron-windows-store-config.json # Configuration for Windows Store packaging
├── license.md              # License information
├── package.json            # Project metadata and scripts
├── package-lock.json       # Dependency lock file
├── postcss.config.js       # PostCSS configuration
├── readme.md               # Project overview and documentation
├── tailwind.config.js      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
└── vite.config.ts          # Vite configuration
```

## 🚀 Getting Started

To get started with ReactronBase, follow these steps:

### 1. Create a New Application

To quickly set up a new ReactronBase application, use the command-line tool:

```bash
npx create-reactronbase <app-name>
```

Replace `<app-name>` with your desired application name. This will:
- Create a new directory with the specified name.
- Set up the project with the necessary dependencies and configuration.

### 2. Clone the Repository (Alternative Method)

If you prefer to clone the repository and set up manually:

```bash
git clone https://github.com/ahadnawaz585/ReactronBase.git
cd ReactronBase
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Development Mode

To start the development server and Electron application simultaneously:

```bash
npm run dev
```

This will:
- Start the Vite development server for the renderer process.
- Launch Electron with the main process.

### 5. Build the Application

To build the application for production:

```bash
npm run build
```

This command will:
- Compile TypeScript files for the main process into the `dist/main` directory.
- Bundle and minify renderer process files using Vite.

### 6. Package the Application

To package the application for Windows (x64):

```bash
npm run package
```

This will create a packaged application in the `reactron-base-win32-x64` directory. It includes:
- The built renderer and main processes.
- The SQLite library (`libs/sqlite3.dll`).
- The SQLite database file (`db/dev.db`).

### 7. Rebuild SQLite Library

If you need to rebuild the SQLite library for a different version or configuration:

```bash
npm run rebuild-sql
```

## 🛠️ Development Tools

- **Vite**: Fast build tool and development server for the renderer process, providing a modern and efficient development experience.
- **Electron**: Framework for building cross-platform desktop applications with web technologies, enabling seamless integration between web and native functionalities.
- **TypeScript**: Adds static types to JavaScript for improved developer experience and robust code quality.
- **Tailwind CSS**: Utility-first CSS framework for building modern UIs, allowing rapid design and customization.

## 💡 Tips and Tricks

- **Database Location**: On Windows, you can find your application's database file in `%appdata%`. Navigate to the folder named after your application to locate `dev.db`.
- **Debugging**: Use Chrome DevTools for debugging the renderer process by launching Electron with `DEBUG=true`.
- **Better Development Environment**: Use `concurrently` or `npm-run-all` to run multiple scripts simultaneously (e.g., Vite and Electron). Install them using:

  ```bash
  npm install concurrently
  ```

  Update `package.json` scripts:

  ```json
  "scripts": {
    "start": "concurrently \"npm run dev:renderer\" \"npm run dev:main\"",
    "dev:renderer": "vite",
    "dev:main": "electron .",
    "build": "vite build && tsc",
    "package": "electron-packager . --platform=win32 --arch=x64",
    "rebuild-sql": "node rebuild-sql.js"
  }
  ```

## 🎨 Customizing the Application

- **Styles**: Modify `src/renderer/styles.css` to adjust the appearance of your application. Utilize Tailwind CSS for utility-first styling.
- **Configuration**: Update `electron-windows-store-config.json` for custom Windows Store packaging settings.

## 📦 Creating Components and Pages

### Creating Components

To create a new component, run:

```bash
npm run create:component <component-name>
```

Replace `<component-name>` with the desired name for your component. This command will:
- Generate a new component file in `src/renderer/components/`.
- Create a corresponding SCSS file for styling.

### Creating Pages

To create a new page, run:

```bash
npm run create:page <page-name>
```

Replace `<page-name>` with the desired name for your page. This command will:
- Create a new folder in `src/renderer/pages/` with the page name.
- Generate a TypeScript file and SCSS file for the page.
- Automatically update your routing configuration to include the new page.

## ❓ FAQ

**Q: What is ReactronBase?**

A: ReactronBase is a boilerplate for creating desktop applications using Electron and Vite. It provides a ready-to-use setup with TypeScript and Tailwind CSS.

**Q: How do I add new features to my application?**

A: You can add new features by modifying the files in the `src/` directory. For example, update `src/renderer` for UI changes or `src/main` for backend logic.

**Q: How can I update the SQLite library?**

A: To update the SQLite library, modify the `libs/` directory with the new library version and rebuild it using `npm run rebuild-sql`.

**Q: How do I seed or reset the database?**

A: Use the provided seeding and resetting methods in `src/main` or dedicated scripts. Refer to the [Seeding and Resetting the Database](#seeding-and-resetting-the-database) section for detailed instructions.

**Q: Where can I find more information about Electron and Vite?**

A: Refer to the [Electron Documentation](https://www.electronjs.org/docs) and the [Vite Documentation](https://vitejs.dev/) for more information.

Here's the updated section for your `README.md` file, including instructions for running Knex migrations:

---

## 🛠️ Seeding and Resetting the Database

### Seeding the Database

To seed your database with initial data, create a seeding script. You can add this script to the `src/main` directory or as a standalone script in your project.

Example seeding script (`seed.ts`):

```typescript
import { Database } from 'sqlite3';

const db = new Database('db/dev.db');

db.serialize(() => {
  db.run('CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, name TEXT, email TEXT)');
  
  const stmt = db.prepare('INSERT INTO users (name, email) VALUES (?, ?)');
  stmt.run('John Doe', 'john@example.com');
  stmt.finalize();
});

db.close();
```

Run the seeding script:

```bash
npx ts-node src/main/seed.ts
```

### Resetting the Database

To reset your database, you can drop existing tables and re-run the seeding script. Modify your seeding script to include table dropping commands:

```typescript
db.serialize(() => {
  db.run('DROP TABLE IF EXISTS users');
  db.run('CREATE TABLE users (id INTEGER PRIMARY KEY, name TEXT, email TEXT)');
  // Re-run seeding
});
```

Run the script to reset the database:

```bash
npx ts-node src/main/seed.ts
```

### Running Knex Migrations

To manage your database schema with Knex, use migrations. Follow these steps:

1. **Create a Migration File**

   Create a new migration file to define schema changes:

   ```bash
   npx knex migrate:make creating_schema
   ```

   This will generate a file like `YYYYMMDDHHMMSS_creating_schema.js` inside the `migrations` directory.

2. **Define Your Schema in the Migration File**

   Open the generated migration file and define your schema:

   ```javascript
   // migrations/YYYYMMDDHHMMSS_creating_schema.js
   exports.up = function (knex) {
     return knex.schema.createTable('example_table', (table) => {
       table.increments('id').primary();
       table.string('name').notNullable();
       table.timestamps(true, true);
     });
   };

   exports.down = function (knex) {
     return knex.schema.dropTable('example_table');
   };
   ```

3. **Run the Migrations**

   Apply the migrations to your database:

   ```bash
   npx knex migrate:latest
   ```

   This command will execute all pending migrations and update your database schema.


## 🚀 Upcoming Features

- **Enhanced ORM Integration**: Research and integrate an ORM (Object-Relational Mapping) library for improved database interactions. Options include [TypeORM](https://typeorm.io/), [Sequelize](https://sequelize.org/), or creating a custom base model for better data management.

- **Advanced Seeding and Migration**: Develop advanced seeding capabilities and migration scripts for managing database changes and updates.

- **Improved Development Environment**: Implement features to streamline development workflows, such as automated testing setups, enhanced build processes, and integrated debugging tools.

- **Additional Configuration Options**: Enhance configuration flexibility, including support for additional database engines and deployment platforms.

For updates on these upcoming features, follow the project on [GitHub](https://github.com/ahadnawaz585/ReactronBase) and participate in discussions and feature requests.

## 💬 Discussions

For discussions, feature requests, and community support, please visit the [GitHub Discussions page](https://github.com/ahadnawaz585/ReactronBase/discussions). Here, you can engage with other users and contributors, share ideas, and get help with any issues you encounter.

##

 📄 License

This project is licensed under the MIT License. See the [license.md](license.md) file for details.


### 🤝 Contributing

We welcome and appreciate contributions from the community! To ensure a smooth and effective collaboration, please follow these guidelines when contributing to the project:

#### 🛠️ How to Contribute

1. **Fork the Repository**:  
   Start by [forking](https://github.com/ahadnawaz585/ReactronBase) the repository to your GitHub account. This will create a copy of the repository where you can make changes.

2. **Clone Your Fork**:  
   Clone your forked repository to your local machine.
   ```bash
   git clone https://github.com/ahadnawaz585/ReactronBase
   cd your-repo-name
   ```

3. **Create a Branch**:  
   Create a new branch for your changes. Use a descriptive name that reflects the purpose of the branch.
   ```bash
   git checkout -b feature/your-feature-name
   ```

4. **Make Your Changes**:  
   Implement your changes in the new branch. Ensure that your code adheres to the project's coding standards and includes relevant tests if applicable.

5. **Commit Your Changes**:  
   Write clear and concise commit messages. Follow [conventional commit guidelines](https://www.conventionalcommits.org/en/v1.0.0/) to keep the commit history clean and understandable.
   ```bash
   git add .
   git commit -m "feat: add new feature X"
   ```

6. **Push to Your Fork**:  
   Push the changes in your branch to your forked repository.
   ```bash
   git push origin feature/your-feature-name
   ```

7. **Create a Pull Request**:  
   Navigate to the original repository and submit a [pull request](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/about-pull-requests) from your branch. Provide a detailed description of the changes you made and why they are necessary.

#### 🧪 Code Standards

- **Linting**: Ensure that your code passes the ESLint checks. Run `npm run lint` before committing your changes.
- **Formatting**: Use Prettier for consistent code formatting. Run `npm run format` to automatically format your code.
- **Tests**: If applicable, add tests for your changes and ensure all existing tests pass. Run `npm test` to execute the test suite.

#### 📜 Pull Request Guidelines

- **Descriptive Title**: Use a clear and descriptive title for your pull request that summarizes the changes.
- **Detailed Description**: Explain the motivation behind your changes, any issues it fixes, and how to test the new feature or fix.
- **Link to Issues**: If your pull request addresses an issue, link to the relevant issue(s) using the `Fixes #issue_number` syntax.
- **Review Process**: Be patient during the review process. The maintainers may request changes or ask questions. Please address feedback promptly.

#### 📝 Additional Notes

- **Documentation**: If your contribution involves new features or changes to existing functionality, update the relevant documentation.
- **Community Guidelines**: Be respectful and considerate in all interactions. Follow our [Code of Conduct](#) to maintain a positive and collaborative environment.



## 📚 Documentation

For more details about the technologies used in this project, refer to the following resources:
- [Electron Documentation](https://www.electronjs.org/docs)
- [Vite Documentation](https://vitejs.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

## 📞 Contact

For support or questions, please open an issue on [GitHub](https://github.com/ahadnawaz585/ReactronBase/issues) or contact the project maintainers directly.

