FROM alpine

RUN apk add --update nodejs

WORKDIR /app

COPY ./packages/gateway/dist/ dist/
COPY ./packages/gateway/src/ src/
COPY ./node_modules/ node_modules/

CMD ["node", "./dist/index.js"]

