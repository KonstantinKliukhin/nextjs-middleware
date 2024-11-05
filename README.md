This is a template repository, we're using for all NextJS project.

It uses:

1. [NextJS](https://nextjs.org/)
2. [Tailwind](https://tailwindcss.com/)
3. [Shadcn/ui](https://ui.shadcn.com/)
4. Prettier
5. Eslint
6. [Commit Linter](https://commitlint.js.org/#/)
7. Autoprefixer
8. Next-auth

### [Architecture FSD](https://feature-sliced.design/docs)


### [For cross imports](https://github.com/feature-sliced/documentation/discussions/390#discussioncomment-5570073)
Use it as few as possible, and it is mostly for entities types


### To generate slices:

page:
```shell
npm run gen pages home-page
```
widget:

```shell
npm run gen widgets home-page
```

feature (form):

```shell
npm run gen features edit-user form
```

entity:

```shell
npm run gen entities country
```

# Architecture notes:
## Entities

### Structure

- **api**: Contains files related to handling API requests.
    - `services.ts`: Houses API request functions.
    - `query-hooks`: Includes hooks that wrap API requests from `services.ts` using React Query.
    - `types`: Stores Data Transfer Object (DTO) types and other types related to API interactions.

- **model**: Defines the types and data structures for each entity.
    - `types.ts`: Houses types related to the entity. Additional files can be added if there are numerous types.
    - *Optional*: Additional files for hooks or other business logic related to the entity.

- **ui**: Contains components related to the entity.

- **lib**: Contains utility functions for entity e.g. function getUserFullName.

### Example Entity: User

- **api**
    - `services.ts`
    - `query-hooks`
    - `types`
    - - `get-current-user.dto.ts`

- **model**
    - `types.ts`
    - *Additional files*

- **ui**
    - `UserCard.ts`

## Features

Features represent specific business functionalities within the application.

### Example Feature: Edit User Settings

## Widgets

Widgets are reusable components that compose features, entities, and shared components.

### Example Widget: User Profile Widget

## Pages

Pages represent the different views of the application.
Can be used for business logic but make sure it contains logic which will be used only for this page. More preferable to keep pages clean and write business logic in entities, feature or widgets depends on your case
