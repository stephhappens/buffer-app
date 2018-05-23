# buffer-code-exercise-front-end

* [Getting started](#getting-started)
* [About this repo](#about-this-repo)
* [The exercise](#the-exercise)

## Getting started

1. Install [Node.js](https://nodejs.org/en/) version 8.x
2. Clone this repo: `git clone git@github.com:bufferapp/buffer-code-exercise-front-end.git`
3. Install dependencies: `cd buffer-code-exercise-front-end && npm install`
4. Start up the local server in development mode `npm run development`

Now you'll have a local server running! Follow along to the next section
to learn more about how this project is organized.

## About this repo

### Client side code

The client code is located in `/client`. The main entry point or root file
is `client.js`. This is the starting file from which all other modules are
imported and referenced. Files can be imported using [ES2015 style `import` modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)
or the [commonjs style `require` modules](http://www.commonjs.org/specs/modules/1.0/). The front-end is built using [React.js](https://reactjs.org/docs/hello-world.html) components.

When running the `npm run development` command, [`webpack`](https://webpack.js.org/)
will be started. Webpack is a build tool that will automatically bundle your
code into a single file. This bundled file will be created in `/public`.

All static assets like javascript files, stylesheets, and images should be
placed in the `/public` directory. When the server is started, these files will
all be available at `localhost:8080`.

### Server side code

The server code is located in `/server`. The main entry point is `server.js`.

The server is written using [Express.js](https://expressjs.com/) which is
similar to [Sinatra for Ruby](http://sinatrarb.com/),
[Flask for Python](http://flask.pocoo.org/), or
[Lumen for PHP](https://lumen.laravel.com/) if you are more familiar with
those languages.

The "database" is a fake database which reads data from json files in the `/server/database` directory.


## The exercise

We expect these tasks to take about 4 hours, but they may take less for you. If you have any questions or would like clarification, email dan@buffer.com. Further down here are screenshots of the hopeful project end result!

### How to complete the exercise

As your complete parts of the exercise, please use git to commit your code as you would normally work on a project. This is helpful component to see how you work as well.

When you are complete, you can submit your work by zipping your the `buffer-code-exercise-front-end` directory then emailing to us. Please remove the `node_modules` directory before you zip, that won't be necessary 😉. You can use Mac's "create archive" feature, Window's "compressed (zipped) folder," or the zip cli on Linux.

Try to complete the tasks to the best of your ability 😃 Good luck!

### Tasks

1. Add a “Load More” button at the end of the list of updates which loads the next 20 updates each time
2. Add the Analytics metrics (retweets, favorites, clicks) on each update in the update list (see screenshot below)
3. Add an `AnalyticsSummary` component to the right of the updates list which aggregates the analytics totals for the updates that have been loaded.
4. Complete the CSS to match the design spec. If you would like, please feel free to add your personal touches where you see the design could be improved.

### Helpful resources

[A list of icons available](https://icons.buffer.com/0.17.0/buffer-icons.html)

### Screenshots

In addition to the screenshot, here is a video of the "Load More" button working along with the `AnalyticsSummary` component: [http://hi.buffer.com/3R3E1A2z1f0F](http://hi.buffer.com/3R3E1A2z1f0F)

![screenshot of end goal](http://hi.buffer.com/0I2U0N1b3c0b/Screen%20Shot%202018-05-16%20at%206.29.50%20PM.png)

### Version

1.0
