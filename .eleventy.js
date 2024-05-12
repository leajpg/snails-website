module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/styles.css");

  eleventyConfig.addLayoutAlias("main", "base.njk");
  eleventyConfig.addLayoutAlias("blog", "post.njk");

  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
