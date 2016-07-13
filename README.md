# Raven Development Environment

The technologies used for front-end web development are growing increasingly complex, and creating an environment that efficiently handles those tasks is a problem in itself.

Raven Development Environment takes care of the setup and provides a simple, flexible workflow for building modern websites. Here&rsquo;s what you get:

* Spin up a local web server with LiveReload support
* Compile Sass on the fly
* Move common HTML into separate files and import them as needed
* Minify CSS and JavaScript, compress images, and optimize files for production with a single command
* Use source maps to debug minified code

## Prerequisites

You will need Node.js for most of the features to work. No worries, though — installation is easy. Just [download](https://nodejs.org/) and run the installer.

Once Node.js is installed, you will need to install a task runner. You can use Grunt or Gulp. Run one or both of the following from the command line.

*To install Gulp*: `npm install -g gulp-cli`  
*To install Grunt*: `npm install -g grunt-cli`

## Setup

1. Clone this repository or [download a ZIP file](https://github.com/thomashigginbotham/raven-dev-env/archive/master.zip).
2. From a command line, change to the directory where you saved your files.
3. Run: `npm install`

## Getting Started

Raven Development Environment comes with configurations for both Gulp and Grunt. You can start a development server by running `gulp serve` or `grunt serve` depending on which you installed.

If all went well, a sample page should open in your default web browser. Open your favorite editor, and start making changes. As you save files, your browser should automatically reload to show the changes.

When you&rsquo;re finished, use *ctrl+c* in the command line to stop the server. You can run `gulp` or `grunt` by itself to generate a _dist_ folder that contains optimized code, ready for production use.
