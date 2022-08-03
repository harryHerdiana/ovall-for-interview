# ovall

This project relies mainly on [Next.js](https://nextjs.org/), [tailwindcss](https://tailwindcss.com/) and [shopify](https://shopify.com)

## Table of Contents

- [**Setup**](#Setup)
  - [Prerequisites](#Prerequisites)
  - [Dependencies](#Dependencies)
  - [Configuration](#Configuration)
- [**Development**](#Development)
  - [**Starting Up**](#StartingUp)
  - [**Commands**](#Commands)
  - [**Code Conventions & Styles**](#CodeConventions)
- [**Dato CMS**](#DatoCMS)

## Setup

For getting started with development, please follow these simple steps.

### Prerequisites

Please make sure that the listed tools are installed on your machine:

- [yarn](https://yarnpkg.com/) >= 1.22.x
- [Node.js](https://nodejs.org/en/) >= 14.18.x
- [Prettier](https://prettier.io/) globally installed >= 2.3.2
- [ESLint](https://eslint.org/) globally installed as well >= 7.32..0

### Dependencies

`yarn install`

### Configuration

The main configuration is set through Env variables. Those get configures by usual `.env` files. Each node environment has its own configuration.
Before you getting started with development please create a `.env.local` file.

It should consist of the following parts:

```
NEXT_PUBLIC_DISABLE_TRACKING=true
```

## Development

### Starting Up

```bash
yarn dev
```

By opening [http://localhost:3000](http://localhost:3000) with your browser, you see the current page.

### Commands

To ease the development flow we've established a couple of commands in `package.json`. Here's a tiny explanation:

- `dev` – As mentioned starts the dev server at localhost:3000
- `build` – Builds the project. This is very helpful for checking if everything is fine before pushing to origin.
- `export` – Creates a static build in the `out` directory.
- `lint` – Runs ESLint and prints possible issues.
- `prettier` – Runs prettier and writes changes directly to the files.

### Code Conventions & Styles

We utilize prettier and ESLint with the well known [AirBnb Style Guide](https://github.com/airbnb/javascript). Please configure your editor in a way that it uses prettier on save and ESLint. This will greatly benefit the developer experience as issues are shown right away.

This is an excerpt from a VSCode config that uses [prettier-vscode](https://github.com/prettier/prettier-vscode) as PlugIn.

```json
{
  "editor.formatOnPaste": true,
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode"
}
```

- Please keep the code DRY (two instances of a given piece of code is fine, from three times it should be refactored)
- That applies as well for querying DatoCMS. Since there are quite a few models that are being shared between pages, we can use fragments to reuse the subqueries
- Take the time to specify the types, including those for the page data (search for "TODO" in the project)
- Please create a PR early in the process. Tag it with "work and progress" and "ready", respectively.

### Find Unused Files

With the help of the `next-unused` package (https://www.npmjs.com/package/next-unused), you can simply run:

```
yarn find:unused
```

- Please double check before actually removing those supposedly unused files
- The `next-unused` package is configured in the `package.json`

### Tests

We will use [Playwright](https://playwright.dev/docs/intro) for our end-to-end testing (later)

## DatoCMS

All the content (except some product and variant information) is served by DatoCMS.

- To explore the models for the pages, use the [API Explorer](https://ovall-shopify.admin.datocms.com/cda-explorer) (click on "Explorer")

### How To Create a new Component (e.g. Banner)

1. Create a Model in [DATO CMS](https://ovall-shopify.admin.datocms.com/admin/item_types)

2. Create a mapping function for the component

- update the graphql query to include the data
- create a type for the raw data coming from dato
- create a type for the Domain Model (= what is used in the page or section)
- map the raw data to the domain model.
