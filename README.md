#Puppeteer API
![build status](https://api.travis-ci.org/OpenSearchEngine/PuppeteerAPI.svg?branch=master "Build Status")

This is a simple project that runs within Docker to provide a simple API that can be called by other applications. The
project simply takes a url as an input parameter, loads it through puppeteer, then sends a base64 encoded screenshot and
the dom of the page back to the requesting client.

The purpose of this application is to give a "Black Box" service to the OpenCrawl service that it can hit and get the dom
of the page for further indexing. This project is tiny and it's meant to do only one thing.

## Running Puppeteer API Locally
In order to run this project, you must have Docker installed on your machine. Simply run `docker-compose up` from within
the application directory. This will build the project and start it at http://localhost:3000.

An example request to Puppeteer API is as follows:
http://localhost:3000/?url=https%3A%2F%2Fgoogle.com