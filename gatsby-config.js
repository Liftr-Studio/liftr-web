module.exports = {
  siteMetadata: {
    title: `liftr`,
    siteUrl: `https://www.yourdomain.tld`
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
        theme_color: "rgb(147, 198, 0)",
      },
    },
  ]
};
