# If you're doing anything beyond your local machine, please pin this to a specific version at https://hub.docker.com/_/node/
# Always use slim. If you need additional packages, add them with apt
# Alpine variants are not officially supported by Node.js, so we use the default debian variant
FROM node:18-alpine

# set our node environment, either development or production
# defaults to production, compose overrides this to development on build and run
ARG NODE_ENV=development
ENV NODE_ENV $NODE_ENV

# default to port 3000 for React, adjust as needed
ARG PORT=3000
ENV PORT $PORT
EXPOSE $PORT

# you'll likely want the latest npm, regardless of node version, for speed and fixes
# but pin this version for the best stability
RUN npm i npm@latest -g

# the official node image provides an unprivileged user as a security best practice
# but we have to manually enable it. We put it here so npm installs dependencies as the same
# user who runs the app.
# https://github.com/nodejs/docker-node/blob/master/docs/BestPractices.md#non-root-user
USER node

# install dependencies first, in a different location for easier app bind mounting for local development
# WORKDIR now sets the correct permissions if you set USER first
WORKDIR /opt/react_app

# COPY --chown=node:node package.json package-lock.json* ./
COPY --chown=node:node package.json ./

# RUN npm ci && npm cache clean --force
ENV PATH /opt/react_app/node_modules/.bin:$PATH
RUN npm install --legacy-peer-deps && npm cache clean --force

# copy in our source code last, as it changes the most
# copy in as node user, so permissions match what we need
WORKDIR /opt/react_app/app
COPY --chown=node:node . .

# if you want to use npm start instead, then use `docker run --init in production`
# so that signals are passed properly.
CMD ["npm", "start"]
