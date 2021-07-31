# Feather-Apollo: Frontend Boilerplate

A boilerplate repo template for frontend applications built using [Create React App](https://github.com/facebook/create-react-app) and [TypeScript](https://www.typescriptlang.org/) with configurations for [Eslint](https://eslint.org/), [TSlint](https://palantir.github.io/tslint/), [Prettier](https://prettier.io/), [Jest](https://jestjs.io/), [Testing Library](https://testing-library.com/), and [Cypress](https://www.cypress.io/).

This boilerplate has everything from our [Feather](https://github.com/featherweight-design/feather) frontend repo template with the addition of a base configuration from [Apollo Client](https://www.apollographql.com/docs/react/) which can be used for communicating with GraphQL servers, as well as frontend caching and local state management. All Apollo examples in this boilerplate are made using the highly distinguished [Rick and Morty GraphQL API](https://rickandmortyapi.com/documentation/#graphql) 👽

Though the documentation in this repo is specific to this boilerplate project, it can be used as a guideline for a new project as well, but should be updated to match the specific approach of that application.

> Looking for something without Apollo and GraphQL? Check out our [Feather](https://github.com/featherweight-design/feather) boilerplate 🤘

## Using the Template

This repository is a template repo and can be used for creating repositories for new projects. More information about GitHub template repositories can be found [here](https://docs.github.com/en/free-pro-team@latest/github/creating-cloning-and-archiving-repositories/creating-a-repository-from-a-template). 

Various settings are required for various types of projects, which are outlined below:

**Fetherweight Design clients**

- Private repository
- Does **not include** all branches

**Featherweight Design internal tooling**

- Repo name prefaced with `@f-design/`
- Public repositroy
- Does **not include** all branches

**Extensions of this template (e.g. `feather-apollo`, etc.)**

- Public repository
- Does **include** all branches

## Installation

Clone the repository:

```terminal
git clone git@github.com:featherweight-design/feather.git
```

Enter the directory and install all dependencies:

```terminal
cd feather
yarn install
```

## Usage

In the project directory, you can run:

### `yarn start`

This script tuns the app in the development mode at [http://localhost:3000](http://localhost:3000). The page will reload in the browser if you make edits and you will see any lint errors in the console.

### `yarn build`

There is a slight modification to the CRA `build` script that points TypeScript to a `tsconfig.build.json` file, which allows for separate TypeScript configurations in the local and production environments.

When run, this scripts builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance. The build is minified and the filenames include the hashes. Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) from CRA for more information.

### `yarn format`

This runs `prettier` on all file with `*.ts` and `*.tsx` files. Any changes will still need to be added and committed.

### `yarn lint/lint-ci`

Both of these scripts will check for any linting errors, but each run in different situations. The `lint` command runs through [`husky`](https://typicode.github.io/husky/#/) as a `pre-push` hook and will address any fixable linting errors.

The `lint-ci` script runs in the `pull_request` GitHub Action workflow and specifically _does not_ fix any linting errors. This is to ensure these errors are caught during the PR process.

### `yarn test/test-ci`

The only changes to the `test` script from CRA is a modification to the `testMatch` argument. When run, this script launches the test runner in the interactive watch mode.

The `test-ci` script is run in the `pull_request` GitHub Action workflow. It does the exact same thing as the test `script`, but runs outside of watch mode, terminating the command when all tests have been run, and collects coverage using `collectCoverageFrom`.

- `testMatch`: Only match test files in `__tests__` directories with the file extension `*.test.ts` or `*.test.tsx`. This skips Cypress tests which have the file extension `*.spec.ts`.
- `collectCoverageFrom`: Only collect coverage from the `/components`, `/pages`, and `/utilities` directories.

### `yarn cy-open/cy-run`

These are two Cypress specific commands and require that the application is running in order to work (`yarn start`). The `cy-open` command uses the interactive Cypress test runner. This is best for locally development/test writing.

The `cy-run` script executes Cypress tests in the terminal using a headless browser and is executed in the `pull_request` GitHub Action workflow.

### `yarn clean`

This command removes all `node_modules` as well as the `yarn.lock` and reinstalls all dependencies in order for a clean environment. Some issues can arise when wiping the `yarn.lock` file. If this happens, restore your `yarn.lock` file and run `yarn` instead.

### `yarn upgrade`

This will open an interactive session in the terminal to easily pick and choose which dependencies to upgrade to the latest version. It is recommended to avoid updating all packages as once in case upgrades having breaking changes.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

This command should be used on a case-by-case basis. For most use cases the initial CRA build configuration should be sufficient. However, if an application needs more granular or specific build tweaks, ejecting is acceptable. Below are notes from CRA about this script:

> If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.<br/><br/>
> Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.<br/><br/>
> You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Contributing

See our [`CONTRIBUTING.md`](CONTRIBUTING.md)

## LICENSE

[MIT](https://choosealicense.com/licenses/mit/)
