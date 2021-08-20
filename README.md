# keycloak-react
This is a React project for connecting to Keycloak. This is based on a tutorial on https://scalac.io/blog/user-authentication-keycloak-1/.

## What must be installed
- NodeJS
- Docker
- Git

## Install Project

`$ git clone https://github.com/facetproject/facet-keycloak-react.git`

`$ cd facet-keycloak-react` hange directory to project

`$ npm install` Install the dependencies

## Run Dockers
This will start the docker containers used for this project. They are:
- NGINX latest
- Postgres SQL 12.2
- Keycloak 9.0.2
- Mailhog latest - used to connect to Keycloak for emails

`$ docker-compose up` Pull down, install and run the docker containers used for this project

## Run React Project
Once the docker containers are up, start the React project

`$ npm start` The Webpack server will launch on port 3000


'
