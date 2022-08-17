FROM alpine

RUN apk add --update nodejs

WORKDIR /app

COPY ./packages/cart/dist/ dist/
COPY ./packages/cart/src/ src/
COPY ./node_modules/ node_modules/

CMD ["node", "./dist/index.js"]

