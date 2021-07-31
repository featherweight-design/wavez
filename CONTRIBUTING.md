<!-- omit in toc -->
# Contributing to Featherweight Design's Feather front-end repo template

First and foremost...

🔥🎉 Thank you for contributing!!! 🎉🔥

This document contains a number of guidelines for contributing to this repo. It is an ever changing and constantly growing document, so if you have any questions reach out to one of our team members. If you think something needs to be tweaked or want to propose a change, feel free to submit a pull request updating this document.

The configurations in this template are not rules that are set in stone but recommendations. Any standards aim to provide quick guidance for some of the development minutia that can often feel cumbersome or are overlooked, such as formatting and testing. If some of these standards don't fit the needs of a particular application, they can be ripped out once a new repo is created. Any changes to this template will be considered on a case-by-case basis or, potentially, converted into another, more-specific repo template.

<!-- omit in toc -->
## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [I have a question](#i-have-a-question)
- [Styleguides](#styleguides)
  - [Git Commit Messages](#git-commit-messages)
  - [JavaScript Styleguide](#javascript-styleguide)
  - [TypeScript Styleguide](#typescript-styleguide)
  - [CSS Styleguide](#css-styleguide)
  - [React Styleguide](#react-styleguide)
  - [GraphQL/Apollo Styleguide](#graphqlapollo-styleguide)
  - [Testing Styleguide](#testing-styleguide)
    - [General](#general)
    - [Jest](#jest)
    - [Cypress](#cypress)
- [Your First Contribution](#your-first-contribution)
  - [Picking Up an Issue](#picking-up-an-issue)
  - [During Development](#during-development)
  - [I'm done, now what?](#im-done-now-what)
  - [Receiving Feedback](#receiving-feedback)
  - [After Approval](#after-approval)
- [Attribution](#attribution)

## Code of Conduct

Please thoroughly review our [Code of Conduct](CODE_OF_CONDUCT.md).

## I have a question

> **Note:** Please don't file an issue to ask a question. You'll receive a faster response by using one of the resources below.

The first place to start is referencing this document or our [`README.md`](README.md).

Most issue specific questions can be answered by the issue's **"Acceptance Criteria"** and/or **"References"** section or by posting a comment to that issue.

If talking to a real person is your jam, reach out to the `#questions` channel in our Slack and someone can point you in the right direction. If you've been assigned to a particular client for which you are developing, you should also have a client specific channel as a resource (e.g. `#dfx`, `#rose-glass-design`, etc.).

## Styleguides

### Git Commit Messages

- Use [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)
- Commit types we have adopted are:
  - `fix` (PATCH)
  - `feat` (MINOR)
  - `BREAKING CHANGE` (MAJOR)
  - `build`
  - `chore`
  - `ci`
  - `docs`
  - `style`
  - `refactor`
  - `revert`
  - `test`
  - `optimization`
- Use the present tense ("Add feature" not "Added feature")
- Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
- Limit the first line to 72 characters or less

### JavaScript Styleguide

- All JavaScript must adhere to our Prettier and eslint formatting
- Destructuring should be used whenever possible
- Prefer the object spread operator (`{ ...anotherObj }` to `Object.assign()`)
- End of file over inline `export`s

  ```javascript
  // Use this:
  const Component = () => {};

  export default Component;

  // Instead of:
  export const Component = () => {};
  ```

- Place imports in the following order:
  - Third party Node Modules (such as `react`)
  - Local Modules (using relative paths)
  - Stylesheets
- Modules with five or more imports should have visual space above and below them

### TypeScript Styleguide

- All TypeScript nust adhere to our Prettier and TSlint rules
- All `interface`s and `type`s should be exported from a dedicates `types.ts` file located in the `/shared` directory
- The vast majority of JavaScript files should use TypeScript with rare exceptions

### CSS Styleguide

- Component/page specific stylesheets should live next to their respective TS files
- Component `className` attributes should be namespaced with an abbreviation for the application name (e.g. "Rose Glass Design" should use `rgd` for a `className` of `rgd-app`)
- Colors, measurements, and other common styles should be referenced as variables through `variables.scss`
- Reusable style groupings or functions should be reference through `mixins.scss`
- Branding variables for the `@f-design/component-library` are imported in `main.scss` and can be overwritten in either `mixins/variables.scss`
- A loose BEM formatting should be used for `className` attributes:
  - Block: `rgd-button`, `rgd-checkbox`
  - Element: `rgd-button__value`, `rgd-checkbox__label`
  - Modifier: `rgd-button__value-hidden`, `rgd-checkbox-disabled`

### React Styleguide

- React hooks should be used for all state handling
- Actionable props should be prefaced with the word `on` (e.g. `onChange`, `onClose`, etc.)
- Methods passed to components as props should prefaced with the world `handle` (e.g. `handleChange`, `handleClose`, etc.)
- Any boolean props should be prefaced with the words `is/has/was` (e.g. `isLoading`, `hasData`, `wasSuccessful`, etc.)
- All possible states should be considered (e.g. empty, full, disabled, loading, etc.)

### GraphQL/Apollo Styleguide

- All queries/mutations are stored in their respective directories in `/shared`
- Each query/mutation should have comments explaining any inputs, return values, and schema types
- Query/mutation files should be in PascalCase with descriptive naming
- Exports from query/mutation files should be in `SCREAMING_SNAKE_CASE`
- All queries/mutations should be executed through hooks from Apollo Client (e.g. `useQuery`, `useMutation`, etc.)
- Any GraphQL schemas should be added to the repo and the `.eslintrc.js` update in order for GraphQL template literal linting

### Testing Styleguide

This repo template is opinionated when it comes to testing, but provides options for several approaches. We consider Cypress to be a more accurate, developer friendly UI/UX testing approach and all components/pages should have corresponding Cypress tests. We also use Testing Library for Cypress specific DOM queries/commands.

Jest should be used for testing utilities and under-the-hood functionality of pages or components. With this approach, tests using the `jsdom` are not needed. However, if someone uses this template and prefers to use Jest as a means to test components/pages, React Testing Library is included and examples are provided.

#### General

- All "happy" and "sad" paths should be tested when possible
- Mocks and static content should be reused from the `/shared/mocks` when possible (e.g. `copyContent`, etc.)

#### Jest

- Tests should generally be reserved for `utilities` and any under-the-hood, functional logic of component/page (e.g. filtering, sorting, formatting, etc.)
- If a test has specific data mocks that are not reusable, they should be located in `__tests__/mocks` with a `<FILE_NAME>.mock.ts` convention (e.g. `capitalizeString.mock.ts`)
- If a test has utilities associated with mock data, they should be moved to a `__tests__/utilities` directory

#### Cypress

- Should be used for end-to-end (E2E) functionality and all components/pages when possible
- If a test has specific data mocks that are not reusable, they should be located in `cypress/fixtures` as either `*.mock.ts` or `*.json`
- If a test has utilities associated with mock data, they should be moved to a `cypress/support/utilities` directory
- Tests should be written using more behavioral, product nomenclature:

```javascript
// Use this
it('Should show a company logo on the landing page', () => { ... });

// Instead of this
it('Should render an image on the landing page', () => { ... });
```

## Your First Contribution

### Picking Up an Issue

- Find an issue of interest in the **"To Do"** column of one of our [Feather project boards](https://github.com/featherweight-design/feather/projects)
- To have this issue assigned to you, leave a comment on the issue itself or post in the `#component-library` Slack channel (an admin must approve your request)
- Once approved, move your issue to the **"In Progress"** column of the project board
- Pull down the latest changes from `main` and checkout a new branch with a descriptive name (e.g. `pr-github-hook`)

### During Development

- We use `yarn` as our package manager
- Each new component/page should have a corresponding stylesheet and Cypress test files
- Each new utility should have a corresponding test file
- Integrated components/pages should be cross tested (e.g. functional testing) through Cypress
- There are two development hooks we use to ensure standardization:
  - `pre-commit`: Run `commitlint` for commit message formatting
  - `pre-push`: Run linting for general code formatting
- Useful commands:
  - `yarn start`: Starts the application on [http://localhost:3000](http://localhost:3000)
  - `yarn clean`: Wipes `node_modules/yarn.lock` and reinstalls packages
  - `yarn format`: Formats all files according to our Prettier standards
  - `yarn lint`: Checks all files for linting errors
  - `yarn test`: Runs our Jest test suite
  - `yarn cy-open`: Opens the Cypress test runner

### I'm done, now what?

- Celebrate! 🎉
- Rebase with `main`
- Push your changes to GitHub and open a new PR
- Fill out any relevant sections in the PR Template and remove those that are unused
- Run through the **"Sanity Checks"**
- GitHub will randomly assign someone to review your PR, but you are welcome to select additional reviewers
- PR checks will run via GitHub actions. The following must pass before PR approval:
  - Linting
  - Jest Tests
  - Cypress tests
  - Build

### Receiving Feedback

- Feedback is non-objective and in the best interest of the codebase
- Comments are meant to foster dialog; you are free to communicate your thought process and explain any reasoning to reach a joint decision
- When changes are requested, implement them to the best of your ability
- If you have questions, reach out to whomever requested changes through a comment or in Slack
- Admins reserve the right to dismiss PR approvals and change requests

### After Approval

- Another team member will be assigned to test your changes though you are encouraged to test them as well
- If any bugs are found during testing, open a new **"🐛 Bug"** issue (you are welcome to tackle this afterward if you wish)
- Once your changes pass QA, your PR will be moved to the **"Done"** column in the project board
- 🔥 You did it! 🔥

## Attribution

These Contributing docs were adapted from the [Atom Contribution](https://github.com/atom/atom/blob/master/CONTRIBUTING.md) docs.
