# Schema Integration in Skeleton Shopify Theme

## Introduction
Integrating schema into various sections of the Skeleton Shopify Theme as per the design specifications. The schema defines customizable features and settings of each section, enabling end-users to tailor the theme to their needs.

## Key Resources
- **Shopify Schema Documentation**: Essential for understanding the fundamentals and advanced aspects of section schema.
  - [Section Schema](https://shopify.dev/docs/themes/architecture/sections/section-schema)
  - [Input Settings](https://shopify.dev/docs/themes/architecture/settings/input-settings)
- **Design Specifications**: Review the design for data entry points to generate the schema structure.

## Steps for Building Schema
1. **Understand the Design**: Examine the mobile or desktop designs to identify customizable elements.
2. **Initial Schema Generation**:
   - Utilize the [Section Schema Generator](https://codeinshopify.com/section-schema-generator/) as a starting point.
   - Note: This tool may not include the latest schema inputs. Always cross-reference with the official Shopify documentation.
3. **Schema Verification**:
   - After using the generator, verify your schema against Shopify's latest documentation. Ensure no newer, more efficient methods or inputs are overlooked.
4. **ChatGPT Plus Plan**: If available, use ChatGPT with the Plus plan. Provide it with images of the mobile and desktop designs for suggestions on schema structure.
   - Custom GPT link - [Semantic Web Guide](https://chat.openai.com/g/g-PyEUUxOHy-semantic-web-guide)
   - Example loom for generating name - [Generate Name](https://www.loom.com/share/c65cdc293f704c2fa6e9d03edfab7c55)
   - Example loom for generating schema - (pending)
5. **Reference the Live Website**: Check the already live website for additional design context. 
6. **Join Discord**: For detailed design discussions and queries, join our Discord channel. 

## Handling Design Inconsistencies
- In cases where the design has logical flaws (e.g., inconsistent font sizes across sections), prioritize a standardized approach that can be later customized by the end-user through Shopify's custom CSS field.

## Contribution Process
- **Claiming Issues**: Claim an issue by commenting /attempt on it and for for the maintainer to assign the issue. Make sure to have your [notifications turned on](https://docs.github.com/en/account-and-profile/managing-subscriptions-and-notifications-on-github/setting-up-notifications/configuring-notifications). This prevents multiple contributors from working on the same issue.
- **forking the repository**: [Fork the repository](https://docs.github.com/en/get-started/quickstart/contributing-to-projects) to your GitHub account. This creates a copy of the repository in your account.
- **Creating a branch**: Create a branch for your contribution. This ensures that you can work on your contribution without affecting the main codebase.
- **Add new section**: Add a new section to the `sections` folder. Ensure that the section name is in lowercase and follows the [BEM naming convention](https://css-tricks.com/bem-101/).
- **Building Schema**: Follow the steps above to create a robust and flexible schema for each section.
- **Committing changes**: Commit your changes to the branch. This helps you track your progress and also makes it easier to revert to a previous state if needed.
- **Creating a pull request**: Create a pull request (PR) to merge your changes into the main codebase. This allows the maintainers to review your changes and merge them if they're approved.
  - Ensure your PRs align with the project's coding standards and design specifications.
  - Use descriptive commit messages to detail the changes you've made.
- **Reviewing feedback**: The maintainers may ask for changes to be made to your PR. This is a normal part of the contribution process, and you should make the requested changes.
- **Merging the PR**: Once your PR is approved, it will be merged into the main codebase. Congratulations! You've successfully contributed to the Skeleton Shopify Theme project. You will be rewarded for your efforts based on the number of points you've earned.

## Conclusion
Proper schema integration is crucial for the flexibility and user-friendliness of the Skeleton Shopify Theme. This milestone sets the foundation for further theme development, ensuring a high-quality end product. Your contributions are valuable to this process, and we encourage detailed and thoughtful work.
