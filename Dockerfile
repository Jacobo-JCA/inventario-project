FROM node:alpine

EXPOSE 3000

COPY /src/assets/data/products.json /opt/products.json

RUN yarn global add json-server

CMD ["json-server", "-H", "0.0.0.0", "/opt/products.json"]