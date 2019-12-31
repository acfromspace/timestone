const colors = require("../../src/styles/colors");

module.exports = {
  siteTitle: "[DEV] acfromspace", // <title>
  shortSiteTitle: "acfromspace", // <title> ending for posts and pages that appears in the tab
  siteDescription: "Personal portal to the dimensions of time.",
  siteUrl: "https://timestone.netlify.com",
  pathPrefix: "", // ????
  siteImage: "", // ???
  siteLanguage: "en", // English
  // author
  authorName: "AC De Leon",
  authorTwitterAccount: "",
  // Side important info goes here
  infoTitle: "acfromspace",
  infoTitleNote: "Development Blog",
  // manifest.json, not sure what this really does
  manifestName: "acfromspace",
  manifestShortName: "ac", // max 12 characters
  manifestStartUrl: "/",
  manifestBackgroundColor: colors.background,
  manifestThemeColor: colors.background,
  manifestDisplay: "",
  // contact
  contactEmail: "acfromspace.deleon@gmail.com",
  // social
  authorSocialLinks: [
    // { name: "github", url: "https://github.com/acfromspace" },
    // { name: "twitter", url: "N/A" },
    // { name: "facebook", url: "N/A" },
    { name: "home", url: "https://spacestone.netlify.com" },
  ]
};
