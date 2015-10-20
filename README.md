Datawijs.be
==============

Website for Datawijs

# Deployment

Make sure bower is installed

    npm install -g bower

Go to root folder of project in CLI

Run following command:

> bower update

This should install the jQuery, Modernizr, FontAwesome and Slick Carousel packages

Everything should now be into place to upload the site.

# Development

Install gulp to preprocess SASS to CSS

    npm install -g gulp
    npm install

Run gulp once

    gulp sass

Or let gulp watch for changes and keep the CSS up-to-date

    gulp