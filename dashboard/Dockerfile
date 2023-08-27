FROM node:16

WORKDIR /app

COPY yarn.lock ./
RUN yarn

COPY . .
CMD [ "yarn", "start" ]