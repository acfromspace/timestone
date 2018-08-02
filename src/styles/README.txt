In order to change the colors/theme of the blog:

Update import statement of the "theme"n object in three files...

/src/layouts/index.js

import theme from "../styles/%YOUR_NEW_THEME_HERE%";

/src/styles/globals.js

import theme from "./%YOUR_NEW_THEME_HERE%";

/gatsby-ssr.js

import theme from "./src/styles/%YOUR_NEW_THEME_HERE%";