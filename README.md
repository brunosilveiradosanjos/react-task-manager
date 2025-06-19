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

```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
})
```

`src/index.css` should include:

```css
@import 'tailwindcss';
```

## Class Variance Authority (CVA)

[Class Variance Authority (CVA)](https://cva.style/docs) is a utility for building reusable and type-safe component className logic in Tailwind CSS. It helps manage variants and modifiers (like `size`, `variant`, `intent`) in a clean and scalable way.

CVA simplifies managing complex combinations of Tailwind classes without writing conditionals manually, promoting DRY and maintainable code.

### Installation

To add CVA to your project, run:

```bash
pnpm add class-variance-authority
```

### Example Usage

```ts
import { cva } from 'class-variance-authority'

export const button = cva('font-medium rounded', {
  variants: {
    intent: {
      primary: 'bg-blue-500 text-white',
      secondary: 'bg-gray-100 text-black',
    },
    size: {
      small: 'text-sm px-2 py-1',
      large: 'text-lg px-4 py-2',
    },
  },
  defaultVariants: {
    intent: 'primary',
    size: 'small',
  },
})
```

```tsx
<button className={button({ intent: 'secondary', size: 'large' })}>
  Click Me
</button>
```

## SVG Icons with Reusable Icon Component

The project now supports SVG icons as React components using the [`vite-plugin-svgr`](https://www.npmjs.com/package/vite-plugin-svgr) plugin. A reusable `Icon` component was created to simplify usage and enable Tailwind variants such as animation.

### Installation

```bash
pnpm add vite-plugin-svgr -D
```

### Configuration

In `vite.config.ts`:

```ts
import svgr from 'vite-plugin-svgr'

export default defineConfig({
  plugins: [react(), tailwindcss(), svgr()],
})
```

In `vite-env.d.ts`:

```ts
/// <reference types="vite-plugin-svgr/client" />
```

### Example Usage

```
import TrashIcon from './assets/icons/trash.svg?react'
import Icon from './components/icon'

<Icon svg={TrashIcon} />
```

## Important Links

[Vite Documentation](https://vite.dev/)

[Tailwind CSS Documentation](https://tailwindcss.com/docs/installation/using-vite)

[Class Variance Authority Documentation](https://cva.style/docs)

[Vite Plugin SVGR Documentation](https://www.npmjs.com/package/vite-plugin-svgr)

## Author

- [@brunosilveiradosanjos](https://github.com/brunosilveiradosanjos)
