# Shopify Theme Filename Convention Documentation

## Overview
This document provides guidelines for a filename-based convention designed to simulate a hierarchical directory structure within Shopify theme development, specifically for sections, snippets, and layouts.

## Filename Convention

### Sections and Snippets
Since Shopify does not allow creating subfolders within the `sections` and `snippets` directories, we use a special naming convention to indicate hierarchy and relationships.

- **Base File**: The base file represents the main functionality or component, named as `section-filename.liquid` or `snippet-filename.liquid`.

- **Subcomponent Files**: Files that extend or modify the base component are prefixed with the base file name, followed by a descriptor separated by two hyphens. Example: `section-filename--modifier.liquid`.

### Layouts
Layouts typically do not require subfolders, but if needed, a similar naming convention can be applied.

- **Base Layout**: Named simply as `theme.liquid` or another descriptive base name.
- **Specialized Layouts**: Named with a prefix of the base layout file followed by a descriptive modifier, such as `theme--custompage.liquid`.

## Guidelines for Naming

1. **Clarity**: Choose clear and descriptive names that reflect the component's functionality.
2. **Consistency**: Use consistent descriptors to ensure ease of understanding and maintainability.
3. **Delimiter**: Use double hyphens `--` as a pseudo-folder separator.
4. **Versioning**: If version control within filenames is necessary, append a version number at the end of the filename before the file extension.

## Example Structure

```plaintext
sections/
├─ header.liquid
├─ header-dev-1.liquid # A variant of header under development
├─ header--with-search.liquid
├─ footer.liquid
├─ footer--dark.liquid

snippets/
├─ cart-item.liquid
├─ cart-item--custom.liquid

layouts/
├─ theme.liquid
├─ theme--custompage.liquid
```

## Best Practices

1. **Documentation**: Document each component at the beginning of the file with comments.
2. **Refactoring**: Regularly refactor filenames to ensure the naming convention remains intuitive as the theme evolves.

## Maintaining the System

1. **File Creation**: When creating a new file, check existing patterns to ensure consistency.
2. **Code Reviews**: Utilize code reviews to enforce the naming convention.
3. **Continuous Improvement**: Revisit and improve the naming system periodically, especially as the theme grows.

## Conclusion

By following this naming convention, we aim to maintain an organized and scalable codebase for our Shopify themes, despite the platform's limitations on directory structures. This system requires discipline and understanding from the development team but offers a structured approach to managing theme components.
