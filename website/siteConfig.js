/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

const siteConfig = {
  title: "Bach", // Title for your website.
  tagline:
    "A utility library that allows React developers to compose components in functional manner.",
  url: "https://", // Your website URL
  baseUrl: "/", // Base URL for your project */

  // Used for publishing and more
  projectName: "bach",
  organizationName: "truefit",

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [{ search: true }],
  
  algolia: {
    apiKey: 'c7de271b8b6a2e67ef5029316e5101a8',
    indexName: 'truefit-bach',
  },

  gaTrackingId: 'UA-68944174-4',

  /* path to images for header/footer */
  headerIcon: null,
  footerIcon: null,
  favicon: "img/favicon.ico",

  // Open Graph and Twitter card images.
  ogImage: "img/favicon.ico",
  twitterImage: "img/favicon.ico",

  /* Colors for website */
  colors: {
    primaryColor: "#A7414A",
    secondaryColor: "#282726"
  },

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} Truefit`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: "default"
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: ["https://buttons.github.io/buttons.js"],

  // On page navigation for the current documentation page.
  onPageNav: "separate",

  // No .html extensions for paths.
  cleanUrl: true
};

module.exports = siteConfig;
