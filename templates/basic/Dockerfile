FROM node:8.9.0-alpine as builder
WORKDIR /bookmark
COPY . ./
RUN yarn install
RUN yarn build

FROM node:8.9.0-alpine

WORKDIR /bookmark

COPY --from=builder /bookmark ./
RUN yarn install --production=true
EXPOSE 8080
ENTRYPOINT ["yarn", "run"]
CMD ["start:docker"]
