<p align="center">
  <a href="https://nestjs.com/" target="blank"><img src="https://github.com/nestjs/docs.nestjs.com/blob/master/src/assets/logo-small.svg" height="100" alt="Nest logo" /></a>
  <a href="https://typeorm.io/" target="blank"><img src="https://avatars.githubusercontent.com/u/20165699" height="100" alt="TypeORM logo" /></a>
  <a href="https://www.postgresql.org/" target="blank"><img src="https://www.postgresql.org/media/img/about/press/elephant.png" height="100" alt="PostgreSQL logo" /></a>
  <a href="https://jestjs.io/" target="blank"><img src="https://github.com/facebook/jest/blob/main/website/static/img/jest.png" height="100" alt="Jest logo" /></a>
  <a href="https://prettier.io/" target="blank"><img src="https://github.com/prettier/prettier/blob/main/website/static/icon.png" height="100" alt="Prettier logo" /></a>
  <a href="https://eslint.org/" target="blank"><img src="https://github.com/eslint/website/blob/master/assets/img/logo.svg" height="100" alt="ESLint logo" /></a>
</p>

<p align="center">
  <a href="https://docs.docker.com/" target="blank"><img src="https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png" height="60" alt="Docker logo" /></a>
  <a href="https://github.com/features/actions" target="blank"><img src="https://avatars.githubusercontent.com/u/44036562" height="60" alt="GitHub Actions logo" /></a>
</p>

