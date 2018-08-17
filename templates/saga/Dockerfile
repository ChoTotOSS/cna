FROM node:8.9.0-alpine as builder
WORKDIR /{{project_name}}
COPY . ./
RUN yarn install
RUN yarn build

FROM node:8.9.0-alpine

WORKDIR /{{project_name}}

COPY --from=builder /{{project_name}} ./
RUN yarn install --production=true
EXPOSE 8080
ENTRYPOINT ["yarn", "run"]
CMD ["start:docker"]
