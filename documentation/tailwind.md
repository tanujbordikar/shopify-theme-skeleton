# Tailwind CSS Integration and Usage in Shopify Theme (WIP)

## Introduction
This documentation provides an overview of integrating and using Tailwind CSS in your Shopify theme. Tailwind CSS is a utility-first CSS framework that enables rapid and responsive design with low-level utility classes. The integration includes theme settings for enabling Tailwind, custom configurations, and a workflow for automated building and deployment of Tailwind styles.

## Theme Settings
In `settings_schema.json`, the following settings have been added to control Tailwind CSS:

- **Tailwind Configuration Section in Theme Settings**:
  - A checkbox to enable or disable the Tailwind theme.
  - Ability to add Tailwind configuration and custom CSS in shopify theme editor.

## Theme Implementation
In `theme.liquid`, Tailwind CSS is conditionally included based on the theme settings.

- **Design Mode**:
  - When in design mode (`request.design_mode`), Tailwind is loaded via CDN, and configurations are applied dynamically.
  - Users can input custom Tailwind configuration, CSS and classes to elements.

- **Production Mode**:
  - In production, a pre-built `output.css` file, generated from Tailwind's build process, is included.

## Shopify Section Example
A new Shopify section named "demo__tailwind--simple-cta.liquid" has been created for testing purposes.

- **Loom Demo**: A [Loom video](https://www.loom.com/share/6e73a9459f434448bdf4142073e1ee63) provides a visual demonstration of the section.

## Automated Tailwind CSS Build
A GitHub Action workflow, `tailwindcss-build.yml`, automates the build process of generating the Tailwind CSS `output.css`. You can find the workflow in the `.github/workflows` directory.

- Triggered on pushes to the main branch.
- Sets up a Node.js environment with version 18.
- Installs dependencies and builds Tailwind CSS into `output.css`.
- Commits the generated `output.css` file to the repository.

## Conclusion
This setup allows for a flexible and efficient way to incorporate Tailwind CSS into a Shopify theme, providing both dynamic customization in design mode and optimized production builds. The integration of Tailwind enhances the design capabilities and efficiency in developing and maintaining the theme's appearance.