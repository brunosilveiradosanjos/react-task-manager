# React Task Manager

## Project Overview

React Task Manager is a web application built with React and TypeScript, designed to help users organize and manage their tasks efficiently. The project was created to practice and showcase skills in modern web development, utilizing Vite for fast bundling and development.

## History & Creation

This project was created using the Vite scaffolding tool, which provides a quick and streamlined way to set up modern front-end projects. The setup process involved selecting React as the framework and TypeScript + SWC for faster build speeds.

The commands used to create this project:

```bash
pnpm create vite
# When prompted:
# - Project name: react-task-manager
# - Framework: React
# - Variant: TypeScript + SWC
# Followed by:
cd react-task-manager
pnpm install
pnpm run dev
```

## Styling with Tailwind CSS

Tailwind CSS was added to this project to enable a utility-first approach to styling components, following the official setup for Vite.

The commands used for installation:

```bash
pnpm add tailwindcss @tailwindcss/vite
npx tailwindcss init -p
```

### Configuration Steps

`vite.config.ts` If using the Tailwind plugin for Vite:

```typescript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
});
```

`src/index.css` Replace the contents of this file with the Tailwind base imports:

```typescript
@import 'tailwindcss'
```

## Important Links

[Vite Documentation](https://vite.dev/)

[Tailwind CSS Documentation](https://tailwindcss.com/docs/installation/using-vite)

## Author

- [@brunosilveiradosanjos](https://github.com/brunosilveiradosanjos)
