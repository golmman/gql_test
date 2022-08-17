FROM alpine

RUN apk add --update nodejs

WORKDIR /app

COPY ./packages/product/dist/ dist/
COPY ./packages/product/src/ src/
COPY ./node_modules/ node_modules/

CMD ["node", "./dist/index.js"]

