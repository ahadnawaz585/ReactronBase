
# ReactronBase

ReactronBase is a boilerplate for building desktop applications using Electron and Vite. This template sets up a development environment with TypeScript, Tailwind CSS, and Electron, providing essential configurations for building and packaging your application.

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

- **Vite**: Fast build tool and development server for the renderer process.
- **Electron**: Framework for building cross-platform desktop applications with web technologies.
- **TypeScript**: Adds static types to JavaScript for improved developer experience.
- **Tailwind CSS**: Utility-first CSS framework for building modern UIs.

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

- **Styles**: Modify `src/renderer/styles.css` to adjust the appearance of your application.
- **Configuration**: Update `electron-windows-store-config.json` for custom Windows Store packaging settings.

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

## 🛠️ Seeding and Resetting the Database

### Seeding the Database

To seed your database with initial data, create a seeding script. You can add this script to the `src/main` directory or as a standalone script in your project.

Example seeding script (`seed.ts`):

```typescript
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

async function seedDatabase() {
  const db = await open({
    filename: 'db/dev.db',
    driver: sqlite3.Database,
  });

  // Add seed data
  await db.run('INSERT INTO users (name, email) VALUES (?, ?)', ['John Doe', 'john@example.com']);
  
  console.log('Database seeded successfully.');
  await db.close();
}

seedDatabase().catch((error) => console.error('Failed to seed database:', error));
```

Run the seeding script as part of your application setup or manually execute it.

### Resetting the Database

To reset your database, you can delete the existing `db/dev.db` file and let your application recreate it. This can be done manually or through a script.

Example reset script (`reset-db.ts`):

```typescript
import { unlink } from 'fs';
import { open } from 'sqlite';
import sqlite3 from 'sqlite3';

async function resetDatabase() {
  try {
    // Delete the existing database file
    unlink('db/dev.db', async (err) => {
      if (err) throw err;

      // Recreate the database and initialize schema
      const db = await open({
        filename: 'db/dev.db',
        driver: sqlite3.Database,
      });

      // Initialize schema
      await db.run('CREATE TABLE users (id INTEGER PRIMARY KEY, name TEXT, email TEXT)');
      
      console.log('Database reset and schema initialized.');
      await db.close();
    });
  } catch (error) {
    console.error('Failed to reset database:', error);
  }
}

resetDatabase();
```

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

## 📚 Documentation

For more details about the technologies used in this project, refer to the following resources:
- [Electron Documentation](https://www.electronjs.org/docs)
- [Vite Documentation](https://vitejs.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

## 📞 Contact

For support or questions, please open an issue on [GitHub](https://github.com/ahadnawaz585/ReactronBase/issues) or contact the project maintainers directly.

