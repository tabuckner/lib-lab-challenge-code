Include details about your design in this file.

## Overview
A _very_ basic SPA to browse the three requested entities of "The One API".

## Architecture
This project attempts to follow a sensible modular architecture wherein app-wide constructs are stored at the "top level" (`./src/app`) of the project, and other feature scoped constructs are held within `./src/app/features`. Each feature module follows roughly the same structure with a directory for each of the following: api, components, pages, routes, types. Barrel exports are used throughout the project to ensure clean import statements, and because I like them :P.

### Diagram
```
./src/app
├── app.routes.tsx
├── app.spec.tsx
├── app.tsx
├── components
│   ├── elements
│   │   ├── index.ts
│   │   ├── list-item
│   │   └── related-resource-section
│   └── layout
│       ├── app-shell
│       ├── details-view
│       ├── index.ts
│       └── list-view
├── features
│   ├── books
│   │   ├── api
│   │   ├── components
│   │   ├── index.ts
│   │   ├── pages
│   │   ├── routes
│   │   └── types
│   ├── characters
│   │   ├── api
│   │   ├── components
│   │   ├── index.ts
│   │   ├── pages
│   │   ├── routes
│   │   └── types
│   ├── home
│   │   ├── components
│   │   ├── constants
│   │   ├── index.ts
│   │   ├── pages
│   │   ├── routes
│   │   └── types
│   ├── movies
│   │   ├── api
│   │   ├── components
│   │   ├── index.ts
│   │   ├── pages
│   │   ├── routes
│   │   └── types
│   └── quotes
│       ├── api
│       ├── components
│       ├── index.ts
│       ├── pages
│       ├── routes
│       └── types
├── hooks
│   ├── get-id-from-route.ts
│   └── index.ts
├── nx-welcome.tsx
└── types
    └── index.ts
```

## Main (App) Module
This "module" differs slightly from the feature modules in it's organization. Here you'll find directories like components, features, hooks, and types.

### Components
App-wide components like "Elements" (smaller or more generic building blocks), and "Layouts" used to ensure common layout throughout the app.

### Features
Our feature modules.

### Hooks
App-wide hooks -- nothing too crazy for this project.

### Types
App-wide types; only one in this app's case.

## Feature Modules
### API
Designed as a sort of service layer that interacts with the API for each feature module. Custom data-fetching hooks are contained here.

### Components
Reusable components that are used to construct different "pages" or views

### Pages
Components that are designed to be route terminals for the feature module. Here you will find things like "List View" pages and "Details View" pages.

### Routes
A single place to contain all route definitions for a given feature module.

### Types
Types related to a given feature module. Typically will contain entity models.

## NX Monorepo
I'm a fan of the NX Monorepo libraries and have chosen to use it for this project. I enjoy their schematics and tend to reach for these sorts of tools to speed up my development process. These schematics are fully customizable as well, however in this project I just used their "defaults".

## Data Fetching
For data fetching, I chose to keep things simple with Tanstack's react-query and the native `fetch()` API. In a 'real-world' app, I might reach for a different technology depending on needs. For this use-case it was fine.

## App Design
I chose to keep the UX/UI _very_ simple for this app. What you'll find is a few different List Views and Details views. All of the list items will be some variant of a Card. If given more time, of course I would have made the UI much more pleasing to the eyes. This does surface the appropriate information, but leaves much to be desired from my perspective. For this challenge I chose to lean towards feature completeness and code-quality, rather than UI.

For example, perhaps a responsive drawer would be a good addition that would be revealed either all the time, or only on mobile. There a user could navigate between each entity, rather than needing to return home and select a new entity from the main nav. Again, I focused on organization and code quality rather than how pretty the UI was. What was implemented _does work_ although is not my most favorite work. I generally like to lean on talented UI designers to make things look very polished, and have no issues making things pixel perfect.