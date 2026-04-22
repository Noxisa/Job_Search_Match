# Contributing

Thank you for contributing to Job Search Match.

## Guidelines

- Branches: use `feature/<short-description>` or `fix/<short-description>`.
- Commit messages: use imperative tense, e.g. "Add MatchController".
- Pull Requests: open PRs against `main`, include description, link issues, assign reviewers.

## Coding Standards

- Follow `.editorconfig` rules: 4-space indentation, file-scoped namespaces, PascalCase for public members, private fields use `_camelCase`.
- Place controllers in `Controllers/`, services in `Services/`, models in `Models/`.
- Add XML doc comments for public APIs.
- Keep methods small and single-responsibility.

## Testing

- Add unit tests under `tests/` folder using xUnit.
- Run `dotnet test` before opening a PR.

## Formatting

- Run `dotnet format` or configure IDE to format on save.

## API

- Add Swagger/OpenAPI documentation for new endpoints.

## CI

- Ensure builds and tests pass in CI before merging.
