# Pluto UI :rocket:

Pluto UI is a React UI component library built specifically for ecommerce websites. It provides a wide range of customizable UI elements to enhance the user experience of your online store.

## Technologies

The following technologies and programming languages are used in our project:

   - React: A JavaScript library for building user interfaces.
   - Storybook: A development environment and UI component explorer for building UI components in isolation.
  -  PropTypes: A library for type checking React component props.
   - SCSS: A CSS preprocessor that enhances the capabilities of CSS.:

## Components
Here's a comprehensive list of common components should be in the library:
 - Navigation Components:
   - [ ] Navigation bar
   - [ ] Mega menu
   - [ ] Breadcrumbs
   - [ ] Sidebar

- Product Display Components:
   - [ ] Product card
   - [ ] Product list/grid view
   - [ ] Product carousel/slider
   - [ ] Product details page

 - Shopping Cart Components:
   - [ ] Cart summary
   - [ ] Cart items list
   - [ ] Cart sidebar
   - [ ] Cart checkout process

 - Checkout Components:
   - [ ] Address form
   - [ ] Payment options
   - [ ] Order summary
   - [ ] Shipping options
   - [ ] Order confirmation

 - User Account Components:
   - [ ] Sign-in/sign-up form
   - [ ] User profile
   - [ ] Order history
   - [ ] Wishlist

 - Search Components:
   - [ ] Search bar
   - [ ] Sorting dropdown
   - [ ] Filter options

 - Promotion Components:
   - [ ] Banner
   - [ ] Sale/Discount badges
   - [ ] Featured products

 - Review and Rating Components:
   - [ ] Rating system
   - [ ] Customer reviews

 - Messaging Components:
   - [ ] Notifications
   - [ ] Toast messages
   - [ ] Alerts

 - Forms and Inputs:
   - [x] Text fields
   - [x] Dropdowns
   - [x] Radio buttons
   - [x] Checkboxes
   - [x] Date pickers
   - [x] Range

 - Miscellaneous Components:
   - [ ] Pagination
   - [ ] Loading spinners
   - [ ] Modal/pop-up windows
   - [ ] Tooltips
   - [ ] Progress bars
   - [ ] Avatars

## 🚀 Getting Started
### Prerequisites

Before you begin, ensure that you have Node.js and npm installed on your machine.
### Installation

To install Pluto UI, clone this repository to your local machine:
```
git clone https://github.com/your-username/pluto-ui.git
```

Then, navigate to the cloned repository and install the necessary dependencies:

```
cd pluto-ui
npm install
```
Run Storybook:
```
npm run storybook
```
Open your browser and visit http://localhost:6006 to view the Storybook interface.
### Usage
With Storybook up and running, you can interact with the individual components, explore their variations, and test their behavior in different scenarios directly in your browser.

Feel free to customize and enhance this markdown file to match your project's needs.

## Guidelines for Writing SCSS

When writing SCSS code for our project, please adhere to the following guidelines:

* Classname Convention: Use the following naming convention for SCSS class names:
```
    scss

    .pluto--<element-name> {
      /* Styles for the element */
    }
```
   For example, if you are creating a button component, the SCSS class should be named .pluto--button. This convention helps ensure consistency and avoids naming conflicts.

  *  Modular Approach: Keep the SCSS styles modular and component-based. Each component should have its own SCSS file, organizing the styles specific to that component.

  *  Reusability: Aim for reusable SCSS styles to promote consistency and reduce duplication. Extract common styles into reusable mixins or variables.

  *  Maintainability: Keep the SCSS code clean, readable, and well-organized. Use indentation, comments, and appropriate naming conventions to enhance code maintainability.

  *  Responsiveness: Consider responsive design principles and write SCSS styles that adapt to different screen sizes and devices.

   * BEM Methodology: Consider utilizing the BEM (Block Element Modifier) methodology for naming classes and structuring the SCSS code. This methodology helps create maintainable and scalable styles.

Please ensure that the SCSS code follows these guidelines to maintain a consistent and organized codebase for our UI library.

Feel free to modify and expand upon these guidelines to fit the specific requirements of your project.
## Contributing

We welcome contributions from everyone. Here are some guidelines to get started:

1. Fork the repository and create your branch: `git checkout -b your-branch-name`. For example, if you are working on the Navbar component, you can create a branch named `navbar`.
2. Make your changes and commit them: `git commit -m 'Add some feature'`.
3. Push to your forked repository: `git push origin your-branch-name`.
4. Open a pull request to the main repository's branch(master) and mention which component you have worked on. 

For example, if you have made changes to the Navbar component, you can mention it in the pull request title or description: "Feature: Updated Navbar component".

## Resources

- [React Documentation](https://reactjs.org/docs): React is a popular JavaScript library for building user interfaces. The React documentation provides comprehensive information and guides on React concepts, components, and best practices.
- [Storybook Documentation](https://storybook.js.org/docs): Storybook is a powerful tool for developing UI components in isolation. Refer to the documentation to learn how to set up and use Storybook for Pluto UI development.
- [SCSS Guide](https://sass-lang.com/guide): SCSS (Sass) is a popular CSS preprocessor that offers additional features and flexibility. The SCSS Guide provides detailed information on how to write SCSS code effectively.
