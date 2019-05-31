module.exports = {
  siteMetadata: {
    title: `@truefit/bach`,
    description: `A utility library that allows React developers to compose components in functional manner.`,
    author: `@truefit`,
  },
  __experimentalThemes: [
    {
      resolve: "gatsby-theme-docz",
    },
  ],
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
}
