FROM node:12-alpine as build

WORKDIR /usr/share/otasoft-customer

ADD dist package.json ./

RUN yarn install --production

FROM node:12-alpine

WORKDIR /usr/share/otasoft-customer

COPY --from=build /usr/share/otasoft-customer .

EXPOSE 60231

CMD ["node", "main.js"]