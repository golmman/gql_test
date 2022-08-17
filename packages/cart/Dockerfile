FROM alpine

RUN apk add --update nodejs

COPY dist/ dist/
COPY ../../node_modules/ node_modules/

# CMD ["node ./dist/index.js"]

#CMD ["/bin/sh", "ls"]
CMD ["/bin/ls"]
