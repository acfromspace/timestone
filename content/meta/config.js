const colors = require("../../src/styles/colors");

module.exports = {
  siteTitle: "acfromspace [TIME]", // <title>
  shortSiteTitle: "acfromspace", // <title> ending for posts and pages that appears in the tab
  siteDescription: "SITE DESCRIPTION GOES HERE",
  siteUrl: "https://acfromspace.netlify.com",
  pathPrefix: "",
  siteImage: "preview.jpg",
  siteLanguage: "en",
  // author
  authorName: "AC De Leon",
  authorTwitterAccount: "acfromspace",
  // Side important info goes here
  infoTitle: "acfromspace",
  infoTitleNote: "Development blog.",
  // manifest.json
  manifestName: "MANIFEST NAME GOES HERE",
  manifestShortName: "MANIFEST SHORT NAME GOES HERE", // max 12 characters
  manifestStartUrl: "/",
  manifestBackgroundColor: colors.background,
  manifestThemeColor: colors.background,
  manifestDisplay: "MANIFEST DISPLAY GOES HERE",
  // contact
  contactEmail: "aadeleon@sdsu.edu",
  // social
  authorSocialLinks: [
    { name: "github", url: "https://github.com/acfromspace" },
    { name: "twitter", url: "https://twitter.com/acfromspace" },
    { name: "facebook", url: "http://facebook.com/greglobinski" }
  ]
};
