# Generic Hairdressers' homepage using Gatsby

<div style="font-size: 4em; text-align: center">
  💇
</div>

Template for the website of e.g. a hairdressing salon.
Feel free to browse the code, although it is **not** open source.
A huge shoutout to [wanLo](https://github.com/wanLo), whose repository [buchbinderei](https://github.com/wanLo/buchbinderei) was a great inspiration for this.

A [live version](https://laurenzfg-generic-hairdresser.netlify.app/) of the repo is hosted at Netlify. 

## 🏃 How to run?

  Navigate into your new site’s directory and start it up.
  Prerequisites are:
    - A working installation of nodejs + npm
    - A global installation of [gatsby](https://www.gatsbyjs.com/) (tested: v2.27.0)

  ```shell
  cd generic-haridresser
  npm install
  gatsby develop
  ```

## 👷 What can stillt be improved?

The template is still far from perfect:
- [ ] Use `gatsby-plugin-manifest` to include the favicon the modern way. Currently it's still a good ol' .ico in the root folder
- [ ] Include images in the pipeline. Images are currently plain .jpg assets. The pipeline could convert them to webp and make rendering faster by inserting a placeholder during the HTTP requests.
- [ ] Specify a schema for the markdown frontmatter. Currently, this is dynamically populated. Thus all fields have to be present at least once, otherwise a different schema is deducted and compilation fails.
- [ ] Make the contact form look less foreign.

## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── node_modules
    ├── src
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

2.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

3.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

4.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

5.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.com/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

6.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.com/docs/gatsby-config/) for more detail).

7.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.com/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

8.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.com/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

9.  **`LICENSE`**: This Gatsby starter is licensed under the 0BSD license. This means that you can see this file as a placeholder and replace it with your own license.

10. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

11. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

12. **`README.md`**: A text file containing useful reference information about your project.
