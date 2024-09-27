# Project Description

Front end React app for Social media

## Table of Contents

- Installation
- Creating .env file
- Run App
- Folder Structure
- Technical Decisions
- Component Structure
- External packages
- Links
- Author

## Installation

### Install Prerequisites

- Node Version = 20.11.1
- NPM Version = 10.2.4
-
- ### Install Commands

After cloning repository go to project folder

`cd social-media-dashboard`

And install packages with command

`npm install`

## Creating .env file

You need to have `.env` file in root folder. You can copy it from `.example.env` and change to `VITE_API_URL=https://66f3de9a77b5e88970973f6a.mockapi.io/socialapi`.

### Run app

`npm run dev` after running command in terminal, open http://localhost:5173/ in browser

## Folder Structure

├── src
│ ├── components # Reusable components such as Layout
│ ├── hooks # Custom hooks for managing global logic
│ ├── interfaces # TypeScript interfaces and types for models (e.g., IUser)
│ ├── pages # Page components like the Dashboard. Each pages/[component] have nested folders(components, hooks, etc.)
│ ├── constants # Constants such as date formats or configuration values
│
├── .env # Environment variables
├── .example.env # Sample .env file for development
├── public # Public assets like images
|** .prettierc.json, eslintrc.json # Handle file formatting settings
|** .gitignore # Handle files that git should ignore and not push to the repo
|** tailwing.config.ts, postcss.config.ts # Configuration for Tailwind library
|** tsconfig.json # Rules configuration for typescript
└── README.md # Project documentation

## Technical Decisions

Vite as Build Tool
I chose Vite as the build tool for its fast startup times and built-in support for modern JavaScript and React. Vite's hot module replacement (HMR) is more performant compared to other build tools like Webpack, and its zero-config setup is great for React development.

## Component Structure

The app is structured with separation of concerns in mind:

Hooks manage business logic and side effects, making it easier to reuse and test logic independently from components.
Components are responsible for rendering the UI, with complex UI elements abstracted into their own files for better maintainability.

The project uses TypeScript to ensure type safety and better developer experience with autocompletion, as well as preventing runtime errors by catching issues at compile time.

## External Packages

@mui/material: Material UI is used for the design system, which provides pre-built components (e.g., Button, Table, IconButton) and consistent styling across the app.

formik: Formik is used to manage form state and validation, especially in the user creation and deletion modals.

date-fns: Used for formatting dates in the dashboard, making it easier to handle date-related logic like formatting the user creation date.

@mui/icons-material: This package provides material icons like the delete icon, enhancing the UI with intuitive iconography.

@redux-toolkit and react-redux is used for app state management

## Links

- [Repo](https://github.com/wantsomemore/social-media-dashboard)
-
- ## Author

Sviatoslav Mardynavka
