<!-- HEADING -->

<p align="center">
  <img src="./static/icons/icon-512x512.png" width="60">
</p>
<h1 align="center">️
  timestone
</h1>

<!-- DESCRIPTION -->

<h3 align="center">
  <span role="img" aria-label="Hourglass Not Done">⏳</span>
</h3>
<p align="center">
  <strong>Personal portal to the dimensions of time.</strong><br>
  Created with Gatsby in order to showcase my development learnings.
</p>

<!-- INFORMATION (Shields:IO) -->

<p align="center">
    <a href="https://github.com/acfromspace/timestone/blob/master/LICENSE">
        <img src="https://img.shields.io/github/license/mashape/apistatus.svg"
            alt="License: MIT"></a>
    <img src="https://img.shields.io/badge/location-compromised%20by%20Thanos-red.svg"
            alt="Location: Compromised by Thanos">
    <a href="https://twitter.com/intent/follow?screen_name=acfromspace">
        <img src="https://img.shields.io/twitter/follow/acfromspace.svg?style=social&logo=twitter"
            alt="Follow @acfromspace"></a>
</p>

<!-- FEATURES (Gif goes right below) -->

<p align="center">
  <img src="./static/demo.gif">
</p>

[*timestone*](https://timestone.netlify.com) is a blog website with the following features:

- **Blazing fast loading thanks to Gatsby.** Get all the benefits of static websites with none of the limitations. Gatsby sites are fully functional React apps, so you can create high-quality, dynamic web apps, from blogs to ecommerce sites to user dashboards.

- **Customizability.** Within the "src" folder, all adaptable files to be made by the user are available. One can even go further to possibly add in aesthetic javascript node packages to add visuals.

- **Hosted with Netlify.** Netlify offers both web-based and command-line interfaces in order to adapt to an extremely easy and intuitive user interface dependent on the user.

<!-- QUICK INSTALLATION -->

## <span role="img" aria-label="Sparkles">✨</span> "Snappy" Installation (Quick Installation)

- Ensure Gatsby is installed on your machine `npm install --global gatsby-cli`
- Clone the repo `gatsby new YOU_PICK_NAME https://github.com/acfromspace/timestone`
- Change directory `cd YOU_PICK_NAME`
- Install node packages `npm install`
- Serve it locally `gatsby develop`
- Go to `http://localhost:8000`

<!-- IN-DEPTH INSTALLATION -->

## <span role="img" aria-label="Rocket">🚀</span> Putting this in the Infinity Gauntlet (In-Depth Installation)

You can get a new Gatsby site up and running on your local dev environment as soon as possible.

1.  **Create a Gatsby copy.**

    <!-- ```sh means shell code syntax -->

    Choose your favorite text editor (I use Visual Studio Code) and activate the terminal (or just use the terminal itself). Navigate to an area where you would like to put the repository (the files), normally I choose my Desktop or a designated folder.

    ```sh
    # install the Gatsby CLI globally so your computer knows what Gatsby is
    npm install --global gatsby-cli

    # create a new Gatsby site using the 'timestone'
    gatsby new YOU_PICK_NAME https://github.com/acfromspace/timestone
    ```

2.  **Start the site in `develop` mode.**

    Next, move into your new site’s directory and start it up:

    ```sh
    # changes directory
    cd YOU_PICK_NAME

    # make sure to update packages and meet system requirements
    npm install (or) yarn

    # Gatsby command to create a live server on your end
    gatsby develop
    ```
    
    **Note:** Performing `gatsby develop` will create `.cache` and `public` folders which help run the website on your local server. These will not be pushed to the repo online, but locally on your own machine.

3.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`. Open the `YOU_PICK_NAME` directory in your code editor of choice and edit `src`. Save your changes and the browser will update in real time!

4.  **Push to your Git repository**

    ```sh
    # Create a new repo on Github and name it accordingly
    Github.com > New repository > Create repository

    # Return to the terminal and use this command to cancel the live server
    CTRL + C (You should see the directory afterwards ../YOU_PICK_NAME>)

    # Initialize, add files, commit, add origin, and push to the repo
    git init
    git add .
    git commit -m "first commit"
    git remote add origin YOUR_REPO_URL_HERE
    git push -u origin master
    ```

5.  **Create an account with Netlify and follow the steps**

    I would put the steps here, but Netlify does such a good job guiding people, there's no need to. Simply go on their website, make an account, link up your GitHub, and choose accordingly.
    
    If it prompts for `build command` and `build location`, but doesn't fill it in automatically, put in `gatsby build` and `public` respectively.

    To have a demonstration of how easy it is, click on this the button below. 
    
    (Note this will create the website based off of *my version*, so if you have any edits, follow the original steps, this is merely for demo purposes or for those who want a quick start.)

    <!-- NETLIFY BUTTON -->
    [![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/acfromspace/timestone)
    
    At this point, you’ve got a fully functional Gatsby website that anyone can access via Netlify. 

    Any questions? Put an issue onto the repo and we'll sort it out!

<!-- EXTERNAL SERVICES -->

## <span role="img" aria-label="Doggo">🐕</span> Fetch information doggo! (External Services)

The starter uses external services for some functions: searching and analytics. To use them you have to secure some access data. All services are free to use or have generous free tiers big enough for a personal project.

Create an `.env` file like below in the root folder. Change `...` placeholders with your own keys.

```text
GOOGLE_ANALYTICS_ID=...
ALGOLIA_APP_ID=...
ALGOLIA_SEARCH_ONLY_API_KEY=...
ALGOLIA_ADMIN_API_KEY=...
ALGOLIA_INDEX_NAME=...
```

If you wish not to use external services, simply comment out the respective sections in `gatsby-config.js`.

<!-- WHAT'S INSIDE? -->

## <span role="img" aria-label="Thinking Face">🤔</span> What's inside?

A quick look at the top-level files and directories you'll see in this Gatsby project.

       .
    1  ├── content
    2  ├── node_modules
    3  ├── public
    4  ├── scripts
    5  ├── src
    6  ├── static
    7  ├── .babelrc
    8  ├── .editorconfig
    9  ├── .gitignore
    10 ├── .prettierrc
    11 ├── gatsby-browser
    12 ├── gatsby-config.js
    13 ├── gatsby-node.js
    14 ├── gatsby-ssr
    15 ├── LICENSE
    16 ├── package-lock.json
    17 ├── package.json
    18 └── README.md

  1. **`/content`**: Mainly markdown files to create your blog posts! Make sure to have the required properties or else the posts won't render correctly.

  2.  **`/node_modules`**: The directory where all of the modules of  code that your project depends on (npm packages) are automatically installed.  

  3.  **`/public`**: What the user sees if pondering your website.
  
  4.  **`/scripts`**: Contains a script to create favicons! Instructions in the file itself.

  5.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser), like your site header, or a page template. “src” is a convention for “source code”.

  6. **`/static`**: The directory where HTML dependencies lie. Normally the `favicon.ico` (the image next to the title in the browser tab), goes here.

  7.  **`.babelrc`**: This file enables to write modern JavaScript that will be "transpiled" to widely-supported Javascript. Think of it as a language translator for all devices that will see your website.
  
  8.  **`.editorconfig`**: [EditorConfig](https://editorconfig.org) helps developers define and maintain consistent coding styles between different editors and IDEs
  
  9.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for. For instance, you shouldn't let anyone get your `.env` files (These usually contain your password and such to speak with APIs).
  
  10.  **`.prettierrc`**: This is a configuration file for a tool called [Prettier](https://prettier.io/), which is a tool to help keep the formatting of your code consistent.
  
  11.  **`gatsby-browser.js`**: Implements [certain APIs](https://www.gatsbyjs.org/docs/browser-apis/) that the file maintains that deals with client side rendering.
  
  12.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://next.gatsbyjs.org/docs/gatsby-config/) for more detail).
  
  13.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby node APIs](https://next.gatsbyjs.org/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process. This project contains none, but the file remains if one wishes to build blog posts or of the sort.
  
  14.  **`.gatsby-ssr.js`**: Implements [certain APIs](https://www.gatsbyjs.org/docs/ssr-apis/) that the file maintains that deals with server side rendering.
  
  15.  **`LICENSE`**: This project is licensed under the MIT license.
  
  16.  **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. (You won’t change this file directly)
  
  17.  **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.
  
  18.  **`README.md`**: A text file containing useful reference information about your project. The one you're reading right now!

<!-- LICENSE -->

## [License](LICENSE)

The code in this project is licensed under MIT license.
