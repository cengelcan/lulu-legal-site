export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("lulu-logo.svg");
  eleventyConfig.addPassthroughCopy("lulu-logo.png");
  eleventyConfig.addPassthroughCopy("favicon.svg");
  eleventyConfig.addPassthroughCopy({ "public": "public" });

  eleventyConfig.addCollection("sitemapPages", (collection) => {
    return collection.getAll().filter((item) => item.url && !item.data.eleventyExcludeFromCollections);
  });

  eleventyConfig.addFilter("sitemapDate", (value) => new Date(value).toISOString().slice(0, 10));

  return {
    dir: {
      input: "src",
      includes: "../_includes",
      layouts: "../_includes/layouts",
      output: "_site",
    },
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    templateFormats: ["njk", "md", "html"],
  };
};
