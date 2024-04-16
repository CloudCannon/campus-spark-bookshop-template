const svgContents = require("eleventy-plugin-svg-contents");

module.exports = function(eleventyConfig) {
	eleventyConfig.addWatchTarget("./src/assets/style.css");
	eleventyConfig.addPassthroughCopy("./src/assets/");
	eleventyConfig.addPlugin(svgContents);

	return {
		dir: {
			input: "src",
			output: "_site"
		}
	}
};