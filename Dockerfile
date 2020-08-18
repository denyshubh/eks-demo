FROM mhart/alpine-node:14 AS builder

# Create app directory
RUN mkdir /app
WORKDIR /app

# Install client dependencies
COPY package.json /app
RUN yarn

# Bundle client source
COPY . /app

RUN yarn run build
# CMD ["yarn", "start"]

FROM mhart/alpine-node:14
RUN yarn global add serve
WORKDIR /app
COPY --from=builder /app/build .
CMD ["serve", "-p", "4000", "-s", "."]

# production setup
# FROM nginx:1.12-alpine
# COPY --from=build-deps /usr/src/app/build /usr/share/nginx/html
# EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]
