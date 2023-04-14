# Mikadifo

This is my personal website.

### Sections:

-   Navbar
-   Call to Action
-   About me
-   Projects
-   Experience (Where I've worked)
-   Studies (Where I've studied)
-   Reviews
-   Contact Form
-   Footer

### Features:

-   Dark mode
-   Links to social media
-   Contact form using [getform.io](https://www.getform.io)
-   Projects and Reviews Carousel
-   Responsive Design

### Technologies:

-   ReactJS
-   Gatsby
-   TailwindCSS
    <!--- Cypress-->
    <!--- Jest-->

# Available Scripts

Do not use **yarn**. Only **npm** so the project works propertly. The project was built using Gatsby.

In the project directory, you can run:

## `npm run develop` or `gatsby develop`

Runs the app in the development mode.\
Open [http://localhost:8000](http://localhost:8000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## `npm run develop:h`

Runs the app in the development mode but using the `-H 0.0.0.0` flag so you can see it on your mobile browser as well.\
Open [http://localhost:8000](http://localhost:8000) to view it in your browser.\
Open `http://[your-ip-address]:8000` to view it in your mobile or other device browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.\
It might take a little longer to load for the first time on mobile.

<!--## `npm test`-->

<!--Launches the test runner in the interactive watch mode.\-->
<!--See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.-->

## `npm run build` or `gatsby build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

Your app is ready to be deployed!

See the section about [building](https://www.gatsbyjs.com/docs/conceptual/overview-of-the-gatsby-build-process/) for more information.

## `npm run serve` or `gatsby serve`

Serves the production build of the project for testing before deployment.\
Should be run from the root of the project.\
This will use the `.env.production` file.

## `npm run clean` or `gatsby clean`

Deletes the `.cache` and public directories.\
Should be run from the root of the project.

## `npm run deploy`

Build and uses gh-pages to deploy the project using the public directory.
In order to deploy with gh-pages the name of the repository must be like this: `[your-gh-user].github.io`

---

### Reference

[Gatsby official docs](https://www.gatsbyjs.com/docs/reference/gatsby-cli/)

# How to Run the Project

1. Fork the master branch.
2. Clone the project from your forked repository.
3. Run `npm install` to install all the dependencies.
4. Run `npm run develop` or `npm run develop:h` to start the project.

If you want to make the form work, you will need to create a [getform.io](https://www.getform.io) acccount and create a new endpoint. Once you have your own endpoint add the following `.env` files:

A `.env.development` file in the root directory with the following content.

```
GATSBY_API_URL=https://getform.io/f/
GATSBY_API_KEY=your-getform-endpoint
```

A `.env.production` file in the root directory with the following content. (Only if you're gonna use the `serve` command)

```
GATSBY_API_URL=https://getform.io/f/
GATSBY_API_KEY=your-getform-endpoint
```

If you have any problem setting up the project, feel free to contact me or create an issue.

# Contribuing

Everyone can freely suggest changes on the project to improve it or fix bugs and issues, I'll really appreciate that.

# Future

-   Write e2e tests using cypress to ensure accesibility and proper visualization for any device.
-   Write unit tests for main components and pages using jest.
-   Add dependabot to keep all dependencies up to date.
-   Implement animations in certain elements like the projects and reviews carousel.
-   Find a way to show descriptions on every tag in `experience` and `education` components. (This is working on bigger screens but on mobile I couldn't find a way to add that information)
-   Improve current github actions workflows.

# LICENSE

Copyright (C) 2022 mikadifo

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as published
by the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU Affero General Public License for more details.

Read the full license [here](LICENSE.md).
