# Catopedia 🐱

Catopedia is a cat catalog app built with Next.js. It allows you to explore cat images with details, mark favorites, and browse through different categories of cats.

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Installation and Setup](#installation-and-setup)
- [Usage](#usage)
- [Environment Variables](#environment-variables)
- [The Cat API](#the-cat-api)

## Overview

This project is built with Next.js and integrates with [TheCatAPI](https://thecatapi.com/) for cat images. It's responsive and deployed to GitHub Pages.

## Features

- **Cat Catalog**: Browse through different cat images by categories.
- **Favorites**: Save your favorite cats for easy access. (It is necessary to set an user name)
- **Dark Mode**: Toggle between light and dark themes.
- **Dynamic Routes**: Routes like `/cat/[id]` to view details for a specific cat.

## Installation and Setup

### Prerequisites

- Node.js v16+ and npm.

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/alexhiraga/catopedia.git
   cd catopedia

2. Install dependencies:

  ```bash
  npm install
  ```

3. Development:
 
  ```bash
  npm run dev
  ```

4. Build:

  ```bash
  npm run build
  ```

## Environment Variables

  - NEXT_PUBLIC_CAT_X_API_KEY: API key for the cat images API.

## The Cat API

  [The Cat API](https://developers.thecatapi.com/)