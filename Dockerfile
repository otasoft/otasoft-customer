FROM node:12-alpine as BUILD_IMAGE

RUN apk update && apk add yarn curl bash make && rm -rf /var/cache/apk/*

WORKDIR /usr/share/otasoft-customer

RUN curl -sfL https://install.goreleaser.com/github.com/tj/node-prune.sh | bash -s -- -b /usr/local/bin

COPY package.json yarn.lock ./

RUN yarn --frozen-lockfile

FROM node:12-alpine

WORKDIR /usr/share/otasoft-customer

RUN npm prune --production

RUN /usr/local/bin/node-prune

FROM node:12-alpine

WORKDIR /usr/share/microservices/otasoft-customer

COPY --from=BUILD_IMAGE /usr/share/microservices/otasoft-customer/dist ./dist
COPY --from=BUILD_IMAGE /usr/share/microservices/otasoft-customer/node_modules ./node_modules

EXPOSE 60323

CMD ["node", "dist/main"]
