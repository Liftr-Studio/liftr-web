module.exports = {
  siteMetadata: {
    title: `Liftr Studio`,
    siteUrl: `https://www.liftr.studio`,
    description: `Launch sensational products`,
    image: `/static/liftr-social-media.jpg`,
    twitterUsername: `@liftrstudio`,
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-mdx",
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "pages",
        "path": "./src/pages/"
      },
      __key: "pages"
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: "src/images/icon.png",
        name: "Liftr Studio",
        short_name: "Liftr Studio",
        start_url: `/`,
        background_color: "rgb(254, 82, 82)",
        theme_color: "rgb(0, 34, 119)",
      },
    },
  ]
};
