const { DateTime } = require("luxon");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("css/");
    eleventyConfig.addPassthroughCopy("images/");
    eleventyConfig.addPassthroughCopy("graphic/")
    eleventyConfig.addPassthroughCopy("scripts/");
    eleventyConfig.addPassthroughCopy(".well-known/");
    eleventyConfig.addPlugin(syntaxHighlight);

    eleventyConfig.addFilter("asPostDate", (dateObj) => {
        return DateTime.fromJSDate(dateObj).toFormat("dd.MM.yy");
    });
};
