## grub-up-client

Grub Up Client is the cilent-side piece of a [Steel City CodeFest 2015](http://steelcitycodefest.org/) project intending
to help people better discover meals provided by the CitiParks program. The project was originally generated using the
[generator-angular-fullstack](https://github.com/DaftMonk/generator-angular-fullstack) [Yeoman](https://yeoman.io)
project.

### Local Development Setup

#### Install Node

Download Node from the [Node website](http://nodejs.org/download/), and follow the installation instructions.

#### Install with NPM

Run

    npm install

to download and install the npm dependencies.

You should also have grunt and bower available locally:

    npm install -g grunt
    npm install -g bower

Then install the bower dependencies:

    bower install

#### Run

    grunt serve


### Deploy to Heroku

    grunt build
    grunt buildcontrol:heroku

### License

This project is distributed under the MIT License found in the provided [LICENSE](/LICENSE) file.