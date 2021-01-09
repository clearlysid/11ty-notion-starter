const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function (eleventyConfig) {
	eleventyConfig.addPassthroughCopy("styles.css");
	eleventyConfig.addPlugin(syntaxHighlight);

	return {
		htmlTemplateEngine: "liquid",
		passthroughFileCopy: true,
	};
};
