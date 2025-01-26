# Skill Development Platform Monorepo

This repository is a monorepo for a skill development platform built using **npm workspaces** and **Turborepo**. It includes two Next.js projects:

1. **UserApp**: A web application for students to apply for courses and jobs.
2. **JobProviders**: A web application for job providers to post job opportunities and manage applicants.

---

## Folder Structure

```
root/
|-- apps/
|   |-- userapp/         # Next.js project for students
|   |-- docs/    # Next.js project for job providers
|
|-- packages/
|    |-- shared/          # Shared utilities and components
|    |-- db/
|    |-- ui/
|-- .turbo                # Turborepo cache
|-- package.json         # Root package.json defining workspaces
|-- turbo.json           # Turborepo configuration
```  

---

## Prerequisites

- **Node.js** (v16 or above)
- **npm** (v8 or above)
- Familiarity with Next.js and Turborepo

---

## Installation

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

---

## Commands

### Development

To run both apps in development mode:
```bash
npm run dev
```

To run an individual app:
```bash
cd apps/userapp
npm run dev
# OR
cd apps/docs
npm run dev
```

### Build

To build all apps:
```bash
npm run build
```

To build an individual app:
```bash
cd apps/userapp
npm run build
# OR
cd apps/docs
npm run build
```

### Lint

To lint all apps:
```bash
npm run lint
```

To lint an individual app:
```bash
cd apps/userapp
npm run lint
# OR
cd apps/docs
npm run lint
```

---

## Turborepo Configuration

<<<<<<< HEAD
Turborepo is used for efficient builds and caching.

- **`turbo.json`**:
```json
{
  "pipeline": {
    "build": {
      "dependsOn": ["^build"],
      "outputs": ["dist/**"]
    },
    "dev": {
      "cache": false
    }
  }
}
```

---

## Shared Components and Utilities

Shared logic and components (e.g., form validators, UI components) are located in the `packages/shared` directory.

To use shared utilities or components:
```javascript
import { SomeComponent } from '@shared/components';
```

---

## Scripts in Root `package.json`

```json
{
  "scripts": {
    "dev": "turbo run dev",
    "build": "turbo run build",
    "lint": "turbo run lint"
  },
  "workspaces": [
    "apps/*",
    "packages/*"
  ]
}
```

---

## Individual Project Details

### **UserApp**
Path: `apps/userapp`

- **Features**:
  - Browse and apply for courses
  - Apply for job opportunities
  - Track application status

- **Scripts**:
  ```json
  {
    "scripts": {
      "dev": "next dev",
      "build": "next build",
      "start": "next start",
      "lint": "next lint"
    }
  }
  ```

---

### **JobProviders**
Path: `apps/docs`

- **Features**:
  - Post job opportunities
  - Manage applicants
  - Track job postings

- **Scripts**:
  ```json
  {
    "scripts": {
      "dev": "next dev",
      "build": "next build",
      "start": "next start",
      "lint": "next lint"
    }
  }
  ```

---

## Contribution

1. Fork the repository.
2. Create a new branch.
3. Commit your changes.
4. Open a pull request.

---

## License

This project is licensed under the MIT License.
=======
- [Tasks](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/repo/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
- [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
- [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)
  ////
  docker run -e POSTGRES_PASSWORD=kartikey -d -p 5432:5432 postgres
  url : postgresql://postgres:kartikey@localhost:5432/postgres
>>>>>>> 7ddd839 (Added feedbackpage)
