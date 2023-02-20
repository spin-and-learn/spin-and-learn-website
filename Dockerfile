FROM node:18

WORKDIR /src

COPY  package.json ./
RUN yarn

COPY . .
CMD [ "yarn", "start" ]