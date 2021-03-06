## Adevinta assessment

[![Build Status](https://travis-ci.org/jacxon4/jacxon4.adevinta.assessment.github.io.svg?branch=master)](https://travis-ci.org/jacxon4/jacxon4.adevinta.assessment.github.io)

Implementation based on [Adevinta's exercise](Assessment-readme.md) following the constrains and expectations.

Demo available at [GitHub pages](https://jacxon4.github.io/jacxon4.adevinta.assessment.github.io/)

## Getting started

Run from console:

    npm install
    npm start

Access to `localhost:8080` to see results

## Development

Run next sentence from console to trigger tests on any change of implementation:

    npm run test:watch

## Bundling for production

Run next sentence from console. Bundling files will be placed under `build-prod` folder

    npm run build

TravisCI is automatically creating images and pushing them to [DockerHub](https://hub.docker.com/u/jacxon4)

## Docker build

Run next sentence from console in order to generate a docker image

    npm run build:docker

Once the docker has ben created, you can start it up using

    docker run -d -p <your_port>:80 --name=<desired_name> jacxon4.adevinta.assessment.github.io
