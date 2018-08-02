import { createMuiTheme } from "@material-ui/core/styles";
import Color from "color";
import colors from "./colors";

// "Garamond" is a great font for reading, but for physical options, not technological ones
// Can use colors.transparent as what it says (Seek colors package documentation for more details)

const theme = createMuiTheme({
  // Base foundation of the whole webpage
  base: {
    colors: {
      background: colors.background,
      text: colors.bright,
      link: colors.blizzard,
      linkHover: Color(colors.blizzard)
        .lighten(0.3)
        .string(),
      accent: colors.blizzard,
      lines: colors.transparent
    },
    sizes: {
      // Affects lines height in correlation to other components
      linesMargin: "20px"
    },
    fonts: {
      unstyledFamily: `Arial`,
      styledFamily: "Open Sans",
      styledFonts: "300,400,600"
    }
  },
  // Side info to the left w/ the picture
  info: {
    colors: {
      text: colors.superLightGray,
      background: colors.side,
      socialIcons: colors.blizzard,
      socialIconsHover: colors.accent,
      menuLink: colors.blizzard,
      menuLinkHover: colors.accent
    },
    sizes: {
      width: 320,
      headerHeight: 200
    },
    fonts: {
      boxTitleSize: 1.3,
      boxTitleSizeM: 1.5,
      boxTitleSizeL: 1.7
    }
  },
  // All the side posts to the left when a certain post is open and the post index itself
  navigator: {
    colors: {
      background: colors.background,
      postsListItemLink: colors.superLightGray,
      postsListItemLinkHover: colors.test, // ???
      postsHeader: colors.blizzard // When in side info menu, "Lists of Posts" turns this color
    },
    sizes: {
      closedHeight: 80,
      postsListItemH1Font: 1.3,
      postsListItemH2Font: 1.1,
      fontIncraseForM: 1.15,
      fontIncraseForL: 1.3
    }
  },
  // Main area for posts
  main: {
    colors: {
      background: colors.background,
      title: colors.bright,
      subTitle: colors.bright,
      meta: colors.blizzard, // Date
      content: colors.superLightGray,
      footer: colors.accent, // Share, author description
      contentHeading: colors.blizzard, // #, ##, ###, Headers
      blockquoteFrame: colors.blizzard, // [ Quote ]
      link: colors.accent, // ???
      linkHover: colors.test, // ???
      fbCommentsColorscheme: "light"
    },
    sizes: {
      articleMaxWidth: "50em"
    },
    fonts: {
      title: {
        size: 1.9,
        sizeM: 2.5,
        sizeL: 2.7,
        weight: 600,
        lineHeight: 1.1
      },
      subTitle: {
        size: 1.5,
        sizeM: 1.8,
        sizeL: 1.95,
        weight: 300,
        lineHeight: 1.1
      },
      meta: {
        size: 0.9,
        weight: 600
      },
      content: {
        size: 1.0,
        sizeM: 1.15,
        sizeL: 1.1,
        lineHeight: 1.6
      },
      contentHeading: {
        h2Size: 1.5,
        h3Size: 1.3,
        weight: 600,
        lineHeight: 1.3
      },
      footer: {
        size: 1,
        lineHeight: 1.4
      }
    }
  },
  // ???, Footer section from my understanding
  footer: {
    colors: {
      text: Color(colors.test)
        .lighten(0.5)
        .string(),
      link: colors.blizzard,
      linkHover: Color(colors.blizzard)
        .lighten(0.3)
        .string()
    },
    fonts: {
      footnote: {
        size: 0.8,
        lineHeight: 1.4
      }
    }
  },
  // Bar located to the right
  bars: {
    colors: {
      background: colors.side,
      icon: colors.blizzard,
      text: colors.blizzard
    },
    sizes: {
      // Width of the actionsBar (Bar to the right)
      actionsBar: 60,
      // ???
      infoBar: 60
    }
  },
  // ???, I'm sure "thresholds" is misspelled
  mediaQueryTresholds: {
    M: 600,
    L: 1024
  },
  // Palette
  palette: {
    primary: {
      // Affects buttons
      main: colors.blizzard
    },
    action: {
      hover: "rgba(0, 0, 0, 0.01)"
    }
  },
  // Typography
  typography: {
    fontFamily: `Arial, sans-serif`,
    fontSize: 16
  }
});

export default theme;
