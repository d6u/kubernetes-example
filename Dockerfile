FROM nodesource/trusty:4.2.1

ENV DEBIAN_FRONTEND noninteractive
ENV NODE_ENV development

RUN mkdir /app
WORKDIR /app
ADD package.json /app/
ADD lib /app/lib
RUN npm i

CMD ["node", "lib/index.js"]
