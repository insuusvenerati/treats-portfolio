FROM node:lts as build

WORKDIR /app

ARG DATO_API_TOKEN
ENV DATO_API_TOKEN ${DATO_API_TOKEN}

ADD . .
RUN yarn build

FROM gatsbyjs/gatsby

RUN apk add curl
COPY --from=build /app/public /pub