import * as colors from "./src/util/colors"

export default {
  title: "@truefit/bach",
  base: "/",
  ignore: ["readme.md"],
  menu: [
    "Getting Started",
    "Advanced",
    "bach",
    "bach-redux",
    "bach-recompose",
    "bach-material-ui",
  ],
  themeConfig: {
    colors: {
      primary: colors.primary,
    },
  },
}
