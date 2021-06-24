FROM node:14-buster-slim as build

RUN yarn global add gatsby-cli

WORKDIR /app

ADD . .
RUN yarn install --frozen-lockfile \
  && gatsby build

FROM gatsbyjs/gatsby
COPY --from=build /app/public /pub