# Campus Spark

Campus Spark is single page website website template for Eleventy for higher ed use cases.

[![Deploy to CloudCannon](https://buttons.cloudcannon.com/deploy.svg)](https://app.cloudcannon.com/register/#sites/connect/github/cloudcannon/campus-spark-bookshop-template)

## Features

- Pre-built pages
- Pre-styled components
- Configurable navigation and footer
- Optimized for editing in CloudCannon
- Responsive layouts

## Editing

Campus Spark is set up for adding, updating and removing pages, components, posts, navigation and footer elements in [CloudCannon](https://app.cloudcannon.com/).

Changes in the data files require the site to be rebuilt to see your changes.

## Setup

Get a workflow going to see your site's output (with [CloudCannon](https://app.cloudcannon.com/) or locally).

## Local quickstart

1. Run `npm i` to install the modules.
2. Run `npm run start` to run the project. This will create a `_site` folder, where all the developed files will remain.

By default the site will be at `http://localhost:8080`

## Components

Campus Spark is built using Bookshop components. Bookshop is a framework that allows you to use component architecture in your static site, and enables live editing in CloudCannon. You can read more about Bookshop and how it integrates with Eleventy [here](https://cloudcannon.com/documentation/guides/bookshop-eleventy-guide/).

## Image optimization

The site uses the [eleventy image plugin](https://www.11ty.dev/docs/plugins/image/) to optimize your images.

To keep build times short you can set preserved paths for your image optimizations by setting preserved paths following the instructions below:

1. Within your site on CloudCannon navigate to Site Settings (found at the bottom of the site sidebar)

2. Navigate to the configuration tab

3. Open "caching options"

4. Add `node_modules/,_site/optimized/` to the preserved paths section

This will mean that only new/updated images get optimized on build.

See [this blog](https://cloudcannon.com/blog/automatically-optimize-your-images-with-eleventy-image-and-cloudcannon/) for more on optimizing images with Eleventy and CloudCannon.

## Accessibility

We have made efforts to prioritize accessibility in our design, but we acknowledge that it may not be perfect. Your feedback is valuable to us, so please feel free to share any suggestions or concerns to help us improve accessibility further.
