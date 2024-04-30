const svgContents = require("eleventy-plugin-svg-contents");
const Image = require("@11ty/eleventy-img");
const pluginBookshop = require("@bookshop/eleventy-bookshop");
const yaml = require("js-yaml");

module.exports = function(eleventyConfig) {
	eleventyConfig.addWatchTarget("./src/assets/style.css");
	eleventyConfig.addPassthroughCopy("./src/assets/");
	eleventyConfig.addPlugin(svgContents);

	eleventyConfig.addShortcode("image", async function (src, alt, widths, sizes) {
		if (src === undefined) {
			return "";
		}

		let metadata = await Image(`src/${src}`, {
			widths: [widths],
			formats: ["avif", "webp", "svg", "jpeg"],
			outputDir: "./_site/optimized/",
      		urlPath: "/optimized/",
		});

		let imageAttributes = {
			alt,
			sizes,
			loading: "lazy",
			decoding: "async",
		};

		return Image.generateHTML(metadata, imageAttributes);
	});

	eleventyConfig.addDataExtension("yml", (contents) => yaml.load(contents));

	eleventyConfig.addPlugin(pluginBookshop({
		bookshopLocations: ["component-library"],  
		pathPrefix: '', 
	  }));

	return {
		dir: {		
			input: "src",
			output: "_site"
		}
	}
};