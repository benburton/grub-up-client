## grub-up-client

Grub Up Client is the cilent-side piece of a [Steel City CodeFest 2015](http://steelcitycodefest.org/) project intending
to help people better discover meals provided by the CitiParks program. The project was originally generated using the
[generator-angular-fullstack](https://github.com/DaftMonk/generator-angular-fullstack) [Yeoman](https://yeoman.io)
project.

You can see a live deployment at [https://grub-up.herokuapp.com/](https://grub-up.herokuapp.com/)

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

#### Install Heroku Toolbelt

Simply [download and install Heroku Toolbelt](https://toolbelt.heroku.com/) for your operating system.

#### Log into Heroku

Using the command line app from the Heroku Toolbelt, log in:

    heroku login
    Enter your Heroku credentials.
    Email: benjamin.joseph.burton@gmail.com
    Password (typing will be hidden):
    Authentication successful.

#### Check for Permissions on Project

To ensure that you have rights to the `grub-up` project on Heroku, use the `heroku list` command, and check that the
results contain the `grup-up` project:

    heroku list | grep grub-up
    grub-up

If this does not return anything, contact someone on the team to get collaborator access to the Heroku project.

#### Push to Heroku

Heroku deployments for the client are managed by
[grunt-build-control](https://github.com/robwierzbowski/grunt-build-control). Use these grunt tasks to deploy:

    grunt build
    grunt buildcontrol:heroku


### License

This project is distributed under the MIT License found in the provided [LICENSE](/LICENSE) file.