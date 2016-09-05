FROM node:6.5

RUN npm install -g gulp

ADD dist /app

WORKDIR /app

CMD ["gulp", "run"]