# Nest 10.x - Boilerplate

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)
[![GitHub issues](https://img.shields.io/github/issues/ahelord/nest-boilerplate)](https://github.com/ahelord/nest-boilerplate/issues)
[![GitHub pull requests](https://img.shields.io/github/issues-pr/ahelord/nest-boilerplate)](https://github.com/ahelord/nest-boilerplate/pulls)
[![GitHub stars](https://img.shields.io/github/stars/ahelord/nest-boilerplate)](https://github.com/ahelord/nest-boilerplate/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/ahelord/nest-boilerplate)](https://github.com/ahelord/nest-boilerplate/network)
[![GitHub contributors](https://img.shields.io/github/contributors/ahelord/nest-boilerplate)](https://github.com/ahelord/nest-boilerplate/graphs/contributors)
[![GitHub license](https://img.shields.io/github/license/ahelord/nest-boilerplate)](https://github.com/ahelord/nest-boilerplate)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/ahelord/nest-boilerplate)
![GitHub repo size](https://img.shields.io/github/repo-size/ahelord/nest-boilerplate)

## Table of contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [What's in the box ?](#whats-in-the-box-)
  - [CircleCI](#circleci)
  - [Commitizen](#commitizen)
  - [Commitlint](#commitlint)
  - [Docker Compose](#docker-compose)
  - [ESLint](#eslint)
  - [GitHub Actions](#github-actions)
  - [Husky](#husky)
  - [Lint-staged](#lint-staged)
  - [Prettier](#prettier)
- [Running the app](#running-the-app)
- [Code scaffolding](#code-scaffolding)
- [Build](#build)
- [Test](#test)
- [Further help](#further-help)
- [Useful Docker commands](#useful-docker-commands)

---

## Getting started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

What things you need to install the software and how to install them :

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/)
- [Docker](https://docs.docker.com/docker-for-windows/install/) or [Docker Toolbox](https://github.com/docker/toolbox/releases)
- [Nest CLI](https://docs.nestjs.com/cli/overview)

---

### Installation

1. Clone the git repository

   ```bash
   git clone https://github.com/ahelord/nest-boilerplate.git
   ```

2. Go into the project directory

   ```bash
   cd nest-boilerplate/
   ```
3. Install NPM dependencies

   ```bash
   npm i
   ```


### Run locally


1. Copy `.env-local` to `.env`

   ```bash
   cp .env-local .env
   ```

2. Replace the values of the variables with your own

3. Start

   ```bash
   npm run start:dev
   ```

### Run docker

1. Copy `.env-docker` to `.env`

   ```bash
   cp .env-docker .env
   ```

3. Replace the values of the variables with your own

4. Create Docker images and launch them

   ```bash
   docker-compose up -d --build
   ```
---

## What's in the box ?


### Commitizen

[commitizen](https://github.com/commitizen/cz-cli) is a command line utility that makes it easier to create commit messages following the [conventional commit format](https://conventionalcommits.org) specification.

Use `git cz` instead of `git commit` to use commitizen.

[![Add and commit with Commitizen](https://github.com/commitizen/cz-cli/raw/master/meta/screenshots/add-commit.png)](https://github.com/commitizen/cz-cli/raw/master/meta/screenshots/add-commit.png)

**Configuration file**: [`.czrc`](https://github.com/ahelord/nest-boilerplate/blob/master/.czrc).

---

### Commitlint

[commitlint](https://github.com/conventional-changelog/commitlint) checks if your commit messages meet the [conventional commit format](https://conventionalcommits.org).

**Configuration file**: [`.commitlintrc.json`](https://github.com/ahelord/nest-boilerplate/blob/master/.commitlintrc.json).

In general the pattern mostly looks like this:

```sh
type(scope?): subject  #scope is optional
```

Are you a good `commitizen` ?

---

### Docker Compose

**Compose file**: [`docker-compose.yml`](https://github.com/ahelord/nest-boilerplate/blob/master/docker-compose.yml).

Containers :

- PostgreSQL 16.1
- pgAdmin 4:8.3

Compose file uses `.env`.

---

### ESLint

[ESLint](https://eslint.org/) is a fully pluggable tool for identifying and reporting on patterns in JavaScript.

**Configuration file**: [`.eslintrc.js`](https://github.com/ahelord/nest-boilerplate/blob/master/.eslintrc.js).

For more configuration options and details, see the [configuration docs](https://eslint.org/docs/user-guide/configuring).

---


### Husky

[Husky](https://github.com/typicode/husky) is a package that helps you create Git hooks easily.

**Configuration folder**: [`.husky`](https://github.com/ahelord/nest-boilerplate/blob/master/.husky/).

---

### Lint-staged

[Lint-staged](https://github.com/okonet/lint-staged) is a Node.js script that allows you to run arbitrary scripts against currently staged files.

**Configuration file**: [`.lintstagedrc.json`](https://github.com/ahelord/nest-boilerplate/blob/master/.lintstagedrc.json).

---

### Prettier

[Prettier](https://prettier.io/) is an opinionated code formatter.

**Configuration file**: [`.prettierrc`](https://github.com/ahelord/nest-boilerplate/blob/master/.prettierrc).  
**Ignore file**: [`.prettierignore`](https://github.com/ahelord/nest-boilerplate/blob/master/.prettierignore).

For more configuration options and details, see the [configuration docs](https://prettier.io/docs/en/configuration.html).

---


## Running the app

### development

```bash
npm run start
```

### watch mode

```bash
npm run start:dev
```

### production mode

```bash
npm run start:prod
```

---

## Code scaffolding

Run `nest generate|g <schematic> <name> [options]` to generate a new Nest Element.

---

## Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory.

---

## Test

### unit tests

```bash
npm run test
```

### e2e tests

```bash
npm run test:e2e
```

### test coverage

```bash
npm run test:cov
```

---

## Further help

To get more help on the Nest CLI use `nest --help` or go check out the [Nest CLI README](https://github.com/nestjs/nest-cli/blob/master/README.md).

---

## Useful Docker commands

1. If you want to check that all containers are up :

   ```bash
   docker-compose ps
   ```

1. Other Docker commands :

   ```bash
   # Start Docker
   docker-compose start

   # Restart Docker
   docker-compose restart

   # Stop Docker
   docker-compose stop

   # Delete all containers
   docker rm $(docker ps -aq)

   # Delete all images
   docker rmi $(docker images -q)
   ```

1. How to get a Docker container's IP address from the host ?

   ```bash
   docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' <container>
   docker inspect $(docker ps -f name=<service> -q) | grep IPAddress
   ```

---

### Typeorm migrations

1. Windows
   ```bash
   # Create empty migration windows
    npm run typeorm:migration:create:win --name=createPerson

   # Generate migrations from entities empty migration
    npm run typeorm:migration:generate:win --name=initMigration

   ```
2. Unix
   ```bash
   # Create empty migration
    npm run typeorm:migration:create:unix --name=createPerson

   # Generate migrations from entities empty migration
    npm run typeorm:migration:generate:unix --name=initMigration

   ```
3. Run migrations and revert
   ```bash
   # Run pending migrations
    npm run typeorm:migration:run

   # Revert migrations
    npm run typeorm:migration:revert 

   ```