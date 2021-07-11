FROM node:14-buster-slim as build

RUN yarn global add gatsby-cli

WORKDIR /app

ARG DATO_API_TOKEN
ENV DATO_API_TOKEN ${DATO_API_TOKEN}

ADD . .
RUN yarn \
  && gatsby build --prefix-paths

FROM gatsbyjs/gatsby
COPY --from=build /app/public /pub